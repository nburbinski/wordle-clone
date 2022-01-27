import { ACTUALWORDS } from "../const/ACTUALWORDS";

export function getWordOfDay() {
  const oneDay = 1000 * 60 * 60 * 24;
  const firstDay = new Date("June 19, 2021 00:00:00");
  const now = new Date();
  const index = Math.floor((now.getTime() - firstDay.getTime()) / oneDay);

  return ACTUALWORDS[index].toUpperCase();
}
