import { IUser } from "@/types/user";
import { jsonApiInstance } from "./api-instance";

// const headers = { "Content-Type": "application/json;charset=utf-8" };

export const UserApi = {
  fetchUsers: () => {
    return jsonApiInstance<IUser[]>(`/users`, {
      method: "GET",
    });
  },
  createUser: (data: IUser) => {
    return jsonApiInstance<IUser>(`/users`, {
      method: "POST",
      json: data,
    });
  },
  getUser: async (userMail: string) => {
    return jsonApiInstance<IUser[]>(`/users?email=${userMail}`, {
      method: "GET",
    });
  },
  updateAvatarUser: async (id: number, avatar: string) => {
    return jsonApiInstance<IUser>(`/users/${id}`, {
      method: "PATCH",
      json: { avatarUrl: avatar },
    });
  },
};
