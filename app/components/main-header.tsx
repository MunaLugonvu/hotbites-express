"use client"

import { useState, useEffect } from "react"
import { User, ShoppingCart, Menu, X } from "lucide-react"

type HeaderProps = {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function MainHeader({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mobileMenuOpen])

  // List of navigation items
  const navItems = [
    { label: "Menu", value: "menu" },
    { label: "About Us", value: "about" },
    { label: "Locations", value: "locations" },
    { label: "Order Online", value: "order" },
    { label: "Contact Us", value: "contact" },
  ]

  const handleNavClick = (value: string) => {
    setActiveTab(value)
    window.location.hash = value
    setMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <header className="bg-white shadow-sm p-4 lg:px-6 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("home")
          }}
          className="flex items-center gap-2"
        >
          <div className="h-10 w-10 bg-[#E53935] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <span className="font-bold text-xl">HotBite Express</span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={`#${item.value}`}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick(item.value)
            }}
            className={`font-medium hover:text-[#E53935] transition-colors ${
              activeTab === item.value ? "text-[#E53935]" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right Side Icons */}
      <div className="flex items-center gap-4">
        <a href="#" className="text-[#212121] hover:text-[#E53935] hidden md:block">
          <User size={20} />
        </a>
        <a href="#" className="text-[#212121] hover:text-[#E53935] relative">
          <ShoppingCart size={20} />
          <span className="absolute -top-2 -right-2 bg-[#E53935] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            2
          </span>
        </a>
        <button
          className="text-[#212121] md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md z-50 md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("home")
              }}
              className={`font-medium ${activeTab === "home" ? "text-[#E53935]" : ""}`}
            >
              Home
            </a>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.value}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.value)
                }}
                className={`font-medium ${activeTab === item.value ? "text-[#E53935]" : ""}`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <a href="#" className="flex items-center gap-2 text-[#212121] py-1">
                <User size={18} />
                <span>Sign In</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
