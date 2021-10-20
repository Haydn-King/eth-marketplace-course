import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

export default function ActiveLink({ children, activeLinkClass, ...props }) {
  const { pathname } = useRouter();
  let className = children.props.className || "";

  if (pathname === props.href) {
    className = `${className} ${
      activeLinkClass ? activeLinkClass : "text-indigo-600"
    }`;
  }

  return (
    <Fragment>
      <Link {...props}>{React.cloneElement(children, { className })}</Link>
    </Fragment>
  );
}
