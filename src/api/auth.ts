import request from "@/api/request";
import type { User } from "@/stores/user";

export const loginApi = (data: {
  username: string;
  password: string;
  email: string;
}) => {
  const formData = new FormData();
  formData.append("username", data.email);
  formData.append("password", data.password);

  return request.post("/login/access-token", formData);
};

export const signupApi = (data: {
  username: string;
  password: string;
  email: string;
}) => {
  return request.post("/users/signup", data);
};

export const fetchLatestUserApi = async () => {
  try {
    const { data } = await request.get<User>("/users/me");
    return data;
  } catch (e: any) {
    console.log("error with ", e);
    throw e;
  }
};
