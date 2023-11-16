import React, { useContext, useEffect, useState } from "react";
import loginSideImg from "../../../assets/others/authentication2.png";
import bgImg from "../../../assets/others/authentication.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../../AuthProvider/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [error, setError] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const { user, loginUser } = useContext(AuthContex);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  /* handle login */
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    setError(false);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  // handle Captcha
  const doSubmit = (e) => {
    e.preventDefault();
    let user_captcha = e.target.value;

    if (validateCaptcha(user_captcha) === true) {
      loadCaptchaEnginge(6);
      setDisabled(false);
      user_captcha = "";
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <div className="hero">
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="hero-content flex-col lg:flex-row "
      >
        <div className="text-center lg:text-left">
          <img className="w-[600px]" src={loginSideImg} alt="" />
        </div>
        <div>
          <h1 className="text-4xl text-center my-10">Login</h1>
          <div
            style={{ backgroundImage: `url(${bgImg})` }}
            className="card flex-shrink-0 shadow-2xl"
          >
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered bg-white"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered bg-white"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="text-error text-center">{error}</p>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered bg-white"
                  id="user_captcha_input"
                  onBlur={doSubmit}
                />
              </div>
              {/*  TODO set button disabled */}
              <div className="form-control mt-6">
                <button disabled={false} className="btn btn-primary">
                  Login
                </button>
              </div>
              <p className="text-sm text-center">
                New here?{" "}
                <Link className="underline" to="/register">
                  Create a New Account
                </Link>
              </p>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
