import { images } from "@/assets";
import { userService } from "@/services/userService";
import { useStore } from "@/store/store";
import { IUser } from "@/types/user";
import { useEffect } from "react";

interface Props {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
  };
}

const ProfileForm = ({ user }: Props) => {
  const currentUser = useStore((state) => state.currentUser);
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  useEffect(() => {
    userService.getUser(user.email!).then((data: IUser[]) => {
      const { password, ...userData } = data[0];
      setCurrentUser(userData);
    });
  }, [user?.email]);

  const onChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let selectedFile = e.target.files[0];
      if (selectedFile) {
        let avatarUrl = URL.createObjectURL(selectedFile);
        setCurrentUser({ ...currentUser, avatarUrl: avatarUrl });
        userService.updateAvatarUser(currentUser.id!, avatarUrl);
      }
    }
  };

  return (
    <div className="flex gap-4 md:gap-10">
      <div className="flex flex-col gap-2">
        <img
          src={currentUser.avatarUrl || images.avatarDefault.src}
          className="border rounded-full  w-[140px] h-[140px] object-cover"
        ></img>
        <form className="flex justify-center bg-[var(--purpleColor)]  rounded-md cursor-pointer">
          <label className="text-lg font-medium px-2 py-1 text-white cursor-pointer" htmlFor="avatar">
            Change avatar
          </label>
          <input
            onChange={(e) => onChangeAvatar(e)}
            className="opacity-0 z-[-1] absolute"
            id="avatar"
            type="file"
          />
        </form>
      </div>
      <div>
        <p>Login: {user?.email}</p>
        <p>Name: {user?.name}</p>
      </div>
    </div>
  );
};

export default ProfileForm;
