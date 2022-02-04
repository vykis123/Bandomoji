import { IItem } from "~/services/getUserItems";

const itemHasWeakPassword = (item: IItem, itemList: Array<IItem>) => {
  const badPassword = !item.email.includes("@");

  return badPassword;
};

export default itemHasWeakPassword;
