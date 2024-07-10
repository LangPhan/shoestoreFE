import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  Sheet,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Wrapper = () => {
  return (
    //Root Layout config
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <div className="min-h-screen scroll-smooth">
          <div className="flex flex-col w-full min-h-screen bg-muted/40">
            <Navbar></Navbar>
            <Outlet></Outlet>
          </div>
        </div>
        <ScrollRestoration />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Bounce
        />
      </>
    </ThemeProvider>
  );
};

export default Wrapper;
