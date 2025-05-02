export default function MainFooter() {
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
