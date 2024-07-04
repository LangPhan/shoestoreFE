import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen scroll-smooth">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
