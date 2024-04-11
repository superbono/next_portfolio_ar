import Footer from "./common/footer";
import Header from "./common/header";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
