import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/SignupBner.png";
import { toast } from "react-hot-toast";

import { signup } from "../services/operations/authApi";
import { setSignupData } from "../slices/authSlice";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, password, confirmPassword, email } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  //Handel form submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    dispatch(setSignupData(formData));
    dispatch(
      signup(firstName, lastName, password, confirmPassword, email, navigate)
    );
  };

  return (
    <div className="bg-white flex justify-center mt-4">
      <div className="mx-auto flex w-11/12 max-w-maxContent lg:flex-row md:flex-col flex-col justify-center   py-12  md:gap-y-0 md:gap-x-12">
        <div className="lg:w-[50%] relative">
          <img
            src={Logo}
            className="lg:w-[80%] w-[100%]  "
            alt="Signup page banner image"
          />
          <p className="text-lg font-Nunito lg:text-[40px] text-[20px] tracking-[3.6px] font-[900] pl-5 text-[#84a4e5]">
            Lets Organise your day
          </p>
        </div>

        <div className="lg:w-[40%] lg:m-0 mt-10 m-2">
          <h1 className="   font-Overpass lg:text-[36px] text-[30px] font-[800] lg:tracking-[3.6px] text-[#444B59]">
            Welcome !
          </h1>
          <p className="lg:text-[24px] text-[15px] font-Nunito font-[500] mb-2 tracking-[3.6px]">
            Let's Join us
          </p>

          <form
            onSubmit={handleOnSubmit}
            className="mt-6 flex w-full flex-col gap-y-4"
          >
            <div className="flex lg:flex-row flex-col gap-3">
              <label className="lg:w-[50%]">
                <p className="mb-1 font-Nunito lg:text-[14px] text-[14px] font-[600] tracking-[3.6px] ">
                  First Name <sup className="text-pink-600">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleOnChange}
                  placeholder="Enter first name"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[80px] border-2 border-[#789ADE] p-[12px] placeholder:text-[#C8D3F9] placeholder:font-Nunito placeholder:font-[400] placeholder:tracking-[3.6px]"
                />
              </label>
              <label className="relative lg:w-[50%]">
                <p className="mb-1 font-Nunito text-[14px] font-[600] tracking-[3.6px] ">
                  Last Name <sup className="text-pink-600">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleOnChange}
                  placeholder="Enter last name"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[80px] border-2 border-[#789ADE] p-[12px] placeholder:text-[#C8D3F9] placeholder:font-Nunito placeholder:font-[400] placeholder:tracking-[3.6px]"
                />
              </label>
            </div>
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
            <div className="flex lg:flex-row flex-col gap-3">
              <label className=" relative lg:w-[50%]">
                <p className="mb-1 font-Nunito text-[14px] font-[600] tracking-[3.6px] ">
                  Create Password <sup className="text-pink-600">*</sup>
                </p>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Enter new password"
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
              </label>
              <label className="relative lg:w-[50%]">
                <p className="mb-1 font-Nunito text-[14px] font-[600] tracking-[3.6px] ">
                  Confirm Password <sup className="text-pink-600">*</sup>
                </p>
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Enter Password"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[80px] border-2 border-[#789ADE] p-[12px] placeholder:text-[#C8D3F9] placeholder:font-Nunito placeholder:font-[400] placeholder:tracking-[3.6px]"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                >
                  {setShowConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 rounded-[80px] bg-[#8699DA] py-[18px] px-[32px] shadow-[4_8px_12px_0px_rgba(78,99,141,0.06)] hover:bg-[#6784e2]"
            >
              <p className="text-white font-Nunito font-[800] tracking-[3.6px]">
                {" "}
                Create Acount
              </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
