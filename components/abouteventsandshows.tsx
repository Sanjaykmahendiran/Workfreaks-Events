import React from "react";
import Image from "next/image";
import img from "@/app/assets/corporate-events/image12.jpg";
import { useRouter } from "next/navigation";
import Footer from "./Footer";

const AboutUsPage = () => {
  const router = useRouter();

  const colors = {
    primary: "#1e3a8a",
    secondary: "#f8fafc",
    icon: "#0b0a46",
    button: "#0b0a46",
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[390px] flex items-center justify-center pt-12">
        <Image
          src={img}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="text-center px-4 bg-black/50 p-6 rounded-lg relative">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to Workfreaks Events & Shows
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your Premier Event Management Partner
          </p>
        </div>
      </div>

      <section className="py-16 px-4 bg-white text-justify">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: colors.primary }}>
            Why Choose Workfreaks Events & Shows?
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6 text-justify">
            At Workfreaks Events & Shows, we specialize in turning your event vision into reality with precision, creativity, and expertise. Whether you&apos;re hosting a corporate event, a social gathering, or a grand celebration, our team ensures flawless execution from start to finish.
          </p>
          <p className="text-gray-700 max-w-4xl mx-auto mb-6">
            Every event is unique, and we understand that one-size-fits-all solutions don&apos;t work. We work closely with you to understand your objectives, preferences, and brand values to craft a personalized event that aligns with your vision. From initial concept development to post-event follow-up, we handle every aspect, allowing you to focus on your guests and business.
          </p>
          <ul className="text-gray-700 list-disc pl-6 max-w-4xl mx-auto text-left">
            <li>Expert Event Planning – Meticulous planning for seamless execution.</li>
            <li>Creative & Unique Concepts – Fresh, tailored event ideas.</li>
            <li>End-to-End Service – From venue selection to logistics.</li>
            <li>Personalized Experience – Reflecting your style, preferences, and goals.</li>
            <li>Strong Vendor Network – High-quality services at the best rates.</li>
            <li>Stress-Free Execution – Enjoy your event worry-free.</li>
            <li>Proven Track Record – Countless successful events.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-white text-justify">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" style={{ color: colors.primary }}>
            What We Do – Our Event Management Services
          </h2>
          <div className="max-w-4xl mx-auto text-left text-gray-700 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">1. Event Planning & Strategy</h3>
              <ul className="list-disc pl-6">
                <li>Comprehensive event planning, from concept development to final execution.</li>
                <li>Tailored strategies to meet your goals, objectives, and budget.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Venue Selection & Management</h3>
              <ul className="list-disc pl-6">
                <li>Helping you choose the ideal venue based on event size, style, and location.</li>
                <li>Managing logistics, including booking, layout, and coordination.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Event Design & Theming</h3>
              <ul className="list-disc pl-6">
                <li>Creating captivating themes aligned with your brand or goals.</li>
                <li>Custom décor design, including floral arrangements, lighting, and signage.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">4. Vendor Coordination</h3>
              <ul className="list-disc pl-6">
                <li>Managing trusted vendors, including caterers, photographers, and entertainers.</li>
                <li>Ensuring vendor performance and timely delivery of services.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">5. Guest Management & Registration</h3>
              <ul className="list-disc pl-6">
                <li>Handling invitations, RSVPs, and guest lists.</li>
                <li>Streamlining check-ins, badge creation, and welcome kits.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">6. Logistics & On-Site Management</h3>
              <ul className="list-disc pl-6">
                <li>Coordinating transportation, catering, and equipment rentals.</li>
                <li>On-site event management for a seamless experience.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">7. Event Marketing & Promotion</h3>
              <ul className="list-disc pl-6">
                <li>Developing marketing campaigns to build awareness and boost attendance.</li>
                <li>Social media management, email marketing, and content creation.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">8. Entertainment & Activities</h3>
              <ul className="list-disc pl-6">
                <li>Booking entertainment, speakers, and performers.</li>
                <li>Curating engaging activities for guests.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">9. Audio-Visual & Technical Support</h3>
              <ul className="list-disc pl-6">
                <li>Providing high-quality AV equipment and support for presentations.</li>
                <li>Coordinating sound, lighting, and multimedia setup.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">10. Catering & F&B Services</h3>
              <ul className="list-disc pl-6">
                <li>Offering menu creation, dietary planning, and exceptional catering services.</li>
                <li>Organizing tastings and ensuring top-tier service.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">11. Sponsorship & Partnership Management</h3>
              <ul className="list-disc pl-6">
                <li>Securing sponsors and partners to enhance your event&apos;s success.</li>
                <li>Creating sponsorship packages and handling partnership coordination.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">12. Virtual & Hybrid Event Management</h3>
              <ul className="list-disc pl-6">
                <li>Organizing virtual and hybrid events with seamless attendee interaction.</li>
                <li>Ensuring high-quality live streaming and engagement tools.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">13. Budgeting & Financial Management</h3>
              <ul className="list-disc pl-6">
                <li>Creating detailed budgets and cost-effective solutions.</li>
                <li>Managing expenses and vendor negotiations.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">14. Post-Event Evaluation & Feedback</h3>
              <ul className="list-disc pl-6">
                <li>Gathering attendee feedback and analyzing event success.</li>
                <li>Providing reports with engagement data and ROI assessment.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">15. Sustainability Planning</h3>
              <ul className="list-disc pl-6">
                <li>Integrating eco-friendly materials, waste reduction, and green initiatives.</li>
                <li>Minimizing environmental impact while maintaining quality.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white text-justify">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" style={{ color: colors.primary }}>
            Our Process
          </h2>
          <ul className="text-gray-700 list-disc pl-6 max-w-4xl mx-auto text-left">
            <li><strong>Consultation & Planning:</strong> We begin by understanding your goals, vision, and budget to create a customized plan that meets your specific needs.</li>
            <li><strong>Design & Coordination:</strong> From venue selection and décor to catering and entertainment, we coordinate every detail to bring your vision to life.</li>
            <li><strong>Execution & Management:</strong> On the big day, our team ensures everything runs smoothly, managing timelines, vendors, and logistics.</li>
            <li><strong>Post-Event Review:</strong> We evaluate the success of your event, gather feedback, and discuss ways to improve future events.</li>
          </ul>
          <p className="text-gray-700 max-w-4xl mx-auto mt-6">
            At Workfreaks Events & Shows, our goal is to deliver seamless, unforgettable events that make an impact. Whether you&apos;re planning an intimate gathering or a large corporate conference, we are here to provide the expertise and support you need. We take pride in our ability to turn your ideas into reality, managing all the details while ensuring your event exceeds expectations.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white text-justify">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" style={{ color: colors.primary }}>
            Our Specialties
          </h2>
          <ul className="text-gray-700 list-disc pl-6 max-w-4xl mx-auto text-left space-y-4">
            <li>
              <strong>Tailored Event Design:</strong> Custom themes and designs to align with your brand, vision, or personal style.
            </li>
            <li>
              <strong>End-to-End Event Management:</strong> Comprehensive services from concept to post-event follow-up. We handle planning, coordination, vendor management, and logistics.
            </li>
            <li>
              <strong>Corporate Event Expertise:</strong>
              <ul className="list-disc pl-6">
                <li>Specialized in conferences, product launches, and team-building events.</li>
                <li>Focused on enhancing brand image, team cohesion, and client relationships.</li>
              </ul>
            </li>
            <li>
              <strong>Event Technology Integration:</strong>
              <ul className="list-disc pl-6">
                <li>Utilizing the latest technology for virtual events, live streaming, and event apps.</li>
                <li>Interactive solutions like live polls, Q&A sessions, and digital engagement tools.</li>
              </ul>
            </li>
            <li>
              <strong>Vendor & Venue Management:</strong>
              <ul className="list-disc pl-6">
                <li>Access to trusted vendors and venues for high-quality services at competitive prices.</li>
                <li>Seamless vendor coordination to ensure smooth event execution.</li>
              </ul>
            </li>
            <li>
              <strong>Logistical Precision:</strong>
              <ul className="list-disc pl-6">
                <li>Expert management of transportation, accommodation, and seating arrangements.</li>
                <li>Attention to details like catering and attendee registration.</li>
              </ul>
            </li>
            <li>
              <strong>Creative & Unique Experiences:</strong>
              <ul className="list-disc pl-6">
                <li>Innovative event entertainment, activations, and engagement ideas.</li>
                <li>Bringing fresh concepts to make your event stand out.</li>
              </ul>
            </li>
            <li>
              <strong>Comprehensive Budget Management:</strong>
              <ul className="list-disc pl-6">
                <li>Detailed budgeting and financial oversight to maximize value.</li>
                <li>Negotiating with vendors to ensure cost-effective solutions.</li>
              </ul>
            </li>
            <li>
              <strong>Sustainability Focus:</strong>
              <ul className="list-disc pl-6">
                <li>Environmentally friendly event planning with sustainable décor and catering.</li>
                <li>Reducing environmental impact without compromising quality.</li>
              </ul>
            </li>
            <li>
              <strong>On-Site Management:</strong>
              <ul className="list-disc pl-6">
                <li>Full-service event day coordination, managing schedules and staff.</li>
                <li>Ensuring seamless execution so you can enjoy your event stress-free.</li>
              </ul>
            </li>
            <li>
              <strong>Diverse Event Portfolio:</strong>
              <ul className="list-disc pl-6">
                <li>Expertise in weddings, festivals, trade shows, galas, and non-profits.</li>
                <li>Adaptability to any event size, budget, or audience type.</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      

      <section className="py-16 px-4 bg-white text-justify">
        <div className="max-w-4xl mx-auto text-center">
          <button
            className="px-8 py-3 rounded-lg text-white font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: colors.button }}
            onClick={() => router.push("/enquiry")}
          >
            Start Planning Your Event
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutUsPage;
