import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment } from "react";
import "../styles/globals.css";

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Fragment>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
