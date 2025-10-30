import request from "@/api/request";

export const loginApi = (data: {
  full_name: string;
  password: string;
  email: string;
}) => {
  const formData = new FormData();
  formData.append("full_name", data.full_name);
  formData.append("password", data.password);
  formData.append("email", data.email);

  return request.post("/users/login", formData);
};
