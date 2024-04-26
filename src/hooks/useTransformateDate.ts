import { formatDate } from "@/utils/formatDate";
import { intlFormatDistance } from "date-fns";

export const useTransformationDate = (date: Date) => {
  if (Date.now() - 1000 * 60 * 60 * 24 * 2 < new Date(date).getTime()) {
    return intlFormatDistance(date, Date.now(), { locale: "en" });
  } else {
    return formatDate(new Date(date));
  }
};
