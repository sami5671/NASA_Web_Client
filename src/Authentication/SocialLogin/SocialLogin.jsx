import useAuth from "../../Hooks/UseAuth";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  // =================================================================
  const { signInWithGoogle, signInWithGitHub } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      // user registration with google
      const result = await signInWithGoogle();
      console.log(result);
    } catch (err) {
      console.log(err);
      // toast.error(err?.message);
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      // user registration with google
      const result = await signInWithGitHub();
      console.log(result);

      // ----------------------------------------------------------------
    } catch (err) {
      console.log(err);
      // toast.error(err?.message);
    }
  };

  // =================================================================
  return (
    <div>
      <div
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center space-x-2 border m-3 p-2 bg-slate-300 cursor-pointer hover:bg-slate-200"
      >
        <FcGoogle size={32} />

        <p>Continue with Google</p>
      </div>
      <div
        onClick={handleGitHubSignIn}
        className="flex justify-center items-center space-x-2 border m-3 p-2 bg-slate-300 cursor-pointer hover:bg-slate-200"
      >
        <FaGithub size={32} />

        <p>Continue with GitHub</p>
      </div>
    </div>
  );
};

export default SocialLogin;
