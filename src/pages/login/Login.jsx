import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../social-login/SocialLogin";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          alert("successfully signed in");
          navigate(from);
        }
      })
      .catch(() => {
        alert("give your valid information");
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <Helmet>
          <title>HomeSell | Login</title>
        </Helmet>
        <div className="hero-content flex-col" data-aos="fade-up">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 lg:w-[600px] md:w-[500px] w-[300px] mt-6 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn btn-accent text-white font-bold">
                  Login
                </button>
              </div>
              <label className="label">
                Are You New here?{" "}
                <Link to="/register" className="label-text-alt link link-hover">
                  Create A New Account
                </Link>
              </label>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
