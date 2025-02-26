import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import logo from "@/app/assets/logo-White.png"


export default function Footer() {
  return (
    <footer className=" text-white bg-[#0b0a45]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Image
              src={logo}
              alt="Events & Shows"
              width={160}
              height={60}
              className="h-20 w-auto mb-4"
            />
            <p className="hover:text-muted-foreground text-white mb-6">
              Creating unforgettable moments and exceptional experiences for every occasion.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/workfreaks" className="text-white hover:text-white/80 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/workfreaks" className="text-white hover:text-white/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 0h-4.8l-6 7.2L6.8 0H0l9.3 11.3 0 0L0 24h4.8l6.6-7.9L17.2 24H24l-9.7-11.3L23.5 0z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/workfreaks.in/" className="text-white hover:text-white/80 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/workfreaks.in/" className="text-white hover:text-white/80 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@workfreaksworld1463" className="text-white hover:text-white/80 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/aboutus" className="text-white hover:text-muted-foreground transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-muted-foreground transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-muted-foreground transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-muted-foreground transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-muted-foreground text-white transition-colors">Corporate Events</a>
              </li>
              <li>
                <a href="#" className="hover:text-muted-foreground text-white transition-colors">Wedding Planning</a>
              </li>
              <li>
                <a href="#" className="hover:text-muted-foreground text-white transition-colors">Birthday Parties</a>
              </li>
              <li>
                <a href="#" className="hover:text-muted-foreground text-white transition-colors">Special Occasion</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-white mr-3" />
                <span className="hover:text-muted-foreground text-white">Chennai,Tamilnadu</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-white mr-3" />
                <span className="hover:text-muted-foreground text-white">+91 9840106797</span>
              </li>
              <li className="flex items-center">
                <a href="mailto:events@workfreaks.app" className="flex items-center hover:text-muted-foreground text-white transition-colors">
                  <Mail className="w-5 h-5 text-white mr-3" />
                  events@workfreaks.app
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-white mr-3" />
                <span className="hover:text-muted-foreground text-white">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-10 pt-8 text-center hover:text-muted-foreground text-white">
          <p>&copy; {new Date().getFullYear()} Workfreaks Events & Shows. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
