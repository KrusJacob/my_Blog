import { useState } from "react";
import { Inputs } from "./RegistrationForm";
import toast from "react-hot-toast";
import { IUser } from "@/types/user";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { navPaths } from "@/services/paths/navPaths";
import { UserApi } from "@/shared/api/users";

const useRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    const searchUser = (await UserApi.getUser(data.email.toString()))[0];
    if (searchUser) {
      toast.error("This email has already been registered");
      setIsLoading(false);
    } else {
      UserApi.createUser(data as IUser).then(() => {
        toast.success("You have successfully registered");
        setIsLoading(false);
        router.push(navPaths.SIGNIN);
      });
    }
  };

  return { onSubmit, isLoading };
};

export default useRegistration;
