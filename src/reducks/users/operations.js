import { push } from "connected-react-router";
import { signInAction, signOutAction } from "./actions";
import { auth, db, FirebaseTimestamp } from "../../firebase/index";

export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(
              signInAction({
                isSignedIn: true,
                uid: uid,
                username: data.username,
                role: data.role,
              })
            );
          });
      } else {
        dispatch(push("/signin"));
      }
    });
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    if (email === "" || password === "") {
      alert("Must be filled all fields.");
      return false;
    }
    auth.signInWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;
      if (user) {
        const uid = user.uid;
        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(
              signInAction({
                isSignedIn: true,
                uid: uid,
                username: data.username,
                role: data.role,
              })
            );
            dispatch(push("/"));
          });
      }
    });
  };
};

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Must be filled all fields.");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Password must be matched.");
      return false;
    }
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();
          const userInitialData = {
            uid: uid,
            username: username,
            email: email,
            role: "user",
            created_at: timestamp,
            updated_at: timestamp,
          };
          db.collection("users")
            .doc(uid)
            .set(userInitialData)
            .then(() => {
              dispatch(push("/"));
            });
          dispatch(push("/signin"));
        }
      });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
      dispatch(push("/signin"));
    });
  };
};

export const resetPassword = (email) => {
  return async (dispatch) => {
    if (email === "") {
      alert("Must be filled all fields.");
      return false;
    } else {
      return auth
        .sendPasswordResetEmail(email)
        .then(() => {
          alert("Sent email to reset your password.");
          dispatch(push("/signin"));
        })
        .catch(() => {
          alert("Error!");
        });
    }
  };
};
