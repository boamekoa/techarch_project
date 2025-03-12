import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";

export { Navbar, Services, Projects, About, Contacts, Hero };

// Navbar Links
export const navLinks = [
  {
    id: 1,
    title: "Home",
    route: "/",
  },
  {
    id: 2,
    title: "Services",
    route: "/services",
  },
  {
    id: 3,
    title: "Projects",
    route: "/projects",
  },
  {
    id: 4,
    title: "About",
    route: "/about",
  },
  {
    id: 5,
    title: "Contacts",
    route: "/contact",
  },
];
