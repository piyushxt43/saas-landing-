"use client"

import { useState, useEffect } from "react"
import { DraftlyLogo } from "./draftly-logo"
import { Button } from "./ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 50)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <div
        className={`
          flex items-center justify-center gap-2 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl border transition-all duration-300
          ${
            isScrolled
              ? "bg-background/90 backdrop-blur-xl border-border/40 shadow-2xl"
              : "bg-background/95 backdrop-blur-lg border-border/30 shadow-lg"
          }
        `}
      >
        <div className="transform transition-transform duration-200 hover:scale-105">
          <DraftlyLogo />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="relative text-foreground/80 hover:text-foreground transition-all duration-300 group px-3 py-1 rounded-lg hover:bg-foreground/5 transform hover:scale-110 hover:rotate-1 hover:skew-x-1"
          >
            Features
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-4"></span>
          </a>
          <a
            href="#pricing"
            className="relative text-foreground/80 hover:text-foreground transition-all duration-300 group px-3 py-1 rounded-lg hover:bg-foreground/5 transform hover:scale-110 hover:-rotate-1 hover:-skew-x-1"
          >
            Pricing
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-4"></span>
          </a>
          <a
            href="#about"
            className="relative text-foreground/80 hover:text-foreground transition-all duration-300 group px-3 py-1 rounded-lg hover:bg-foreground/5 transform hover:scale-110 hover:rotate-1 hover:skew-x-1"
          >
            About
          </a>
          <a
            href="#about"
            className="relative text-foreground/80 hover:text-foreground transition-all duration-300 group px-3 py-1 rounded-lg hover:bg-foreground/5 transform hover:scale-110 hover:-rotate-1 hover:-skew-x-1"
          >
            Testimonials
          </a>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-all duration-200 rounded-xl text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5"
          >
            <span className="hidden sm:inline">Sign In</span>
            <span className="sm:hidden">Sign</span>
          </Button>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-200 hover:scale-105 hover:shadow-lg rounded-xl text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5"
          >
            <span className="hidden sm:inline">Get Started</span>
            <span className="sm:hidden">Start</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
