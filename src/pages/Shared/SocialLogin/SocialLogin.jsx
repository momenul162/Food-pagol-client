import React from "react";
import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { AuthContex } from "../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { loginByGoogle } = useContext(AuthContex);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    loginByGoogle().then((result) => {
      const user = result.user;

      console.log(user);

      const saveUser = { name: user.displayName, email: user.email };
      fetch("https://food-pagol.onrender.com/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider h-1">or</div>
      <div className="flex justify-center gap-4">
        <button onClick={handleGoogleLogin} className="btn btn-circle">
          <FaGoogle></FaGoogle>
        </button>
        <button className="btn btn-circle">
          <FaFacebook></FaFacebook>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
