import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/LoginPageLogo.png";

import { login } from "../services/operations/authApi";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <div className="bg-white  justify-center mt-4 mx-auto flex w-11/12">
      <div className="mx-auto flex w-11/12 max-w-maxContent lg:flex-row flex-col justify-between   py-12 md:flex-row md:gap-y-0 md:gap-x-12">
        <div className="lg:w-[40%]">
          <h1 className="   font-Overpass lg:text-[36px] text-[30px] font-[800] tracking-[3.6px] text-[#444B59]">
            Welcome Back !
          </h1>
          <p className="lg:text-[24px] text-[15px] font-Nunito font-[400] mb-2 tracking-[3.6px]">
            Don't have a account ,<br/>
            <Link to="/login/signup">
              <span className="text-[#4266db] font-[900] ">Create a Account</span>
            </Link>
          </p>

          <form
            onSubmit={handleOnSubmit}
            className="mt-6 flex w-full flex-col gap-y-4"
          >
            <label className="w-full">
              <p className="mb-1 font-Nunito text-[14px] font-[600] tracking-[3.6px] ">
                Email Address <sup className="text-pink-600">*</sup>
              </p>
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email address"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[80px] border-2 border-[#789ADE] p-[12px] placeholder:text-[#C8D3F9] placeholder:font-Nunito placeholder:font-[400] placeholder:tracking-[3.6px]"
              />
            </label>
            <label className="relative">
              <p className="mb-1 font-Nunito text-[14px] font-[600] tracking-[3.6px] ">
                Password <sup className="text-pink-600">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[80px] border-2 border-[#789ADE] p-[12px] placeholder:text-[#C8D3F9] placeholder:font-Nunito placeholder:font-[400] placeholder:tracking-[3.6px]"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              <Link to="/forgot-password">
                <p className="mt-1 ml-auto font-Nunito tracking-[3.6px] font-[600]  max-w-max text-xs text-[#8699DA]">
                  Forgot Password
                </p>
              </Link>
            </label>
            <button
              type="submit"
              className="mt-6 rounded-[80px] bg-[#8699DA] py-[18px] px-[32px] shadow-[4_8px_12px_0px_rgba(78,99,141,0.06)] hover:bg-[#6784e2]"
            >
              <p className="text-white font-Nunito font-[800] tracking-[3.6px]">
                {" "}
                Log in
              </p>
            </button>
          </form>
        </div>
        <div className="lg:w-[40%] md:w-[40%] lg:visible md:visible invisible ">
          <img src={Logo} className="w-[100%] lg:pr-10" alt="Log in poster" />
          
        </div>
      </div>
    </div>
  );
}

export default Login;
