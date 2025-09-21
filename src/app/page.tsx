import Contact from "@/components/ui/core/sections/Contact";
// import Feature2 from "@/components/ui/core/sections/Feature";
import Hero from "@/components/ui/core/sections/hero";
import PricingSection4 from "@/components/ui/core/sections/Pricing";
import Problem from "@/components/ui/core/sections/Problem";
import Solutions from "@/components/ui/core/sections/Solutions";
import Target from "@/components/ui/core/sections/Target";
import Team from "@/components/ui/core/sections/Team";
// import Image from "next/image";

export default function Home() {
  return (
  <div className=" space-y-20" >
  <Hero/>
  <Team/>
  {/* <Feature2/> */}
  <Problem/>
  <Solutions/>
  <Target/>
  <PricingSection4/>
  <Contact/>
  </div>
  );
}
