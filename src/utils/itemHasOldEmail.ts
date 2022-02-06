import { IItem } from "~/services/getUserItems";

const itemHasOldEmail = (item: IItem, itemList: Array<IItem>) => {
  const oldEmail = item.createdAt
    .replace("-", "/")
    .split("T")[0]
    .replace("-", "/");
  const todayDate = new Date()
    .toISOString()
    .replace("-", "/")
    .split("T")[0]
    .replace("-", "/");

  const todayDate2 = new Date(todayDate);
  const oldEmail2 = new Date(oldEmail);

  function getDifdInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  const diffInDays = getDifdInDays(todayDate2, oldEmail2);

  const olderEmails = diffInDays > 30;
  return olderEmails;
};

export default itemHasOldEmail;
