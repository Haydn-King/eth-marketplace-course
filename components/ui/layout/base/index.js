import { Fragment } from "react";
import { Web3Provider } from "../../../providers";
import { Footer, Navbar } from "../../common";

export default function BaseLayout({ children }) {
  return (
    <Fragment>
      <Web3Provider>
        <div className="max-w-7xl mx-auto px-4">
          <Navbar />
          <div className="fit">{children}</div>
        </div>
        <Footer />
      </Web3Provider>
    </Fragment>
  );
}
