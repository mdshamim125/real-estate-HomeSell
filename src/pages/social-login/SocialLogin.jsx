import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();

  // navigation systems
  const navigate = useNavigate();
    const location = useLocation();
  
  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        alert("successfully logged in")
        navigate(from);
      }
    });
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex justify-around pb-6">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-primary btn-sm btn-outline"
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-secondary btn-sm btn-outline"
        >
          Github
        </button>
        
      </div>
    </>
  );
};

export default SocialLogin;
