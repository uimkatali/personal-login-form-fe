import { UserData } from "../types/user";
import { get, patch } from "../api/api";

export const getAllUsers = () => {
  return get<UserData[]>("users");
};

export const updateUser = (userData: UserData) => {
  return patch<UserData, UserData>(`users/${userData._id}`, userData);
};

export const getUserByName = (name: string) => {
  return get<UserData>(`users/${name}`);
};
