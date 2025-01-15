import React, { useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
  const [captchaError, setCaptchaError] = useState(""); 
  const [isCaptchaValid, setIsCaptchaValid] = useState(false); 

  useEffect(() => {
    loadCaptchaEnginge(6); 
  }, []);

  const validateUserCaptcha = () => {
    const captchaValue = captchaRef.current.value; 
    if (validateCaptcha(captchaValue)) {
      setCaptchaError(""); 
      setIsCaptchaValid(true); 
    } else {
      setCaptchaError("Invalid CAPTCHA. Please try again."); 
      setIsCaptchaValid(false); 
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!isCaptchaValid) {
      setCaptchaError("Please solve the CAPTCHA correctly before submitting.");
      return;
    }

    console.log("Login successful:", { email, password });
    form.reset(); 
    setIsCaptchaValid(false); 
    loadCaptchaEnginge(6);
  };

  return (
    <div style={{}} className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col items-center justify-center">
        <div className="text-center max-w-lg">
         
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex items-center">
              <label className="label text-center text-gray-200 mb-2">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                placeholder="Type the text above"
                className="input input-bordered w-full"
                ref={captchaRef}
                onBlur={validateUserCaptcha} 
                required
              />
              {captchaError && (
                <p className="text-red-500 text-sm mt-2">{captchaError}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
