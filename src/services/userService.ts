// import { IUser } from "@/types/user";

// // const URL = "https://db-my-blog.onrender.com/users";
// const URL = "http://localhost:3001/users";
// const headers = { "Content-Type": "application/json;charset=utf-8" };

// export const userService = {
//   fetchUsers: async () => {
//     return await fetch(`${URL}`).then((data) => data.json());
//   },
//   createUser: async (user: IUser) => {
//     await fetch(`${URL}`, {
//       method: "POST",
//       headers,
//       body: JSON.stringify(user),
//     });
//   },
//   getUser: async (userMail: string) => {
//     return await fetch(`${URL}?email=${userMail}`).then((data) => data.json() as Promise<IUser[]>);
//   },
//   updateAvatarUser: async (id: number, avatar: string) => {
//     await fetch(`${URL}/${id}`, {
//       method: "PATCH",
//       headers,
//       body: JSON.stringify({ avatarUrl: avatar }),
//     });
//   },
// };
