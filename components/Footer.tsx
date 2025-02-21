import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Big Events</h3>
            <p className="text-muted-foreground mb-6">
              Creating unforgettable moments and exceptional experiences for every occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/aboutus" className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Corporate Events</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Wedding Planning</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Birthday Parties</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Social Gatherings</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                <span className="text-muted-foreground">Chennai,Tamilnadu</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span className="text-muted-foreground">+91 9840106797</span>
              </li>
              <li className="flex items-center">
                <a href="mailto:hello@bigparty.ai" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  hello@bigparty.ai
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-primary mr-3" />
                <span className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Big Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
