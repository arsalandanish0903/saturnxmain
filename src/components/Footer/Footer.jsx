import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-[#010038] w-full border-t-2 sm:py-8">
      <footer className="text-white container mx-auto px-6 sm:px-12 lg:px-24">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-6">
              <Link to="/">
                <img
                  src="/SaturnXDigitalLogo_white.png"
                  alt="Logo"
                  className="w-32"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are an advanced digital transformation consultancy and engineering
              company delivering cutting-edge solutions for global organizations
              and technology startups.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Legal</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Service Status
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        {/* <div className="mt-12 flex justify-center space-x-6">
          <a href="#" target="_blank" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-200">
            <span className="sr-only">LinkedIn</span>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-200">
            <span className="sr-only">Twitter</span>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-200">
            <span className="sr-only">YouTube</span>
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" target="_blank" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-200">
            <span className="sr-only">GitHub</span>
            <i className="fab fa-github"></i>
          </a>
        </div> */}

        {/* Footer Bottom */}
        <div className="mt-16 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} SaturnX. All rights reserved.</p>
        </div>
      </footer>
    </div>

  );

}

export default Footer;