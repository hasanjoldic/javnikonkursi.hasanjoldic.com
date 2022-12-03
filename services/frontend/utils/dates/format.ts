import dayjs from "dayjs";

export enum EDateFormat {
  // 27.10.2020
  "DD.MM.YYYY" = "DD.MM.YYYY",
  // 27.10.2020 16:21:23
  "DD.MM.YYYY HH:mm:ss" = "DD.MM.YYYY HH:mm:ss",
}

export const dateFormat = (dateStr: string, formatStr: EDateFormat) => {
  const date = dayjs(dateStr);
  if (!date.isValid()) return "";

  return date.format(formatStr);
};
