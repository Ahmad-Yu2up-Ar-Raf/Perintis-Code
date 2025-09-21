"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/fragments/card";
import { TimelineContent } from "@/components/ui/fragments/timeline-animation";
import VerticalCutReveal from "@/components/ui/fragments/animations/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Landing Page",
    description: "Cocok untuk UMKM & startup yang baru mulai online.",
    price: 100,
    maximumPrice: 450,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "1 halaman landing page profesional", icon: <Briefcase size={20} /> },
      { text: "Unlimited cards/konten section", icon: <Database size={20} /> },
      { text: "Custom background & stickers", icon: <Server size={20} /> },
    ],
    includes: [
      "Fitur yang didapat:",
      "Domain & hosting opsional",
      "Basic security (2FA)",
      "Support standar via email/WA",
      "Desain sederhana tapi profesional",
    ],
  },
  {
    name: "Website",
    description: "Best value untuk bisnis berkembang dengan fitur lebih lengkap.",
    price: 500,
    maximumPrice: 1500,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "4–6 halaman website (Home, About, Services, Contact, dsb.)", icon: <Briefcase size={20} /> },
      { text: "Advanced checklists & custom fields", icon: <Database size={20} /> },
      { text: "Serverless functions", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Landing Page, plus:",
      "Desain lebih rapi & responsive",
      "Integrasi basic (form kontak, WhatsApp)",
      "Responsive mobile friendly",
      "Support via email & chat",
    ],
  },
  {
    name: "Application",
    description: "Advanced plan dengan keamanan lebih dan akses tanpa batas untuk tim besar.",
    price: 1.2,
    maximumPrice: 10.5,
    popular: true,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    features: [
      { text: "Website custom full + fitur advance", icon: <Briefcase size={20} /> },
      { text: "Multi-board management & guest access", icon: <Database size={20} /> },
      { text: "Attachment permissions & support prioritas", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Website, plus:",
      "SEO basic",
      "Dashboard admin",
      "Training pengelolaan",
    ],
  },
];




export default function PricingSection4() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="px-10 pt-20 min-h-dvh  max-w-7xl  mx-auto relative container"
      ref={pricingRef}
    >
      <article className="flex sm:flex-row flex-col sm:pb-0 pb-4 sm:items-center items-start justify-between">
        <div className="text-left mb-6">
          <h2 className="font-bold text-primary  lg:text-7xl text-[12dvw]  font-spartan tracking-tighter">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-start"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0, // First element
              }}

            >
              Plans & Pricing
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            as="p"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="text-gray-600 w-[80%]"
          >
            Trusted by millions, We help teams all around the world, Explore
            which option is right for you.
          </TimelineContent>
        </div>


      </article>

      <TimelineContent
        as="div"
        animationNum={2}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="grid md:grid-cols-3 gap-4 mx-auto  bg-gradient-to-b from-green-100 to-green-200 p-3 rounded-lg"
      >
        {plans.map((plan, index) => (
          <TimelineContent
            as="div"
            key={plan.name}
            animationNum={index + 3}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative flex-col flex justify-between  ${
                plan.popular
                  ? "scale-110 ring-2 ring-green-900 bg-gradient-to-t from-black to-green-900 text-white"
                  : "border-none shadow-none text-gray-900"
              }`}
            >
              <CardContent className="pt-0">
                <div className="space-y-2 pb-3">
                  {plan.popular && (
                    <div className="">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-baseline">
                    <span className="text-4xl font-semibold ">
                       <span>
                        Rp.
                       </span>
                      <NumberFlow
                        format={{
                          currency: "IDR",
                        }}
                        value={isYearly ? plan.maximumPrice : plan.price}
                        className="text-4xl font-semibold"
                      /> 
-

           <NumberFlow
                        format={{
                          currency: "IDR",
                        }}
                        value={ plan.maximumPrice}
                        className="text-4xl font-semibold"
                      /> 
                    <span className=" ml-3">
                      
                        IDR
                      </span> 
                    </span>
                    <span
                      className={cn(' sr-only',
                        plan.popular
                          ? "text-green-200 ml-1"
                          : "text-gray-600 ml-1"
        )}
                    >
                      /{isYearly ? "year" : "month"}
                     
                    </span>
                    
                  </div>
                </div>

                <div className="flex justify-between">
                  <h3 className="text-3xl font-semibold mb-2">{plan.name}</h3>
                </div>
                <p
                  className={
                    plan.popular
                      ? "text-sm text-green-200 mb-4"
                      : "text-sm text-gray-600 mb-4"
                  }
                >
                  {plan.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-green-200">
                  <h4 className="font-medium text-base  mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2 font-semibold">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span
                          className={
                            plan.popular
                              ? "text-white h-6 w-6 bg-green-600 border border-green-500 rounded-full grid place-content-center mt-0.5 mr-3"
                              : "text-black h-6 w-6 bg-white border border-black rounded-full grid place-content-center mt-0.5 mr-3"
                          }
                        >
                          <CheckCheck className="h-4 w-4  " />
                        </span>
                        <span
                          className={
                            plan.popular
                              ? "text-sm text-green-100"
                              : "text-sm text-gray-600"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <button
                  className={`w-full mb-6 p-4 text-xl rounded-xl ${
                    plan.popular
                      ? "bg-gradient-to-t from-green-100 to-green-300 font-semibold shadow-lg shadow-green-500 border border-green-400 text-black"
                      : plan.buttonVariant === "outline"
                        ? "bg-gradient-to-t from-green-900 to-green-600  shadow-lg shadow-green-900 border border-green-700 text-white"
                        : ""
                  }`}
                >
                  {plan.buttonText}
                </button>
              </CardFooter>
            </Card>
          </TimelineContent>
        ))}
      </TimelineContent>
    </div>
  );
}
