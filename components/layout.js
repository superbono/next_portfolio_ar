import Footer from "./common/Footer";
import Header from "./common/Header";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
