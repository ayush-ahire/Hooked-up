import React from "react";
import { NextPage } from "next";
import { footerList1 } from "../../../../utils/contants";

const List = ({ items, mt }: { items: string[]; mt: boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && "mt-5"}`}>
    {items.map((item: string) => (
      <p
        key={item}
        className="text-gray-400 text-sm  hover:underline cursor-pointer"
      >
        {item}
      </p>
    ))}
  </div>
);

const Footer: NextPage = () => (
  <div className="mt-6 hidden xl:block">
    <List items={footerList1} mt={false} />

    <p className="text-gray-400 text-sm mt-5">© HookedUp Rights</p>
  </div>
);

export default Footer;
