"use client";
import React, {  useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useIsMobile } from "@/hooks/use-mobile";
import {  House, LucideIcon, User2, WandSparkles } from "lucide-react";
import Image from "next/image";


type Tp = {
  Name : string,
  Link : string,
  icon: LucideIcon
}

const navItems: Tp[] = [
  {
    Name: "Home",
    Link: "#hero",
    icon: House
  },
  {
    Name: "Team",
    Link: "#Team",
    icon: User2
  },
  {
    Name: "contact",
    Link: "#Contact",
   icon: WandSparkles
  },
];



export const FloatingNav = () => {
  const paths = usePathname()
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [delay, setDelay] = useState(true);
// const isMobile = useIsMobile()
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
 console.log(scrollYProgress.get())
//  0.004306839420529118
      if (scrollYProgress.get() < 0.18) {
        setVisible(false);
      } else {
        if (direction > 0) {
          setVisible(true);
        } 
      }
    }
  });
// if(!isMobile && paths == "/")
  return (
    <>
    <AnimatePresence mode="wait" >
      <nav

        className="max-w-7xl relative  justify-between w-full   md:fixed top-6 inset-x-0 mx-auto z-50 md:px-2  px-8  py-3.5  "

        
      >
        <div className="relative flex  w-full">
            <div className=" flex items-center gap-3 w-full">

            <Image src={'/assets/logo.svg'} alt="logo" height={2}  width={5} className="  w-fit" />
            <span className="  uppercase 
            font-poppin text-base">NextFrame</span>
            </div>
        <motion.ul  
                initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration:  0.2,
          delay:  0,
        }}  
        className="
         hidden
        md:flex 
        font-poppin 
        
        items-center justify-center gap-x-30
        text-sm lg:text-base
        "
        
        
        >

        {navItems.map((navItem: Tp, idx: number) => (
          <li
          
          key={`link=${idx}`}
          >
          <Link
         
            href={navItem.Link}
            className={cn(
              "relative    items-center flex gap-x-2 text-accent-foreground"
            )}
          >
            
            <span className="block  ">{navItem.Name}</span>
          </Link>
          </li>
        ))}
        </motion.ul>
        </div>
  
      </nav>
    </AnimatePresence>
      <nav

        className="max-w-7xl  hidden md:flex justify-between w-full    fixed bottom-0 inset-x-0 mx-auto z-50  content-center  px-5 md:px-0  "

        
      >
        <div className="relative items-center flex  w-full">
            <p className=" text-xs md:text-sm w-full pb-6 ">
Business Proposal | Web Designer and application
                </p>
                <div className=" bg-primary md:inline-flex text-accent px-5 py-4">
                    01
                </div>
                </div>
                </nav>
    </>
  );


};