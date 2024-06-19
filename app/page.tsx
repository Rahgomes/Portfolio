"use client";

import Image from "next/image";

import { navItems, techStackIcons } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <section className="flex justify-center gap-12 mt-12">
          {techStackIcons.map((icon) => (
            <Image
              key={icon.id}
              src={icon.img}
              alt={icon.title}
              title={icon.title}
              width={60}
              height={60}
            />
          ))}
        </section>
        <Grid />
        {/* <RecentProjects /> */}
        {/* <Clients /> */}
        <Experience />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
