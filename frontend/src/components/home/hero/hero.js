import {
  ArrowUpRight,
  UserPlus,
  Hospital,
  ClipboardList,
  CalendarClock,
} from "lucide-react";

import Button from "../../utils/button";
import FeatureCard from "./featurecard";
import Header from "../header"
export default function Hero() {
  // Feature cards data
  const features = [
    {
      icon: <UserPlus size={24} className="text-white" />,
      iconBgColor: "bg-blue-500",
      title: "Lead Generation",
      description: "Capture patient info and medical needs with ease.",
    },
    {
      icon: <Hospital size={24} className="text-white" />,
      iconBgColor: "bg-green-500",
      title: "Doctor Directory",
      description: "Find trusted hospitals and doctors worldwide.",
    },
    {
      icon: <ClipboardList size={24} className="text-white" />,
      iconBgColor: "bg-yellow-500",
      title: "Treatment Packages",
      description: "Transparent and customizable care plans.",
    },
    {
      icon: <CalendarClock size={24} className="text-white" />,
      iconBgColor: "bg-purple-500",
      title: "Booking",
      description: "Book consultations and appointments online.",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-100 lg:px-36">
      <Header />

      <section className="container mx-auto px-4 py-12 md:py-20 md:px-6">
        <div className="max-w-2xl mt-6">
          <h1 className="mb-10 text-4xl font-bold text-gray-800 md:text-5xl leading-[3rem] md:leading-[3rem]">
            Healthcare meets <br /> insurance.
          </h1>

          <p className="mb-8 text-xl text-gray-700 md:text-2xl">
            Plans that keep you healthy and cover your hospital bills.
          </p>
          <Button
            variant="primary"
            className="px-6 py-3 text-base"
            icon={<ArrowUpRight size={20} />}
          >
            Check Prices
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 md:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              iconBgColor={feature.iconBgColor}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
