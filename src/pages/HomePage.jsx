import AskAI from "@/components/AskAI";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <Outlet />
        <AskAI />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
