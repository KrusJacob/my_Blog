import { images } from "@/assets";
import { ImCancelCircle } from "react-icons/im";
import { useSessionStore } from "@/store/session";
import Loader from "../UI/Loader/Loader";
import { UserApi } from "@/shared/api/users";
import { useTranslation } from "react-i18next";
import { useSession } from "next-auth/react";

const ProfileForm = () => {
  const { t } = useTranslation();
  const session = useSession();
  const sessionUser = useSessionStore((state) => state.sessionUser);
  const setSessionUser = useSessionStore((state) => state.setSessionUser);

  if (!session.data?.user || !sessionUser) {
    return <Loader />;
  }

  const onChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let selectedFile = e.target.files[0];
      if (selectedFile) {
        let avatarUrl = URL.createObjectURL(selectedFile);
        setSessionUser({ ...sessionUser, avatarUrl });
        UserApi.updateAvatarUser(sessionUser.id, avatarUrl);
      }
    }
  };

  const resetAvater = () => {
    setSessionUser({ ...sessionUser, avatarUrl: "" });
    UserApi.updateAvatarUser(sessionUser.id, "");
  };

  return (
    <div className="flex gap-4 md:gap-10">
      <div className="flex flex-col  items-center gap-2">
        {sessionUser.avatarUrl && (
          <ImCancelCircle
            size={26}
            className="absolute text-red-600 cursor-pointer bg-white rounded-full"
            onClick={resetAvater}
          />
        )}
        <img
          src={sessionUser.avatarUrl || images.avatarDefault.src}
          className="border rounded-full  w-[120px] h-[120px] object-cover"
        ></img>
        <form className="flex justify-center bg-[var(--purpleColor)]  rounded-md cursor-pointer">
          <label
            className="text-base text-center font-medium px-2 py-1 text-white cursor-pointer"
            htmlFor="avatar"
          >
            {t("profile.user.changeAvatar")}
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
        <p>
          {t("profile.user.login")} {sessionUser.email}
        </p>
        <p>
          {t("profile.user.name")} {sessionUser.name}
        </p>
      </div>
    </div>
  );
};

export default ProfileForm;
