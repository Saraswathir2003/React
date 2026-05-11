import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <Header />

      <div
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
