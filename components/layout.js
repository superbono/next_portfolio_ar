import Footer from "./common/footer";
import Header from "./common/header";

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
