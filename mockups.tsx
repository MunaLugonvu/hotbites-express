"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

import {
  Search,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
  Plus,
  Minus,
  User, ShoppingCart, Menu, X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"


// Color scheme for HotBite Express
const colors = {
  primary: "#E53935", // Vibrant red
  secondary: "#FF9800", // Orange
  accent: "#FFC107", // Amber/yellow
  dark: "#263238", // Dark blue-grey
  light: "#FFFFFF", // White
  background: "#F5F5F5", // Light grey
  text: "#212121", // Near black
  textLight: "#757575", // Medium grey
  success: "#4CAF50", // Green
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


// Home Page Mockup
export function HomePageMockup({
  activeTab,
  setActiveTab,
}: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <div className="font-sans text-[#212121]">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Header */}
        <MainHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000aa] to-transparent z-10"></div>
          <Image
            src="https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?t=st=1746114746~exp=1746118346~hmac=89304382073ee1e9abfa4dcae61ea4ed9052115655b185e62ad989aa8dd1203b&w=900"
            alt="Delicious burger with fries"
            width={1920}
            height={500}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-lg">
                <h1 className="text-5xl font-bold text-white mb-4">Delicious Food Delivered Fast</h1>
                <p className="text-xl text-white mb-8">
                  Enjoy our mouth-watering menu items delivered right to your doorstep or ready for pickup.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-[#E53935] hover:bg-[#D32F2F] text-white">
                    Order Now
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white text-[#212121] hover:bg-gray-100">
                    View Menu
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Menu Items */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Featured Menu Items</h2>
              <p className="text-[#757575]">Try our most popular and delicious options</p>
            </div>
            <div className="grid grid-cols-4 gap-8">
              {[
                {
                  name: "Classic Cheeseburger",
                  price: "$8.99",
                  image:
                    "https://img.freepik.com/free-photo/cheeseburgers-with-fry-potato-wooden-board_114579-33844.jpg?t=st=1746114953~exp=1746118553~hmac=76ca5df49673e214cc92a05e207431993022a57da0e665dc66f2fdb6594dcee3&w=996",
                  description: "Juicy beef patty with melted cheese, lettuce, tomato, and our special sauce",
                },
                {
                  name: "Spicy Chicken Wrap",
                  price: "$7.99",
                  image:
                    "https://img.freepik.com/free-photo/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table_141793-4881.jpg?t=st=1746114614~exp=1746118214~hmac=6f9c681b908dafad59796ecc0d11a95808e20e298baa87bf0aa60fd41d168657&w=996",
                  description: "Grilled spicy chicken with fresh vegetables and creamy sauce in a soft tortilla",
                },
                {
                  name: "Loaded Fries Supreme",
                  price: "$5.99",
                  image:
                    "https://img.freepik.com/free-photo/cheeseburgers-with-fry-potato-wooden-board_114579-33844.jpg?t=st=1746114953~exp=1746118553~hmac=76ca5df49673e214cc92a05e207431993022a57da0e665dc66f2fdb6594dcee3&w=996",
                  description: "Crispy fries topped with cheese, bacon bits, sour cream, and green onions",
                },
                {
                  name: "Chocolate Shake",
                  price: "$4.99",
                  image:
                    "https://img.freepik.com/free-photo/milkshake-with-whipped-cream-oreo-cookie-top_140725-3457.jpg?t=st=1746115556~exp=1746119156~hmac=ee23fcf216486e416884828f5ca586e02fd96e9a5698f2246f499db1c4af87e8&w=740",
                  description: "Rich and creamy chocolate shake topped with whipped cream and a cherry",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                    <p className="text-[#757575] text-sm mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg text-[#E53935]">{item.price}</span>
                      <Button size="sm" className="bg-[#E53935] hover:bg-[#D32F2F] text-white">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promotions Banner */}
        <section className="py-12 bg-[#FFF8E1]">
          <div className="container mx-auto px-6">
            <div className="bg-[#FF9800] rounded-xl p-8 flex items-center justify-between">
              <div>
                <h2 className="text-white text-3xl font-bold mb-2">Limited Time Offer!</h2>
                <p className="text-white text-xl mb-4">Get 20% off on family meal combos every Tuesday</p>
                <Button className="bg-white text-[#FF9800] hover:bg-gray-100">Order Now</Button>
              </div>
              <div className="hidden lg:block">
                <Image
                  src="https://img.freepik.com/free-photo/cheeseburgers-with-fry-potato-wooden-board_114579-33844.jpg?t=st=1746114953~exp=1746118553~hmac=76ca5df49673e214cc92a05e207431993022a57da0e665dc66f2fdb6594dcee3&w=996"
                  alt="Family meal combo"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Why Choose HotBite Express</h2>
              <p className="text-[#757575]">We pride ourselves on quality, speed, and taste</p>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {[
                {
                  title: "Fresh Ingredients",
                  description: "We use only the freshest ingredients sourced from local suppliers",
                  icon: "🥬",
                },
                {
                  title: "Fast Delivery",
                  description: "Our delivery team ensures your food arrives hot and fresh",
                  icon: "🚚",
                },
                {
                  title: "Great Value",
                  description: "Quality food at affordable prices with regular promotions",
                  icon: "💰",
                },
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-[#F5F5F5]">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[#757575]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  {[
                    { label: "Home", value: "home" },
                    { label: "Menu", value: "menu" },
                    { label: "About Us", value: "about" },
                    { label: "Locations", value: "locations" },
                    { label: "Order Online", value: "order" },
                    { label: "Contact Us", value: "contact" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={`#${item.value}`}
                        className="text-gray-300 hover:text-white transition-colors"
                        onClick={(e) => {
                          e.preventDefault()
                          document.querySelector(`[data-state="active"][data-value="${item.value}"]`)?.click()
                        }}
                      >
                        {item.label}
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
                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-2">Subscribe to our newsletter</h3>
                  <div className="flex">
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="bg-white text-[#212121] rounded-r-none focus-visible:ring-[#E53935]"
                    />
                    <Button className="bg-[#E53935] hover:bg-[#D32F2F] rounded-l-none">Subscribe</Button>
                  </div>
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

        {/* Hero Section */}
        <section className="relative h-[300px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000aa] to-transparent z-10"></div>
          <Image
            src="https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?t=st=1746114746~exp=1746118346~hmac=89304382073ee1e9abfa4dcae61ea4ed9052115655b185e62ad989aa8dd1203b&w=900"
            alt="Delicious burger with fries"
            width={600}
            height={300}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="px-4">
              <h1 className="text-3xl font-bold text-white mb-2">Delicious Food Delivered Fast</h1>
              <p className="text-white mb-4">Enjoy our mouth-watering menu items delivered right to your doorstep.</p>
              <Button className="bg-[#E53935] hover:bg-[#D32F2F] text-white w-full">Order Now</Button>
            </div>
          </div>
        </section>

        {/* Featured Menu Items */}
        <section className="py-8 bg-white">
          <div className="px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-1">Featured Menu Items</h2>
              <p className="text-[#757575] text-sm">Try our most popular options</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "Classic Cheeseburger",
                  price: "$8.99",
                  image:
                    "https://img.freepik.com/free-photo/cheeseburgers-with-fry-potato-wooden-board_114579-33844.jpg?t=st=1746114953~exp=1746118553~hmac=76ca5df49673e214cc92a05e207431993022a57da0e665dc66f2fdb6594dcee3&w=996",
                  description: "Juicy beef patty with melted cheese and our special sauce",
                },
                {
                  name: "Spicy Chicken Wrap",
                  price: "$7.99",
                  image:
                    "https://img.freepik.com/free-photo/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table_141793-4881.jpg?t=st=1746114614~exp=1746118214~hmac=6f9c681b908dafad59796ecc0d11a95808e20e298baa87bf0aa60fd41d168657&w=996",
                  description: "Grilled spicy chicken with fresh vegetables in a soft tortilla",
                },
                {
                  name: "Loaded Fries Supreme",
                  price: "$5.99",
                  image:
                    "https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?t=st=1746114746~exp=1746118346~hmac=89304382073ee1e9abfa4dcae61ea4ed9052115655b185e62ad989aa8dd1203b&w=900",
                  description: "Crispy fries topped with cheese, bacon bits, and sour cream",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow flex overflow-hidden">
                  <div className="w-24 h-24">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex-1">
                    <h3 className="font-bold text-base">{item.name}</h3>
                    <p className="text-[#757575] text-xs mb-2">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#E53935]">{item.price}</span>
                      <Button size="sm" className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs h-8">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" className="border-[#E53935] text-[#E53935]">
                View Full Menu
              </Button>
            </div>
          </div>
        </section>

        {/* Promotions Banner */}
        <section className="py-6 bg-[#FFF8E1]">
          <div className="px-4">
            <div className="bg-[#FF9800] rounded-lg p-4">
              <h2 className="text-white text-xl font-bold mb-1">Limited Time Offer!</h2>
              <p className="text-white text-sm mb-3">Get 20% off on family meal combos every Tuesday</p>
              <Button size="sm" className="bg-white text-[#FF9800] hover:bg-gray-100 w-full">
                Order Now
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-8 bg-white">
          <div className="px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-1">Why Choose Us</h2>
              <p className="text-[#757575] text-sm">Quality, speed, and taste</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Fresh Ingredients",
                  description: "We use only the freshest ingredients sourced from local suppliers",
                  icon: "🥬",
                },
                {
                  title: "Fast Delivery",
                  description: "Our delivery team ensures your food arrives hot and fresh",
                  icon: "🚚",
                },
                {
                  title: "Great Value",
                  description: "Quality food at affordable prices with regular promotions",
                  icon: "💰",
                },
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-[#F5F5F5] flex items-center">
                  <div className="text-3xl mr-4">{item.icon}</div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-[#757575] text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                <li className="flex items-start">
                  <Mail className="mr-2 h-4 w-4 text-[#E53935]" />
                  <span className="text-gray-300 text-sm">info@hotbiteexpress.com</span>
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

// Menu Page Mockup
export function MenuPageMockup({
  activeTab,
  setActiveTab,
}: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <div className="font-sans text-[#212121]">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Header - Same as Home */}
        <MainHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Menu Banner */}
        <div className="bg-[#263238] text-white py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-2">Our Menu</h1>
            <p className="text-gray-300">Explore our delicious offerings made with fresh ingredients</p>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="burgers" className="w-full">
              <TabsList className="w-full justify-start h-16 bg-transparent border-b">
                {[
                  { value: "burgers", label: "Burgers" },
                  { value: "chicken", label: "Chicken" },
                  { value: "sides", label: "Sides" },
                  { value: "drinks", label: "Drinks" },
                  { value: "desserts", label: "Desserts" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="data-[state=active]:border-b-2 data-[state=active]:border-[#E53935] data-[state=active]:text-[#E53935] rounded-none px-6"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Filter Options */}
              <div className="py-4 flex items-center">
                <span className="mr-4 font-medium">Filter:</span>
                <div className="flex space-x-6">
                  {[
                    { id: "vegetarian", label: "Vegetarian" },
                    { id: "gluten-free", label: "Gluten-free" },
                    { id: "spicy", label: "Spicy" },
                  ].map((filter) => (
                    <div key={filter.id} className="flex items-center">
                      <Checkbox
                        id={filter.id}
                        className="mr-2 data-[state=checked]:bg-[#E53935] data-[state=checked]:border-[#E53935]"
                      />
                      <Label htmlFor={filter.id} className="text-sm cursor-pointer">
                        {filter.label}
                      </Label>
                    </div>
                  ))}
                </div>
                <div className="ml-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Search menu items..." className="pl-10 w-64 focus-visible:ring-[#E53935]" />
                  </div>
                </div>
              </div>

              {/* Burgers Tab Content */}
              <TabsContent value="burgers" className="mt-6">
                <div className="grid grid-cols-3 gap-6">
                  {[
                    {
                      name: "Classic Cheeseburger",
                      price: "$8.99",
                      image:
                        "https://img.freepik.com/free-photo/cheeseburgers-with-fry-potato-wooden-board_114579-33844.jpg?t=st=1746114953~exp=1746118553~hmac=76ca5df49673e214cc92a05e207431993022a57da0e665dc66f2fdb6594dcee3&w=996",
                      description: "Juicy beef patty with melted cheese, lettuce, tomato, and our special sauce",
                      tags: ["Popular", "Bestseller"],
                    },
                    {
                      name: "Double Bacon Burger",
                      price: "$10.99",
                      image:
                        "https://img.freepik.com/free-photo/cheeseburgers-with-fry-potato-wooden-board_114579-33844.jpg?t=st=1746114953~exp=1746118553~hmac=76ca5df49673e214cc92a05e207431993022a57da0e665dc66f2fdb6594dcee3&w=996",
                      description: "Two beef patties with crispy bacon, cheddar cheese, and BBQ sauce",
                      tags: ["New"],
                    },
                    {
                      name: "Mushroom Swiss Burger",
                      price: "$9.99",
                      image:
                        "https://img.freepik.com/premium-photo/front-view-three-large-beef-salmon-kebab-burgers-stuffed-with-fresh-vegetable-salad-dressing_341862-10616.jpg?w=996",
                      description: "Beef patty topped with sautéed mushrooms and melted Swiss cheese",
                      tags: [],
                    },
                    {
                      name: "Veggie Burger",
                      price: "$8.49",
                      image:
                        "https://img.freepik.com/free-photo/cheeseburgers-with-fry-potato-wooden-board_114579-33844.jpg?t=st=1746114953~exp=1746118553~hmac=76ca5df49673e214cc92a05e207431993022a57da0e665dc66f2fdb6594dcee3&w=996",
                      description: "Plant-based patty with avocado, lettuce, tomato, and vegan mayo",
                      tags: ["Vegetarian"],
                    },
                    {
                      name: "BBQ Ranch Burger",
                      price: "$9.49",
                      image:
                        "https://img.freepik.com/premium-photo/front-view-three-large-beef-salmon-kebab-burgers-stuffed-with-fresh-vegetable-salad-dressing_341862-10616.jpg?w=996",
                      description: "Beef patty with onion rings, ranch dressing, and tangy BBQ sauce",
                      tags: [],
                    },
                    {
                      name: "Spicy Jalapeño Burger",
                      price: "$9.99",
                      image: "https://img.freepik.com/premium-photo/cheeseburger-with-french-fries_67473-4.jpg?w=996",
                      description: "Beef patty with pepper jack cheese, jalapeños, and spicy mayo",
                      tags: ["Spicy"],
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                        {item.tags.length > 0 && (
                          <div className="absolute top-2 left-2 flex gap-2">
                            {item.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                className={`${
                                  tag === "Popular" || tag === "Bestseller"
                                    ? "bg-[#FF9800]"
                                    : tag === "New"
                                      ? "bg-[#4CAF50]"
                                      : tag === "Spicy"
                                        ? "bg-[#E53935]"
                                        : tag === "Vegetarian"
                                          ? "bg-[#8BC34A]"
                                          : "bg-[#9E9E9E]"
                                } hover:${
                                  tag === "Popular" || tag === "Bestseller"
                                    ? "bg-[#F57C00]"
                                    : tag === "New"
                                      ? "bg-[#388E3C]"
                                      : tag === "Spicy"
                                        ? "bg-[#D32F2F]"
                                        : tag === "Vegetarian"
                                          ? "bg-[#689F38]"
                                          : "bg-[#757575]"
                                }`}
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                        <p className="text-[#757575] text-sm mb-4">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-lg text-[#E53935]">{item.price}</span>
                          <Button size="sm" className="bg-[#E53935] hover:bg-[#D32F2F] text-white">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Other tabs would have similar content structure */}
              <TabsContent value="chicken" className="mt-6">
                <div className="grid grid-cols-3 gap-6">
                  {/* Chicken menu items would go here */}
                  <div className="text-center py-12 col-span-3">
                    <p className="text-[#757575]">Switch to the "Burgers" tab to see example content</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Footer - Same as Home */}
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
                  {[
                    { label: "Home", value: "home" },
                    { label: "Menu", value: "menu" },
                    { label: "About Us", value: "about" },
                    { label: "Locations", value: "locations" },
                    { label: "Order Online", value: "order" },
                    { label: "Contact Us", value: "contact" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={`#${item.value}`}
                        className="text-gray-300 hover:text-white transition-colors"
                        onClick={(e) => {
                          e.preventDefault()
                          document.querySelector(`[data-state="active"][data-value="${item.value}"]`)?.click()
                        }}
                      >
                        {item.label}
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

        {/* Menu Banner */}
        <div className="bg-[#263238] text-white py-6">
          <div className="px-4">
            <h1 className="text-2xl font-bold mb-1">Our Menu</h1>
            <p className="text-gray-300 text-sm">Fresh ingredients, delicious meals</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 bg-white border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search menu items..." className="pl-10 w-full focus-visible:ring-[#E53935]" />
          </div>
        </div>

        {/* Menu Categories */}
        <div className="bg-white">
          <div className="px-4">
            <Tabs defaultValue="burgers" className="w-full">
              <div className="overflow-x-auto py-2">
                <TabsList className="w-max bg-transparent">
                  {[
                    { value: "burgers", label: "Burgers" },
                    { value: "chicken", label: "Chicken" },
                    { value: "sides", label: "Sides" },
                    { value: "drinks", label: "Drinks" },
                    { value: "desserts", label: "Desserts" },
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="data-[state=active]:bg-[#E53935] data-[state=active]:text-white"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Filter Button */}
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium">Filter:</span>
                <Button variant="outline" size="sm" className="text-xs h-8">
                  <span>Dietary Options</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </div>

              {/* Burgers Tab Content */}
              <TabsContent value="burgers" className="mt-4">
                <div className="space-y-4">
                  {[
                    {
                      name: "Classic Cheeseburger",
                      price: "$8.99",
                      image: "https://img.freepik.com/premium-photo/cheeseburger-with-french-fries_67473-4.jpg?w=996",
                      description: "Juicy beef patty with melted cheese, lettuce, tomato, and our special sauce",
                      tags: ["Popular"],
                    },
                    {
                      name: "Double Bacon Burger",
                      price: "$10.99",
                      image:
                        "https://img.freepik.com/premium-photo/front-view-three-large-beef-salmon-kebab-burgers-stuffed-with-fresh-vegetable-salad-dressing_341862-10616.jpg?w=996",
                      description: "Two beef patties with crispy bacon, cheddar cheese, and BBQ sauce",
                      tags: ["New"],
                    },
                    {
                      name: "Mushroom Swiss Burger",
                      price: "$9.99",
                      image:
                        "https://img.freepik.com/free-photo/cheeseburgers-with-fry-potato-wooden-board_114579-33844.jpg?t=st=1746114953~exp=1746118553~hmac=76ca5df49673e214cc92a05e207431993022a57da0e665dc66f2fdb6594dcee3&w=996",
                      description: "Beef patty topped with sautéed mushrooms and melted Swiss cheese",
                      tags: [],
                    },
                    {
                      name: "Veggie Burger",
                      price: "$8.49",
                      image:
                        "https://img.freepik.com/premium-photo/homemade-grilled-burger-with-turkey-cutlet-cheese-cheese-sauce-vegetables-wooden-board-dark-wall-close-up-selective-focus-with-copy-space_166373-1417.jpg?w=740",
                      description: "Plant-based patty with avocado, lettuce, tomato, and vegan mayo",
                      tags: ["Vegetarian"],
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow flex overflow-hidden">
                      <div className="w-24 h-24 relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                        {item.tags.length > 0 && (
                          <div className="absolute top-1 left-1">
                            <Badge
                              className={`text-xs ${
                                item.tags[0] === "Popular" || item.tags[0] === "Bestseller"
                                  ? "bg-[#FF9800]"
                                  : item.tags[0] === "New"
                                    ? "bg-[#4CAF50]"
                                    : item.tags[0] === "Spicy"
                                      ? "bg-[#E53935]"
                                      : item.tags[0] === "Vegetarian"
                                        ? "bg-[#8BC34A]"
                                        : "bg-[#9E9E9E]"
                              }`}
                            >
                              {item.tags[0]}
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-3 flex-1">
                        <h3 className="font-bold text-base">{item.name}</h3>
                        <p className="text-[#757575] text-xs mb-2 line-clamp-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[#E53935]">{item.price}</span>
                          <Button size="sm" className="bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs h-8">
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Other tabs would have similar content structure */}
              <TabsContent value="chicken" className="mt-4">
                <div className="text-center py-8">
                  <p className="text-[#757575] text-sm">Switch to the "Burgers" tab to see example content</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Footer - Simplified version of desktop footer */}
        <footer className="bg-[#263238] text-white py-8 mt-8">
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

// Order Online Page Mockup
export function OrderPageMockup({
  activeTab,
  setActiveTab,
}: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <div className="font-sans text-[#212121]">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Header - Same as Home */}
        <MainHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Order Online Content */}
        <div className="bg-[#F5F5F5] py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-3 gap-8">
              {/* Order Form */}
              <div className="col-span-2">
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h1 className="text-3xl font-bold mb-6">Order Online</h1>

                  {/* Delivery/Pickup Toggle */}
                  <div className="flex mb-8 border rounded-lg overflow-hidden">
                    <button className="flex-1 bg-[#E53935] text-white py-3 font-medium">Delivery</button>
                    <button className="flex-1 bg-white py-3 font-medium hover:bg-gray-50">Pickup</button>
                  </div>

                  {/* Address Form */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
                    <div className="space-y-4">
                      <Input placeholder="Street Address" className="focus-visible:ring-[#E53935]" />
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="City" className="focus-visible:ring-[#E53935]" />
                        <Input placeholder="Zip Code" className="focus-visible:ring-[#E53935]" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="Phone Number" className="focus-visible:ring-[#E53935]" />
                        <Input
                          placeholder="Delivery Instructions (Optional)"
                          className="focus-visible:ring-[#E53935]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Menu Selection */}
                  <div>
                    <h2 className="text-xl font-bold mb-4">Select Items</h2>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Classic Cheeseburger",
                          price: "$8.99",
                          image:
                            "https://img.freepik.com/premium-photo/cheeseburger-with-french-fries_67473-4.jpg?w=996",
                          description: "Juicy beef patty with melted cheese, lettuce, tomato, and our special sauce",
                        },
                        {
                          name: "Loaded Fries Supreme",
                          price: "$5.99",
                          image:
                            "https://img.freepik.com/premium-photo/homemade-grilled-burger-with-turkey-cutlet-cheese-cheese-sauce-vegetables-wooden-board-dark-wall-close-up-selective-focus-with-copy-space_166373-1417.jpg?w=740",
                          description: "Crispy fries topped with cheese, bacon bits, sour cream, and green onions",
                        },
                        {
                          name: "Chocolate Shake",
                          price: "$4.99",
                          image:
                            "https://img.freepik.com/free-photo/milkshake-with-whipped-cream-oreo-cookie-top_140725-3457.jpg?t=st=1746115556~exp=1746119156~hmac=ee23fcf216486e416884828f5ca586e02fd96e9a5698f2246f499db1c4af87e8&w=740",
                          description: "Rich and creamy chocolate shake topped with whipped cream and a cherry",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:border-[#E53935] transition-colors"
                        >
                          <div className="flex items-center">
                            <div className="h-20 w-20 mr-4">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="rounded-md object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                              <p className="text-[#757575] text-sm">{item.description}</p>
                              <p className="font-bold text-[#E53935] mt-1">{item.price}</p>
                            </div>
                          </div>
                          <div className="flex items-center border rounded-lg overflow-hidden">
                            <button className="h-10 w-10 bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                              <Minus className="h-4 w-4" />
                            </button>
                            <div className="h-10 w-10 flex items-center justify-center font-medium">1</div>
                            <button className="h-10 w-10 bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button variant="outline" className="border-[#E53935] text-[#E53935] w-full">
                        Add More Items
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="col-span-1">
                <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    {[
                      { name: "Classic Cheeseburger", quantity: 1, price: "$8.99" },
                      { name: "Loaded Fries Supreme", quantity: 1, price: "$5.99" },
                      { name: "Chocolate Shake", quantity: 1, price: "$4.99" },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <div>
                          <p className="font-medium">
                            {item.quantity}x {item.name}
                          </p>
                        </div>
                        <p className="font-medium">{item.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between mb-2">
                      <p className="text-[#757575]">Subtotal</p>
                      <p className="font-medium">$19.97</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="text-[#757575]">Delivery Fee</p>
                      <p className="font-medium">$2.99</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="text-[#757575]">Tax</p>
                      <p className="font-medium">$1.80</p>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-4">
                      <p>Total</p>
                      <p>$24.76</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Button className="bg-[#E53935] hover:bg-[#D32F2F] text-white w-full text-lg py-6">
                      Proceed to Checkout
                    </Button>
                    <p className="text-xs text-center text-[#757575]">
                      By placing your order, you agree to our{" "}
                      <a href="#" className="text-[#E53935] hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-[#E53935] hover:underline">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Same as Home */}
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
                  {[
                    { label: "Home", value: "home" },
                    { label: "Menu", value: "menu" },
                    { label: "About Us", value: "about" },
                    { label: "Locations", value: "locations" },
                    { label: "Order Online", value: "order" },
                    { label: "Contact Us", value: "contact" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={`#${item.value}`}
                        className="text-gray-300 hover:text-white transition-colors"
                        onClick={(e) => {
                          e.preventDefault()
                          document.querySelector(`[data-state="active"][data-value="${item.value}"]`)?.click()
                        }}
                      >
                        {item.label}
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

        {/* Order Online Content */}
        <div className="bg-[#F5F5F5] py-6">
          <div className="px-4">
            {/* Order Form */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-4">
              <h1 className="text-2xl font-bold mb-4">Order Online</h1>

              {/* Delivery/Pickup Toggle */}
              <div className="flex mb-6 border rounded-lg overflow-hidden">
                <button className="flex-1 bg-[#E53935] text-white py-2 text-sm font-medium">Delivery</button>
                <button className="flex-1 bg-white py-2 text-sm font-medium hover:bg-gray-50">Pickup</button>
              </div>

              {/* Address Form */}
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-3">Delivery Address</h2>
                <div className="space-y-3">
                  <Input placeholder="Street Address" className="focus-visible:ring-[#E53935] text-sm" />
                  <Input placeholder="City" className="focus-visible:ring-[#E53935] text-sm" />
                  <Input placeholder="Zip Code" className="focus-visible:ring-[#E53935] text-sm" />
                  <Input placeholder="Phone Number" className="focus-visible:ring-[#E53935] text-sm" />
                </div>
              </div>

              {/* Menu Selection */}
              <div>
                <h2 className="text-lg font-bold mb-3">Select Items</h2>
                <div className="space-y-3">
                  {[
                    {
                      name: "Classic Cheeseburger",
                      price: "$8.99",
                      image:
                        "https://img.freepik.com/premium-photo/homemade-grilled-burger-with-turkey-cutlet-cheese-cheese-sauce-vegetables-wooden-board-dark-wall-close-up-selective-focus-with-copy-space_166373-1417.jpg?w=740",
                    },
                    {
                      name: "Loaded Fries Supreme",
                      price: "$5.99",
                      image: "https://img.freepik.com/premium-photo/cheeseburger-with-french-fries_67473-4.jpg?w=996",
                    },
                    {
                      name: "Chocolate Shake",
                      price: "$4.99",
                      image:
                        "https://img.freepik.com/free-photo/milkshake-with-whipped-cream-oreo-cookie-top_140725-3457.jpg?t=st=1746115556~exp=1746119156~hmac=ee23fcf216486e416884828f5ca586e02fd96e9a5698f2246f499db1c4af87e8&w=740",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className="h-15 w-15 mr-3">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="rounded-md object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm">{item.name}</h3>
                          <p className="font-bold text-[#E53935] text-sm">{item.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <button className="h-8 w-8 bg-gray-100 flex items-center justify-center">
                          <Minus className="h-3 w-3" />
                        </button>
                        <div className="h-8 w-8 flex items-center justify-center font-medium text-sm">1</div>
                        <button className="h-8 w-8 bg-gray-100 flex items-center justify-center">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="border-[#E53935] text-[#E53935] w-full text-sm">
                    Add More Items
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <h2 className="text-lg font-bold mb-3">Order Summary</h2>
              <div className="space-y-2 mb-4">
                {[
                  { name: "Classic Cheeseburger", quantity: 1, price: "$8.99" },
                  { name: "Loaded Fries Supreme", quantity: 1, price: "$5.99" },
                  { name: "Chocolate Shake", quantity: 1, price: "$4.99" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <div>
                      <p>
                        {item.quantity}x {item.name}
                      </p>
                    </div>
                    <p className="font-medium">{item.price}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-3 mb-4">
                <div className="flex justify-between mb-1 text-sm">
                  <p className="text-[#757575]">Subtotal</p>
                  <p className="font-medium">$19.97</p>
                </div>
                <div className="flex justify-between mb-1 text-sm">
                  <p className="text-[#757575]">Delivery Fee</p>
                  <p className="font-medium">$2.99</p>
                </div>
                <div className="flex justify-between mb-1 text-sm">
                  <p className="text-[#757575]">Tax</p>
                  <p className="font-medium">$1.80</p>
                </div>
                <div className="flex justify-between font-bold text-base mt-3">
                  <p>Total</p>
                  <p>$24.76</p>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="bg-[#E53935] hover:bg-[#D32F2F] text-white w-full">Proceed to Checkout</Button>
                <p className="text-xs text-center text-[#757575]">
                  By placing your order, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Simplified version of desktop footer */}
        <footer className="bg-[#263238] text-white py-8 mt-6">
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

export default HomePageMockup
