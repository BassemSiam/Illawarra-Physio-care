import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Printer } from "lucide-react";
import { informationData } from "../_data/servicesData";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 pt-12 pb-6 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 border-b border-gray-800 pb-10 md:grid-cols-3">
        {/* Column 1: Brand & Bio */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Illawarra Physio Care Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold tracking-tight">
              Illawarra
              <span className="text-primary font-semibold"> Physio Care</span>
            </span>
          </div>
          <p className="leading-relaxed text-gray-400">
            At Illawarra Physio Care, your health is our priority. We are
            dedicated to providing personalised physiotherapy care to support
            your recovery, improve your physical wellbeing and help you achieve
            your full potential.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-wide text-white uppercase md:text-lg">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-primary transition">
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#testimonials"
                className="hover:text-primary transition"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="https://illawarra-physio-care.au5.cliniko.com/bookings"
                target="_blank"
                className="hover:text-primary font-medium transition"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Locations */}
        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-wide text-white uppercase md:text-lg">
            Our Locations
          </h3>
          <div className="space-y-8">
            {informationData.map((clinic, index) => (
              <div
                key={index}
                className="border-primary/30 hover:border-primary flex flex-col space-y-3 border-l-2 pl-4 transition-all"
              >
                <h4 className="font-bold text-gray-100">{clinic.place}</h4>

                <div className="flex flex-col space-y-2 text-sm text-gray-400">
                  {/* Phone 1 */}
                  <a
                    href={`tel:${clinic.dial1}`}
                    className="hover:text-primary flex items-center gap-3 transition-colors"
                  >
                    <Phone size={14} className="text-primary shrink-0" />
                    <span className="tabular-nums">{clinic.number1}</span>
                  </a>

                  {/* Fax */}
                  <div className="flex items-center gap-3 text-gray-400">
                    <Printer size={14} className="text-primary shrink-0" />
                    <span>
                      <span className="mr-1 font-semibold text-gray-500">
                        Fax:
                      </span>
                      <span className="tabular-nums">{clinic.fax}</span>
                    </span>
                  </div>

                  {/* Address */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary mt-1 flex items-start gap-3 transition"
                  >
                    <MapPin
                      size={16}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <span className="text-xs leading-relaxed">
                      {clinic.address}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Single Email at the end */}
          <div className="mt-8 border-t border-gray-800 pt-6">
            <a
              href="mailto:info@illawarraphysiocare.com.au"
              className="group flex items-center gap-3"
            >
              {/* Added shrink-0 so the icon circle stays round */}
              <div className="group-hover:bg-primary shrink-0 rounded-full bg-gray-800 p-2 transition-colors">
                <Mail size={18} className="text-white" />
              </div>

              {/* Added min-w-0 to allow flex child to shrink below its content size */}
              <div className="flex min-w-0 flex-col">
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                  Email Us
                </span>
                <span className="group-hover:text-primary break-all font-medium text-gray-200 transition">
                  info@illawarraphysiocare.com.au
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between text-xs text-gray-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Illawarra{" "}
          <span className="text-primary font-semibold">Physio Care</span>{" "}
          Physiotherapy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
