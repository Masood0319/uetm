"use client";

import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Admissions", href: "#admissions" },
    { name: "Academics", href: "#academics" },
    { name: "Research", href: "#research" },
    { name: "Campus Life", href: "#campus-life" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const departments = [
    { name: "Computer Science", href: "/cs" },
    { name: "Electrical Engineering", href: "/electrical" },
    { name: "Civil Engineering", href: "/civil" },
    { name: "Mechanical Engineering", href: "/mechanical" },
    { name: "Natural Sciences & Humanities", href: "/nsh" },
  ];

  const socialLinks = [
    { icon: <FiFacebook className="w-5 h-5" />, href: "https://www.facebook.com/UetMardan2/" },
    { icon: <FiInstagram className="w-5 h-5" />, href: "https://www.instagram.com/uetmofficial/" },
    { icon: <FiTwitter className="w-5 h-5" />, href: "#" },
    { icon: <FiYoutube className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">UET Mardan</h3>
            <p className="text-gray-400">
              Committed to excellence in engineering education and research to serve the nation and beyond.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Departments</h4>
            <ul className="space-y-2">
              {departments.map((dept, index) => (
                <li key={index}>
                  <Link
                    href={dept.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="flex-shrink-0 h-5 w-5 text-gray-400 mt-0.5" />
                <span className="ml-3 text-gray-400">Charsadda Road, Mardan, Khyber Pakhtunkhwa, Pakistan</span>
              </li>
              <li className="flex items-center">
                <FiMail className="flex-shrink-0 h-5 w-5 text-gray-400" />
                <a href="mailto:info@uetmardan.edu.pk" className="ml-3 text-gray-400 hover:text-white transition-colors">
                  info@uetmardan.edu.pk
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="flex-shrink-0 h-5 w-5 text-gray-400" />
                <a href="tel:+92937XXXXXX" className="ml-3 text-gray-400 hover:text-white transition-colors">
                  +92 937 XXXXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} UET Mardan. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-white text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
