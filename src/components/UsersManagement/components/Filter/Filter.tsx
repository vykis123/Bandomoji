import { FC } from "react";
import { Routes } from "~/constants";
import { IItem } from "~/services/getUserItems";
import FilterTab from "./components/FilterTab";
import itemHasReusedPassword from "~/utils/itemHasReusedPassword";
import itemHasOldEmail from "~/utils/itemHasOldEmail";

import "./filter-style.scss";

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({ items }, item: IItem) => {
  const wrongNumber = items.filter((item) => !item.email.includes("@"));

  const resusedItemsCount = items.filter((item) =>
    itemHasReusedPassword(item, items)
  );

  const oldEmails = items.filter((item) => itemHasOldEmail(item, items));

  return (
    <div className="filter">
      <FilterTab title="all" count={items.length} path={Routes.Users} />
      <FilterTab title="Wrong" count={wrongNumber.length} path={Routes.Weak} />
      <FilterTab
        title="Reused"
        count={resusedItemsCount.length}
        path={Routes.Reused}
      />
      <FilterTab title="Old email" count={oldEmails.length} path={Routes.Old} />
    </div>
  );
};

export default Filter;
