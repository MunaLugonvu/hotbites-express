"use client"

import { useState, useEffect } from "react"
import { User, ShoppingCart, Menu, X } from "lucide-react"
import { HomePageMockup } from "../mockups"
import { ContactPageMockup, LocationsPageMockup, AboutPageMockup } from "../additional-mockups"
import { MenuPageMockup, OrderPageMockup } from "../mockups"




function MainFooter() {
  return (
    <footer className="bg-[#212121] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">HotBite Express</h3>
            <p className="text-gray-300">Serving delicious food with lightning-fast delivery since 2010.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-gray-300 hover:text-white">
                  Menu
                </a>
              </li>
              <li>
                <a href="#locations" className="text-gray-300 hover:text-white">
                  Locations
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <address className="text-gray-300 not-italic">
              <p>123 Food Street</p>
              <p>Tasty Town, TS 12345</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: info@hotbite.example</p>
            </address>
          </div>
          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <ul className="text-gray-300">
              <li>Monday - Friday: 10am - 10pm</li>
              <li>Saturday: 11am - 11pm</li>
              <li>Sunday: 11am - 9pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2023 HotBite Express. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}



export default function Page() {
  const [activeTab, setActiveTab] = useState("home")

  // Handle hash changes for direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && ["home", "menu", "order", "about", "locations", "contact"].includes(hash)) {
        setActiveTab(hash)
      }
    }

    // Check hash on initial load
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  // Update hash when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    window.location.hash = value
  }

  // Render the appropriate component based on activeTab
  const renderActiveContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePageMockup activeTab={activeTab} setActiveTab={setActiveTab} />
      case "menu":
        return <MenuPageMockup activeTab={activeTab} setActiveTab={setActiveTab} />
      case "order":
        return <OrderPageMockup activeTab={activeTab} setActiveTab={setActiveTab} />
      case "about":
        return <AboutPageMockup activeTab={activeTab} setActiveTab={setActiveTab} />
      case "locations":
        return <LocationsPageMockup activeTab={activeTab} setActiveTab={setActiveTab} />
      case "contact":
        return <ContactPageMockup activeTab={activeTab} setActiveTab={setActiveTab} />
      default:
        return <HomePageMockup activeTab={activeTab} setActiveTab={setActiveTab} />
    }
  }

  return (
    <div className="font-sans">
      <main>{renderActiveContent()}</main>
    </div>
  )
}
