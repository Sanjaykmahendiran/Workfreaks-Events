import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  Award,
  Settings,
  Calendar,
  Palette,
  Globe,
  Target,
  Monitor,
  Network,
  Truck,
  Phone,
  Mail,
} from "lucide-react";
import img from "@/app/assets/corporate-events/image13.jpg";
import { useRouter } from "next/navigation";

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState("what-we-do");

  // Color scheme
  const colors = {
    primary: "#1e3a8a", // deep blue
    secondary: "#f8fafc", // light gray
    accent: "#60a5fa", // bright blue
    icon: "#0b0a46", // red
    button: "#0b0a46", // deep blue
  };

  const specialties = [
    {
      icon: Palette,
      title: "Tailored Event Design",
      points: ["Custom event themes and designs", "Attention to every detail"],
    },
    {
      icon: Globe,
      title: "End-to-End Management",
      points: ["Comprehensive services", "Complete process management"],
    },
    {
      icon: Target,
      title: "Corporate Expertise",
      points: ["Specialized in corporate events", "Focus on brand enhancement"],
    },
    {
      icon: Monitor,
      title: "Technology Integration",
      points: ["Latest event technology", "Interactive solutions"],
    },
    {
      icon: Network,
      title: "Vendor Management",
      points: ["Trusted vendor network", "Seamless coordination"],
    },
    {
      icon: Truck,
      title: "Logistical Precision",
      points: ["Transportation management", "Complex detail handling"],
    },
  ];

  const services = [
    {
      icon: Calendar,
      title: "Corporate Events",
      desc: "Conferences, team-building, product launches",
    },
    {
      icon: Users,
      title: "Social Events",
      desc: "Weddings, birthdays, anniversaries",
    },
    {
      icon: Settings,
      title: "Conferences & Shows",
      desc: "Large-scale exhibitions and seminars",
    },
    {
      icon: Award,
      title: "Special Occasions",
      desc: "Festivals and public gatherings",
    },
  ];

 
    const router = useRouter(); 

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[390px] flex items-center justify-center pt-6">
        <Image
          src={img}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="text-center px-4 bg-black/50 p-6 rounded-lg relative">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to BIG PARTY
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Creating Unforgettable Moments
          </p>
        </div>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: colors.primary }}
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon
                  className="w-10 h-10 mb-4"
                  style={{ color: colors.icon }}
                />
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: colors.primary }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-12"
            style={{ color: colors.primary }}
          >
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Consultation & Planning",
              "Design & Coordination",
              "Execution & Management",
              "Post-Event Review",
            ].map((title, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center text-2xl font-bold rounded-full bg-gray-200 mb-4"
                  style={{ color: colors.icon }}
                >
                  0{index + 1}
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: colors.primary }}
                >
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 px-4"
        style={{ backgroundColor: colors.secondary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: colors.primary }}
          >
            Get In Touch
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
            <a
              href="tel:9080069977"
              className="flex items-center justify-center gap-2 text-lg hover:text-blue-600 transition-colors"
            >
              <Phone className="w-6 h-6" style={{ color: colors.icon }} />
              <span>98401 06797</span>
            </a>
            <a
              href="mailto:hello@bigparty.ai"
              className="flex items-center justify-center gap-2 text-lg hover:text-blue-600 transition-colors"
            >
              <Mail className="w-6 h-6" style={{ color: colors.icon }} />
              <span>hello@bigparty.ai</span>
            </a>
          </div>
          <button
      className="px-8 py-3 rounded-lg text-white font-semibold transition-transform hover:scale-105"
      style={{ backgroundColor: colors.button }}
      onClick={() => router.push("/enquiry")}
    >
      Start Planning Your Event
    </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
