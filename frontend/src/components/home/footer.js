import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#121548] text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Inside Medico */}
        <div>
          <h3 className="font-bold text-lg mb-4">Inside Medico</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://devhub1.vercel.app"
                className="hover:text-blue-200 transition duration-300"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="https://devhub1.vercel.app"
                className="hover:text-blue-200 transition duration-300"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="https://devhub1.vercel.app"
                className="hover:text-blue-200 transition duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Terms & Conditions */}
        <div>
          <h3 className="font-bold text-lg mb-4">Terms & Conditions</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://devhub1.vercel.app"
                className="hover:text-blue-200 transition duration-300"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href="https://devhub1.vercel.app"
                className="hover:text-blue-200 transition duration-300"
              >
                Membership Terms
              </a>
            </li>
            <li>
              <a
                href="https://devhub1.vercel.app"
                className="hover:text-blue-200 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://devhub1.vercel.app"
                className="hover:text-blue-200 transition duration-300"
              >
                Cancellation & Refund policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact us */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact us</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:08047495555"
                className="hover:text-blue-200 transition duration-300"
              >
                +91 78409 35392
              </a>
            </li>
            <li>
              <a
                href="https://devhub1.vercel.app"
                className="hover:text-blue-200 transition duration-300"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@even.in"
                className="hover:text-blue-200 transition duration-300"
              >
                hello@medico.in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
