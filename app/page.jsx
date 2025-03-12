import { Hero, Navbar } from "@/constants";

export const metadata = {
  title: "Home",
  description: "A full-stack techarch application for clients",
};

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
