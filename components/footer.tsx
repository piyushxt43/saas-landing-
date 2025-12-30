import { DraftlyLogo } from "./draftly-logo"
import { Linkedin, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8 sm:py-10 md:py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 md:col-span-2">
            <DraftlyLogo className="mb-3 sm:mb-4" />
            <p className="text-white/70 mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
              Empowering businesses with cutting-edge SaaS solutions. Founded by Piyush Singh, Draftly has scaled from 0 to 33K users and 800K social viewers.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/piyush-singh-023507359?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/piyush.glitch?igsh=N2pxeG1hYzVpNTgz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Piyush_Sxt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-white/50">
          <p className="text-xs sm:text-sm">&copy; 2024 Draftly by Piyush Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
