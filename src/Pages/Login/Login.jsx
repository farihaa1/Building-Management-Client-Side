import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Components/SocialLogin";
import img from "../../../src/assets/background/login.avif"
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      
     
      Swal.fire({
        title: "User signed in Successfully.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <Helmet>
        <title>Harmony Heights || Login</title>
      </Helmet>
      <div className="hero min-h-screen my-12">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="hidden lg:flex text-center md:w-1/2 lg:text-left">
           
           <img src={img} alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-xl lg:text-4xl font-bold text-center mt-4 w-full">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body p-6 flex">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="px-6 flex items-center justify-center">
              <small>
                New Here? <Link className="text-green-600" to="/register">Create an account</Link>{" "}
              </small>
            </p>
            <SocialLogin className='w-full'></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
