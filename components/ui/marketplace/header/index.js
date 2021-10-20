import { Fragment } from "react";
import { useAccount } from "../../../hooks/web3";
import { Breadcrumbs } from "../../common";
import { EthRates, WalletBar } from "../../web3";

const LINKS = [
  {
    href: "/marketplace",
    value: "Buy",
  },
  {
    href: "/marketplace/courses/owned",
    value: "My Courses",
  },
  {
    href: "/marketplace/courses/managed",
    value: "Manage Courses",
    requireAdmin: true,
  },
];

export default function Header() {
  const { account } = useAccount();
  return (
    <Fragment>
      <div className="pt-4">
        <WalletBar />
      </div>
      <EthRates />
      <div className="flex flex-row-reverse p-4 sm:px-6 lg:px-8">
        <Breadcrumbs isAdmin={account.isAdmin} items={LINKS} />
      </div>
    </Fragment>
  );
}
