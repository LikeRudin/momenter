import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import type { FirebaseError } from "firebase/app";

import { auth } from "../firebase";

export const GithubLoginButton = () => {
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.info("github-login-failed");
      const { code, message } = error as FirebaseError;
      console.error(`${code}: ${message}`);
      console.info("error object");
      console.log(error);
    }
  };
  return <button onClick={onClick}>github</button>;
};
