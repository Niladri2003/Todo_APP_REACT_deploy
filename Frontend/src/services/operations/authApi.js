import { toast } from "react-hot-toast";

import { setLoading, setToken } from "../../slices/authSlice";
import { apiConnector } from "../apiconnector";
import { endpoints } from "../api";
import { setUser } from "../../slices/user";
import { setTodolist } from "../../slices/todoSlice";

const { SIGNUP_API, LOGIN_API } = endpoints;

export function signup(
  firstName,
  lastName,
  password,
  confirmPassword,
  email,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        firstName,
        lastName,
        password,
        confirmPassword,
        email,
      });
      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Signup Successful");
      navigate("/login");
    } catch (e) {
      console.log("SIGNUP API ERROR............", e);
      toast.error("Signup Failed");
      navigate("/login/signup");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function login(email, password, navigate) {
  console.log(email, password);
  return async (dispatch) => {
    const toastId = toast.loading("loading..");
    dispatch(setLoading(true));
    console.log(LOGIN_API);
    try {
      console.log("Inside api call...");
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });

      console.log("LOGIN API REponse.........", response);

      console.log("USER ID->", response.data.user._id);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Login Successful");
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/");
    } catch (e) {
      console.log("LOGIN API ERROR............", e);
      toast.error("Login Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setTodolist([]));
    localStorage.removeItem("token");
    toast.success("Logged Out");
    navigate("/");
  };
}
