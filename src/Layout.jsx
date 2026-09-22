import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";

export default function Layout() {
  return (
    <>
      <Header />
      <main className=" min-h-[70vh] pt-28 ">
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
