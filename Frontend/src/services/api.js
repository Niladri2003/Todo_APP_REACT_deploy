const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log(BASE_URL);
//auth endpoints

export const endpoints = {
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
};

//Todo Endpoints
export const todoendpoints = {
  CREATE_TODO: BASE_URL + "/createTodo",
  DELETE_TODO: BASE_URL + "/deleteTodo/",
  GETALL_TODO: BASE_URL + "/getTodos",
};
