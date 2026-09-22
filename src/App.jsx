import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./Layout";

import FacultyOfArts from "./pages/facilities/FacultyOfArts";
import FacultyofEducation from "./pages/facilities/FacultyofEducation";
import FacultyofEngineering from "./pages/facilities/FacultyofEngineering";
import FacultyofLaw from "./pages/fa~cilities/FacultyofLaw";
import FacultyofManagement from "./pages/facilities/FacultyofManagement";
import FacultyofMedical from "./pages/facilities/FacultyofMedical";
import FacultyofScienceAndTechnology from "./pages/facilities/FacultyofScienceAndTechnology";
import GalleryHasImage from "./pages/gallery/GalleryHasImage";
import GalleryHasVideo from "./pages/gallery/GalleryHasVideo";
import ContactUs from "./pages/contact-us/ContactUs";

import Download from "./pages/download/Download";
import Notice from "./pages/notice/Notice";

import AboutPu from "./pages/about/AboutPu";
import AboutHasInfrastructurePlans from "./pages/about/AboutHasInfrastructurePlans";
import AboutHasMessage from "./pages/about/AboutHasMessage";
import AboutHasMessageFromRegistrar from "./pages/about/AboutHasMessageFromRegistrar";
import AboutHasOrganizationStructure from "./pages/about/AboutHasOrganizationStructure";

import Senate from "./pages/authorised-bodies/Senate";
import ExecutiveCouncil from "./pages/authorised-bodies/ExecutiveCouncil";
import AcademicCouncil from "./pages/authorised-bodies/AcademicCouncil";
import ServiceComission from "./pages/authorised-bodies/ServiceComission";
import ResourceCouncil from "./pages/authorised-bodies/ResourceCouncil";
import AppellateCommission from "./pages/authorised-bodies/AppellateCommission";

import Centres from "./pages/central-office/Centres";
import Divisions from "./pages/central-office/Divisions";
import NewsEvents from "./components/NewsEvents";
import NewsEventDetail from "./components/NewsEventDetail";
import NoticeDetail from "./pages/NoticeDetail";
import DownloadDetail from "./pages/DownloadDetail";
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Layout />
    </>
  );
}
function PassThrough() {
  return <Outlet />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    handle: { breadcrumb: "Home" },
    children: [
      { index: true, element: <Home /> },

      {
        path: "about",
        element: <PassThrough />,
        handle: { breadcrumb: "About Us", skipInTrail: true },
        children: [
          { index: true, element: <AboutPu /> },
          {
            path: "infrastructure-plans",
            element: <AboutHasInfrastructurePlans />,
            handle: { breadcrumb: "Infrastructure Plans" },
          },
          {
            path: "organization-structure",
            element: <AboutHasOrganizationStructure />,
            handle: {
              breadcrumb:
                "Purbanchal University Organization Structure (Anusuchi-1)",
            },
          },
          {
            path: "member/prof.dr.-sujan-babu-marahatta-260704203914/detail",
            element: <AboutHasMessage />,
            handle: { breadcrumb: "Prof. Dr. Sujan Babu Marahatta" },
          },
          {
            path: "member/prof.-dr.-panna-thapa-260902114213/detail",
            element: <AboutHasMessageFromRegistrar />,
            handle: { breadcrumb: "Prof. Dr. Panna Thapa" },
          },
        ],
      },

      {
        path: "authoriesd-bodies",
        element: <PassThrough />,
        handle: { breadcrumb: "Authorised Bodies", noLink: true },
        children: [
          {
            path: "senate",
            element: <Senate />,
            handle: { breadcrumb: "Senate" },
          },
          {
            path: "executive-council",
            element: <ExecutiveCouncil />,
            handle: { breadcrumb: "Executive Council" },
          },
          {
            path: "academic-council",
            element: <AcademicCouncil />,
            handle: { breadcrumb: "Academic Council" },
          },
          {
            path: "service-comission",
            element: <ServiceComission />,
            handle: { breadcrumb: "Service Commission" },
          },
          {
            path: "resource-council",
            element: <ResourceCouncil />,
            handle: { breadcrumb: "Resource Council" },
          },
          {
            path: "appellate-commission",
            element: <AppellateCommission />,
            handle: { breadcrumb: "Appellate Commission" },
          },
        ],
      },

      {
        path: "central-office",
        element: <PassThrough />,
        handle: { breadcrumb: "Central Office", noLink: true },
        children: [
          {
            path: "centres",
            element: <Centres />,
            handle: { breadcrumb: "Centres" },
          },
          {
            path: "divisions",
            element: <Divisions />,
            handle: { breadcrumb: "Divisions" },
          },
          {
            path: "offices",
            element: <PassThrough />,
            handle: { breadcrumb: "Offices", noLink: true },
            children: [
              {
                path: "vice-chancellor",
                element: <AboutHasMessage />,
                handle: { breadcrumb: "Vice Chancellor" },
              },
              {
                path: "registrar",
                element: <AboutHasMessageFromRegistrar />,
                handle: { breadcrumb: "Registrar" },
              },
            ],
          },
        ],
      },

      {
        path: "facilities",
        element: <PassThrough />,
        handle: { breadcrumb: "Facilities", noLink: true },
        children: [
          {
            path: "faculty-of-arts",
            element: <FacultyOfArts />,
            handle: { breadcrumb: "Faculty of Arts" },
          },
          {
            path: "faculty-of-education",
            element: <FacultyofEducation />,
            handle: { breadcrumb: "Faculty of Education" },
          },
          {
            path: "faculty-of-engineering",
            element: <FacultyofEngineering />,
            handle: { breadcrumb: "Faculty of Engineering" },
          },
          {
            path: "faculty-of-law",
            element: <FacultyofLaw />,
            handle: { breadcrumb: "Faculty of Law" },
          },
          {
            path: "faculty-of-management",
            element: <FacultyofManagement />,
            handle: { breadcrumb: "Faculty of Management" },
          },
          {
            path: "faculty-of-medical-and-allied-sciences",
            element: <FacultyofMedical />,
            handle: { breadcrumb: "Faculty of Medical & Allied Sciences" },
          },
          {
            path: "faculty-of-science-and-technology",
            element: <FacultyofScienceAndTechnology />,
            handle: { breadcrumb: "Faculty of Science & Technology" },
          },
        ],
      },

      {
        path: "news-and-event",
        element: <PassThrough />,
        handle: { breadcrumb: "News & Events" },
        children: [
          { index: true, element: <NewsEvents /> },
          {
            path: ":slug",
            element: <NewsEventDetail />,
            handle: { breadcrumb: "Detail" },
          },
        ],
      },
      {
        path: "notice",
        element: <PassThrough />,
        handle: { breadcrumb: "Notice" },
        children: [
          { index: true, element: <Notice /> },
          {
            path: ":slug",
            element: <NoticeDetail />,
            handle: { breadcrumb: "Detail" },
          },
        ],
      },
      {
        path: "download",
        element: <PassThrough />,
        handle: { breadcrumb: "Downloads" },
        children: [
          { index: true, element: <Download /> },
          {
            path: ":slug",
            element: <DownloadDetail />,
            handle: { breadcrumb: "Detail" },
          },
        ],
      },
      {
        path: "notice",
        element: <Notice />,
        handle: { breadcrumb: "Notices" },
      },

      {
        path: "gallery",
        element: <PassThrough />,
        handle: { breadcrumb: "Gallery", noLink: true },
        children: [
          {
            path: "image",
            element: <GalleryHasImage />,
            handle: { breadcrumb: "Images" },
          },
          {
            path: "video",
            element: <GalleryHasVideo />,
            handle: { breadcrumb: "Videos" },
          },
        ],
      },

      {
        path: "contact-us",
        element: <ContactUs />,
        handle: { breadcrumb: "Contact Us" },
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
