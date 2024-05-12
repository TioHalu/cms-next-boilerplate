import moment from "moment";

export enum EnumFormatDate {
  YYYYMMDD = "YYYY-MM-DD",
  YYYYMMDDHHmmss = "YYYY-MM-DD HH:mm:ss",
  DDMMYYYY = "DD-MM-YYYY",
  DDMMYYYYHHmmss = "DD-MM-YYYY HH:mm:ss",
  DDMMMMYYYYHHmmss = "DD MMMM YYYY HH:mm:ss",
  HHmmss = "HH:mm:ss",
}

export const dateNow = (
  format: EnumFormatDate = EnumFormatDate.YYYYMMDDHHmmss,
) => {
  return moment().format(format);
};

export const dateParse = (date: string) => {
  return moment(date).format(EnumFormatDate.YYYYMMDDHHmmss);
};
