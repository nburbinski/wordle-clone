import { ACTUALWORDS } from "../const/ACTUALWORDS";

export function getWordOfDay(date = new Date()) {
  const oneDay = 1000 * 60 * 60 * 24;
  const firstDay = new Date("June 19, 2021 00:00:00");
  const index = Math.floor((date.getTime() - firstDay.getTime()) / oneDay);

  return ACTUALWORDS[index].toUpperCase();
}
