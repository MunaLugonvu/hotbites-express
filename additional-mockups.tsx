"use client"

import React from "react"
import { useState, useEffect } from "react"

import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, User, ShoppingCart, Menu, X, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


// Add a custom CSS class at the top of the file to support extra small screens
// Add this right after the imports
const styles = {
  "@media (min-width: 475px)": {
    ".xs\\:flex-row": {
      flexDirection: "row",
    },
    ".xs\\:w-1\\/3": {
      width: "33.333333%",
    },
    ".xs\\:w-2\\/3": {
      width: "66.666667%",
    },
    ".xs\\:h-auto": {
      height: "auto",
    },
  },
}
function MainHeader({ activeTab, setActiveTab }: HeaderProps) {
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


// About Us Page Mockup
export function AboutPageMockup({
  activeTab,
  setActiveTab,
}: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <div className="font-sans text-[#212121]">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Header */}
        <MainHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Page Banner */}
        <div className="bg-[#263238] text-white py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-2">About Us</h1>
            <p className="text-gray-300">Learn more about HotBite Express and our story</p>
          </div>
        </div>

        {/* About Us Content */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            {/* Our Story Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
              <div className="grid grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="https://img.freepik.com/premium-photo/homemade-grilled-burger-with-turkey-cutlet-cheese-cheese-sauce-vegetables-wooden-board-dark-wall-close-up-selective-focus-with-copy-space_166373-1417.jpg?w=740"
                    alt="HotBite Express restaurant"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#E53935]">From Food Truck to Favorite Chain</h3>
                  <p className="text-[#757575] mb-4">
                    HotBite Express started as a humble food truck in 2010, founded by siblings Maria and James
                    Rodriguez with a passion for creating delicious, quick meals that didn't compromise on quality.
                  </p>
                  <p className="text-[#757575] mb-4">
                    Their signature burgers and loaded fries quickly gained a cult following, with lines stretching
                    around the block at every location they parked. By 2015, they had opened their first
                    brick-and-mortar restaurant, and today HotBite Express has grown to 25 locations across the country.
                  </p>
                  <p className="text-[#757575]">
                    Despite our growth, we remain committed to our founding principles: using fresh, locally-sourced
                    ingredients, creating everything from scratch daily, and providing fast, friendly service that makes
                    every customer feel like family.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Values Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-3 gap-8">
                {[
                  {
                    title: "Quality First",
                    description:
                      "We never compromise on ingredients or preparation. Every meal is made with care using premium ingredients.",
                    icon: "🌟",
                  },
                  {
                    title: "Community Focus",
                    description:
                      "We're proud to be part of the communities we serve, supporting local suppliers and giving back through various initiatives.",
                    icon: "🤝",
                  },
                  {
                    title: "Innovation",
                    description:
                      "We're constantly evolving our menu and processes to bring you exciting new flavors while maintaining the classics you love.",
                    icon: "💡",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-[#F5F5F5] rounded-xl p-8 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-[#757575]">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Team Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-3 gap-8">
                {[
                  {
                    name: "Maria Rodriguez",
                    role: "Co-Founder & CEO",
                    image:
                      "https://img.freepik.com/free-photo/designer-fashion_1098-15866.jpg?t=st=1746116280~exp=1746119880~hmac=224436c5d19908783619411467d53f25a394cb9e0c3053d94ddd1ecd3a070622&w=996",
                    bio: "Maria's culinary vision and business acumen have been the driving force behind HotBite's success.",
                  },
                  {
                    name: "James Rodriguez",
                    role: "Co-Founder & Head Chef",
                    image:
                      "https://img.freepik.com/premium-photo/professional-diverse-successful-business-team-smiling-standing-together-office-happy-formal-multiracial-corporate-staff-bank-workers-businesspeople-looking-camera_590464-77422.jpg?w=1060",
                    bio: "James creates our signature recipes and ensures quality across all locations.",
                  },
                  {
                    name: "Sarah Johnson",
                    role: "Operations Director",
                    image:
                      "https://img.freepik.com/premium-photo/ethnic-businesswoman-smiling-camera_13339-257259.jpg?w=996",
                    bio: "Sarah ensures every HotBite location delivers the same exceptional experience.",
                  },
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-[#E53935]">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#E53935] font-medium mb-3">{member.role}</p>
                    <p className="text-[#757575]">{member.bio}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Join Our Team Section */}
            <section className="bg-gradient-to-r from-[#E53935] to-[#FF9800] rounded-xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                We're always looking for passionate individuals to join the HotBite Express family. Check out our
                current openings and become part of our story!
              </p>
              <Button size="lg" className="bg-white text-[#E53935] hover:bg-gray-100">
                View Career Opportunities
              </Button>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#263238] text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-10 w-10 bg-[#E53935] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">H</span>
                  </div>
                  <span className="font-bold text-xl">HotBite Express</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Delicious food delivered fast. Enjoy our mouth-watering menu items delivered right to your doorstep.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {["Home", "Menu", "About Us", "Locations", "Order Online", "Contact Us"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <MapPin className="mr-2 h-5 w-5 text-[#E53935]" />
                    <span className="text-gray-300">123 Main Street, City, State 12345</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="mr-2 h-5 w-5 text-[#E53935]" />
                    <span className="text-gray-300">(123) 456-7890</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="mr-2 h-5 w-5 text-[#E53935]" />
                    <span className="text-gray-300">info@hotbiteexpress.com</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 flex justify-between items-center">
              <p className="text-gray-400">© 2023 HotBite Express. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        {/* Header */}
        <MainHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Page Banner */}
        <div className="bg-[#263238] text-white py-8">
          <div className="px-4">
            <h1 className="text-3xl font-bold mb-1">About Us</h1>
            <p className="text-gray-300 text-sm">Learn more about HotBite Express and our story</p>
          </div>
        </div>

        {/* About Us Content */}
        <div className="bg-white py-8">
          <div className="px-4">
            {/* Our Story Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Story</h2>
              <div className="mb-6">
                <Image
                  src="https://img.freepik.com/premium-photo/homemade-grilled-burger-with-turkey-cutlet-cheese-cheese-sauce-vegetables-wooden-board-dark-wall-close-up-selective-focus-with-copy-space_166373-1417.jpg?w=740"
                  alt="HotBite Express restaurant"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-md object-cover w-full h-[200px] sm:h-[250px]"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#E53935]">From Food Truck to Favorite Chain</h3>
                <p className="text-[#757575] mb-3 text-sm">
                  HotBite Express started as a humble food truck in 2010, founded by siblings Maria and James Rodriguez
                  with a passion for creating delicious, quick meals that didn't compromise on quality.
                </p>
                <p className="text-[#757575] mb-3 text-sm">
                  Their signature burgers and loaded fries quickly gained a cult following, with lines stretching around
                  the block at every location they parked. By 2015, they had opened their first brick-and-mortar
                  restaurant.
                </p>
                <p className="text-[#757575] text-sm">
                  Despite our growth, we remain committed to our founding principles: using fresh, locally-sourced
                  ingredients, creating everything from scratch daily, and providing fast, friendly service.
                </p>
              </div>
            </section>

            {/* Our Values Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Quality First",
                    description:
                      "We never compromise on ingredients or preparation. Every meal is made with care using premium ingredients.",
                    icon: "🌟",
                  },
                  {
                    title: "Community Focus",
                    description:
                      "We're proud to be part of the communities we serve, supporting local suppliers and giving back through various initiatives.",
                    icon: "🤝",
                  },
                  {
                    title: "Innovation",
                    description:
                      "We're constantly evolving our menu and processes to bring you exciting new flavors while maintaining the classics you love.",
                    icon: "💡",
                  },
                ].map((value, index) => (
                  <div key={index} className="bg-[#F5F5F5] rounded-xl p-4 sm:p-6 flex items-start sm:items-center">
                    <div className="text-3xl mr-4 flex-shrink-0">{value.icon}</div>
                    <div>
                      <h3 className="font-bold mb-1">{value.title}</h3>
                      <p className="text-[#757575] text-xs sm:text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Team Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
              <div className="space-y-6">
                {[
                  {
                    name: "Maria Rodriguez",
                    role: "Co-Founder & CEO",
                    image:
                      "https://img.freepik.com/premium-photo/ethnic-businesswoman-smiling-camera_13339-257259.jpg?w=996",
                    bio: "Maria's culinary vision and business acumen have been the driving force behind HotBite's success.",
                  },
                  {
                    name: "James Rodriguez",
                    role: "Co-Founder & Head Chef",
                    image:
                      "https://img.freepik.com/premium-photo/professional-diverse-successful-business-team-smiling-standing-together-office-happy-formal-multiracial-corporate-staff-bank-workers-businesspeople-looking-camera_590464-77422.jpg?w=1060",
                    bio: "James creates our signature recipes and ensures quality across all locations.",
                  },
                  {
                    name: "Sarah Johnson",
                    role: "Operations Director",
                    image:
                      "https://img.freepik.com/premium-photo/ethnic-businesswoman-smiling-camera_13339-257259.jpg?w=996",
                    bio: "Sarah ensures every HotBite location delivers the same exceptional experience.",
                  },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left"
                  >
                    <div className="mb-3 sm:mb-0 sm:mr-4 relative w-24 h-24 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#E53935] flex-shrink-0">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={150}
                        height={150}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-[#E53935] text-sm mb-1">{member.role}</p>
                      <p className="text-[#757575] text-xs sm:text-sm">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Join Our Team Section */}
            <section className="bg-gradient-to-r from-[#E53935] to-[#FF9800] rounded-xl p-6 text-white text-center">
              <h2 className="text-xl font-bold mb-3">Join Our Team</h2>
              <p className="text-sm mb-4">
                We're always looking for passionate individuals to join the HotBite Express family. Check out our
                current openings!
              </p>
              <Button className="bg-white text-[#E53935] hover:bg-gray-100 w-full">View Career Opportunities</Button>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#263238] text-white py-8">
          <div className="px-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-[#E53935] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-bold text-lg">HotBite Express</span>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-4 w-4 text-[#E53935]" />
                  <span className="text-gray-300 text-sm">123 Main Street, City, State 12345</span>
                </li>
                <li className="flex items-start">
                  <Phone className="mr-2 h-4 w-4 text-[#E53935]" />
                  <span className="text-gray-300 text-sm">(123) 456-7890</span>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3">Follow Us</h3>
              <div className="flex space-x-3">
                <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4 text-center">
              <p className="text-gray-400 text-sm">© 2023 HotBite Express. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// Locations Page Mockup
export function LocationsPageMockup({
  activeTab,
  setActiveTab,
}: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <div className="font-sans text-[#212121]">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Header */}
        <MainHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Page Banner */}
        <div className="bg-[#263238] text-white py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-2">Our Locations</h1>
            <p className="text-gray-300">Find a HotBite Express restaurant near you</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-6">
            <div className="bg-gray-200 h-[500px] rounded-xl mb-12 relative overflow-hidden">
              <Image
                src="https://imgdlvr.com/pic/mapimage.com/20250502-0265/public" border="0" alt="Made with MapImage.com"
                alt="Map with HotBite Express locations"
                width={1200}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
               {/* <span className="text-2xl font-bold text-gray-500">Interactive Map with Location Markers</span> */}
              </div>
            </div>

            {/* Location Search */}
            <div className="max-w-md mx-auto mb-12">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Find a Location</h2>
                <div className="flex gap-2">
                  <Input placeholder="Enter zip code or city" className="focus-visible:ring-[#E53935]" />
                  <Button className="bg-[#E53935] hover:bg-[#D32F2F] text-white">Search</Button>
                </div>
              </div>
            </div>

            {/* Locations List */}
            <h2 className="text-3xl font-bold mb-8 text-center">All Locations</h2>
            <div className="grid grid-cols-3 gap-8">
              {[
                {
                  name: "Downtown City Center",
                  address: "123 Main Street, City Center, State 12345",
                  phone: "(123) 456-7890",
                  hours: "Mon-Sun: 10:00 AM - 10:00 PM",
                  image:
                    "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?t=st=1746116531~exp=1746120131~hmac=20fdc662da6c7062f572b97313043cd69d824bf58a31d438b9cf9fbcfee9778e&w=996",
                },
                {
                  name: "Westside Mall",
                  address: "456 Shopping Avenue, Westside, State 12345",
                  phone: "(123) 456-7891",
                  hours: "Mon-Sat: 11:00 AM - 9:00 PM, Sun: 12:00 PM - 7:00 PM",
                  image:
                    "https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?t=st=1746116603~exp=1746120203~hmac=1d1a212056585dfd515b381cea209bfad53c2088861ae8dfc63fa78ac9fad977&w=826",
                },
                {
                  name: "North Hills",
                  address: "789 Hill Road, North Hills, State 12345",
                  phone: "(123) 456-7892",
                  hours: "Mon-Sun: 10:00 AM - 11:00 PM",
                  image:
                    "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?t=st=1746116531~exp=1746120131~hmac=20fdc662da6c7062f572b97313043cd69d824bf58a31d438b9cf9fbcfee9778e&w=996",
                },
                {
                  name: "Eastside Plaza",
                  address: "321 Plaza Drive, Eastside, State 12345",
                  phone: "(123) 456-7893",
                  hours: "Mon-Sun: 10:00 AM - 10:00 PM",
                  image:
                    "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?t=st=1746116531~exp=1746120131~hmac=20fdc662da6c7062f572b97313043cd69d824bf58a31d438b9cf9fbcfee9778e&w=996",
                },
                {
                  name: "South Bay",
                  address: "654 Bay Boulevard, South Bay, State 12345",
                  phone: "(123) 456-7894",
                  hours: "Mon-Sun: 10:00 AM - 10:00 PM",
                  image:
                    "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?t=st=1746116531~exp=1746120131~hmac=20fdc662da6c7062f572b97313043cd69d824bf58a31d438b9cf9fbcfee9778e&w=996",
                },
                {
                  name: "University District",
                  address: "987 Campus Road, University District, State 12345",
                  phone: "(123) 456-7895",
                  hours: "Mon-Sun: 10:00 AM - 12:00 AM",
                  image:
                    "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?t=st=1746116531~exp=1746120131~hmac=20fdc662da6c7062f572b97313043cd69d824bf58a31d438b9cf9fbcfee9778e&w=996",
                },
              ].map((location, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3">{location.name}</h3>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <MapPin className="mr-2 h-5 w-5 text-[#E53935]" />
                        <span className="text-[#757575]">{location.address}</span>
                      </li>
                      <li className="flex items-start">
                        <Phone className="mr-2 h-5 w-5 text-[#E53935]" />
                        <span className="text-[#757575]">{location.phone}</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="mr-2 h-5 w-5 text-[#E53935]" />
                        <span className="text-[#757575]">{location.hours}</span>
                      </li>
                    </ul>
                    <Button className="bg-[#E53935] hover:bg-[#D32F2F] text-white w-full flex items-center justify-center">
                      <span>Get Directions</span>
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#263238] text-white py-12 mt-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-10 w-10 bg-[#E53935] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">H</span>
                  </div>
                  <span className="font-bold text-xl">HotBite Express</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Delicious food delivered fast. Enjoy our mouth-watering menu items delivered right to your doorstep.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {["Home", "Menu", "About Us", "Locations", "Order Online", "Contact Us"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <MapPin className="mr-2 h-5 w-5 text-[#E53935]" />
                    <span className="text-gray-300">123 Main Street, City, State 12345</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="mr-2 h-5 w-5 text-[#E53935]" />
                    <span className="text-gray-300">(123) 456-7890</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="mr-2 h-5 w-5 text-[#E53935]" />
                    <span className="text-gray-300">info@hotbiteexpress.com</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 flex justify-between items-center">
              <p className="text-gray-400">© 2023 HotBite Express. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        {/* Header */}
        <MainHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Page Banner */}
        <div className="bg-[#263238] text-white py-8">
          <div className="px-4">
            <h1 className="text-3xl font-bold mb-1">Our Locations</h1>
            <p className="text-gray-300 text-sm">Find a HotBite Express restaurant near you</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white py-8">
          <div className="px-4">
            <div className="bg-gray-200 h-[200px] rounded-xl mb-6 relative overflow-hidden">
              <Image
                src="https://img.freepik.com/premium-vector/green-navigation-pins-city-street-map_6735-371.jpg?w=1380"
                alt="Map with HotBite Express locations"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-base sm:text-lg font-bold text-gray-500">Map View</span>
              </div>
            </div>

            {/* Location Search */}
            <div className="mb-8">
              <div className="bg-white rounded-xl shadow-md p-4">
                <h2 className="text-lg font-bold mb-3">Find a Location</h2>
                <div className="flex gap-2">
                  <Input placeholder="Enter zip code or city" className="focus-visible:ring-[#E53935] text-sm" />
                  <Button className="bg-[#E53935] hover:bg-[#D32F2F] text-white px-2 sm:px-3">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Locations List */}
            <h2 className="text-2xl font-bold mb-6 text-center">All Locations</h2>
            <div className="space-y-4">
              {[
                {
                  name: "Downtown City Center",
                  address: "123 Main Street, City Center, State 12345",
                  phone: "(123) 456-7890",
                  hours: "Mon-Sun: 10:00 AM - 10:00 PM",
                  image:
                    "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?t=st=1746116531~exp=1746120131~hmac=20fdc662da6c7062f572b97313043cd69d824bf58a31d438b9cf9fbcfee9778e&w=996",
                },
                {
                  name: "Westside Mall",
                  address: "456 Shopping Avenue, Westside, State 12345",
                  phone: "(123) 456-7891",
                  hours: "Mon-Sat: 11:00 AM - 9:00 PM, Sun: 12:00 PM - 7:00 PM",
                  image:
                    "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?t=st=1746116531~exp=1746120131~hmac=20fdc662da6c7062f572b97313043cd69d824bf58a31d438b9cf9fbcfee9778e&w=996",
                },
                {
                  name: "North Hills",
                  address: "789 Hill Road, North Hills, State 12345",
                  phone: "(123) 456-7892",
                  hours: "Mon-Sun: 10:00 AM - 11:00 PM",
                  image:
                    "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?t=st=1746116531~exp=1746120131~hmac=20fdc662da6c7062f572b97313043cd69d824bf58a31d438b9cf9fbcfee9778e&w=996",
                },
              ].map((location, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col xs:flex-row">
                    <div className="w-full xs:w-1/3 h-32 xs:h-auto">
                      <Image
                        src={location.image || "/placeholder.svg"}
                        alt={location.name}
                        width={150}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 w-full xs:w-2/3">
                      <h3 className="font-bold text-base mb-1">{location.name}</h3>
                      <p className="text-[#757575] text-xs mb-2 line-clamp-1">{location.address}</p>
                      <Button size="sm" className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs w-full">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" className="border-[#E53935] text-[#E53935]">
                View All Locations
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#263238] text-white py-8">
          <div className="px-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-[#E53935] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-bold text-lg">HotBite Express</span>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-4 w-4 text-[#E53935]" />
                  <span className="text-gray-300 text-sm">123 Main Street, City, State 12345</span>
                </li>
                <li className="flex items-start">
                  <Phone className="mr-2 h-4 w-4 text-[#E53935]" />
                  <span className="text-gray-300 text-sm">(123) 456-7890</span>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3">Follow Us</h3>
              <div className="flex space-x-3">
                <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4 text-center">
              <p className="text-gray-400 text-sm">© 2023 HotBite Express. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// Contact Us Page Mockup
export function ContactPageMockup({
  activeTab,
  setActiveTab,
}: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <div className="font-sans text-[#212121]">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Header */}
        <MainHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Page Banner */}
        <div className="bg-[#263238] text-white py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
            <p className="text-gray-300">We'd love to hear from you. Get in touch with our team.</p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <div className="bg-white rounded-xl shadow-md p-8">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input id="name" placeholder="Enter your name" className="focus-visible:ring-[#E53935]" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="focus-visible:ring-[#E53935]"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        className="focus-visible:ring-[#E53935]"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        className="min-h-[150px] focus-visible:ring-[#E53935]"
                      />
                    </div>
                    <Button className="bg-[#E53935] hover:bg-[#D32F2F] text-white w-full">Send Message</Button>
                  </div>
                </div>
              </div>

              {/* FAQ and Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="mb-8">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:text-[#E53935]">What are your opening hours?</AccordionTrigger>
                    <AccordionContent>
                      Most of our locations are open from 10:00 AM to 10:00 PM, seven days a week. Some locations may
                      have extended hours. Please check our Locations page for specific hours for each restaurant.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="hover:text-[#E53935]">
                      Do you offer vegetarian options?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes! We have a variety of vegetarian options on our menu, including our popular Veggie Burger,
                      Garden Salad, and Cheese Loaded Fries. All vegetarian items are clearly marked on our menu.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="hover:text-[#E53935]">
                      How do I place a large catering order?
                    </AccordionTrigger>
                    <AccordionContent>
                      For catering orders, please contact us at least 24 hours in advance. You can call our catering
                      line at (123) 456-7899 or email us at catering@hotbiteexpress.com with your requirements.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="hover:text-[#E53935]">
                      Do you offer delivery services?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, we offer delivery through our website and mobile app. We also partner with major food
                      delivery services. Delivery radius is typically within 5 miles of each location.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="hover:text-[#E53935]">
                      How can I provide feedback about my experience?
                    </AccordionTrigger>
                    <AccordionContent>
                      We value your feedback! You can share your experience through our contact form on this page, by
                      emailing feedback@hotbiteexpress.com, or by speaking with a manager at any of our locations.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="bg-[#F5F5F5] rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <MapPin className="mr-3 h-6 w-6 text-[#E53935]" />
                      <div>
                        <p className="font-medium">Main Office</p>
                        <p className="text-[#757575]">123 Main Street, City, State 12345</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone className="mr-3 h-6 w-6 text-[#E53935]" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-[#757575]">(123) 456-7890</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Mail className="mr-3 h-6 w-6 text-[#E53935]" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-[#757575]">info@hotbiteexpress.com</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                      <Facebook className="h-5 w-5 text-white" />
                    </a>
                    <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                    <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                    <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                      <Youtube className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#263238] text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-10 w-10 bg-[#E53935] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">H</span>
                  </div>
                  <span className="font-bold text-xl">HotBite Express</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Delicious food delivered fast. Enjoy our mouth-watering menu items delivered right to your doorstep.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {["Home", "Menu", "About Us", "Locations", "Order Online", "Contact Us"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <MapPin className="mr-2 h-5 w-5 text-[#E53935]" />
                    <span className="text-gray-300">123 Main Street, City, State 12345</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="mr-2 h-5 w-5 text-[#E53935]" />
                    <span className="text-gray-300">(123) 456-7890</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="mr-2 h-5 w-5 text-[#E53935]" />
                    <span className="text-gray-300">info@hotbiteexpress.com</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 flex justify-between items-center">
              <p className="text-gray-400">© 2023 HotBite Express. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        {/* Header */}
        <MainHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Page Banner */}
        <div className="bg-[#263238] text-white py-8">
          <div className="px-4">
            <h1 className="text-3xl font-bold mb-1">Contact Us</h1>
            <p className="text-gray-300 text-sm">We'd love to hear from you</p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="bg-white py-8">
          <div className="px-4">
            {/* Contact Form */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <div className="bg-white rounded-xl shadow-md p-4">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name-mobile" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name-mobile"
                      placeholder="Enter your name"
                      className="focus-visible:ring-[#E53935] text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-mobile" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email-mobile"
                      type="email"
                      placeholder="Enter your email"
                      className="focus-visible:ring-[#E53935] text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject-mobile" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject-mobile"
                      placeholder="What is this regarding?"
                      className="focus-visible:ring-[#E53935] text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message-mobile" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message-mobile"
                      placeholder="How can we help you?"
                      className="min-h-[120px] focus-visible:ring-[#E53935] text-sm"
                    />
                  </div>
                  <Button className="bg-[#E53935] hover:bg-[#D32F2F] text-white w-full">Send Message</Button>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="text-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:text-[#E53935] text-sm py-3">
                    What are your opening hours?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm">
                    Most of our locations are open from 10:00 AM to 10:00 PM, seven days a week. Some locations may have
                    extended hours. Please check our Locations page for specific hours for each restaurant.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="hover:text-[#E53935] text-sm py-3">
                    Do you offer vegetarian options?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm">
                    Yes! We have a variety of vegetarian options on our menu, including our popular Veggie Burger,
                    Garden Salad, and Cheese Loaded Fries. All vegetarian items are clearly marked on our menu.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="hover:text-[#E53935] text-sm py-3">
                    How do I place a large catering order?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm">
                    For catering orders, please contact us at least 24 hours in advance. You can call our catering line
                    at (123) 456-7899 or email us at catering@hotbiteexpress.com with your requirements.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Contact Info */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="bg-[#F5F5F5] rounded-xl p-4">
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <MapPin className="mr-2 h-5 w-5 text-[#E53935] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Main Office</p>
                      <p className="text-[#757575] text-xs sm:text-sm">123 Main Street, City, State 12345</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="mr-2 h-5 w-5 text-[#E53935] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <p className="text-[#757575] text-xs sm:text-sm">(123) 456-7890</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="mr-2 h-5 w-5 text-[#E53935] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-[#757575] text-xs sm:text-sm">info@hotbiteexpress.com</p>
                    </div>
                  </li>
                </ul>
                <h3 className="font-bold mb-3">Follow Us</h3>
                <div className="flex space-x-3">
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Facebook className="h-4 w-4 text-white" />
                  </a>
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Twitter className="h-4 w-4 text-white" />
                  </a>
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Instagram className="h-4 w-4 text-white" />
                  </a>
                  <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                    <Youtube className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#263238] text-white py-8">
          <div className="px-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-[#E53935] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-bold text-lg">HotBite Express</span>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-4 w-4 text-[#E53935]" />
                  <span className="text-gray-300 text-sm">123 Main Street, City, State 12345</span>
                </li>
                <li className="flex items-start">
                  <Phone className="mr-2 h-4 w-4 text-[#E53935]" />
                  <span className="text-gray-300 text-sm">(123) 456-7890</span>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3">Follow Us</h3>
              <div className="flex space-x-3">
                <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#E53935] p-2 rounded-full hover:bg-[#D32F2F] transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4 text-center">
              <p className="text-gray-400 text-sm">© 2023 HotBite Express. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// Clock component for the Locations page
function Clock(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

// Main App Component to display all mockups
export default function AdditionalMockupsApp() {
  const [activeTab, setActiveTab] = React.useState("about")

  return (
    <div className="font-sans">
      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="bg-white border-b sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold py-4">HotBite Express - Additional Mockups</h1>
              <TabsList>
                <TabsTrigger value="about">About Us</TabsTrigger>
                <TabsTrigger value="locations">Locations</TabsTrigger>
                <TabsTrigger value="contact">Contact Us</TabsTrigger>
              </TabsList>
            </div>
          </div>
        </div>

        <TabsContent value="about" className="mt-0">
          <AboutPageMockup activeTab={activeTab} setActiveTab={setActiveTab} />
        </TabsContent>

        <TabsContent value="locations" className="mt-0">
          <LocationsPageMockup activeTab={activeTab} setActiveTab={setActiveTab} />
        </TabsContent>

        <TabsContent value="contact" className="mt-0">
          <ContactPageMockup activeTab={activeTab} setActiveTab={setActiveTab} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
