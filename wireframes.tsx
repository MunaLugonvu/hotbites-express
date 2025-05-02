// Home Page Wireframe
export function HomePageWireframe() {
  return (
    <div className="font-sans">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Header */}
        <header className="border-b border-gray-300 p-4 flex justify-between items-center">
          <div className="h-10 w-40 bg-gray-400 rounded flex items-center justify-center text-white font-bold">
            LOGO
          </div>
          <nav className="flex space-x-6">
            {["Menu", "About Us", "Locations", "Order Online", "Contact Us"].map((item) => (
              <div key={item} className="h-8 px-3 flex items-center justify-center bg-gray-200 rounded">
                {item}
              </div>
            ))}
          </nav>
        </header>

        {/* Hero Section */}
        <section className="p-6 flex flex-col items-center">
          <div className="h-80 w-full bg-gray-300 rounded-lg flex items-center justify-center mb-6">
            <span className="text-gray-600">Large Food Image</span>
          </div>
          <button className="bg-gray-800 text-white px-10 py-4 rounded-lg text-xl font-bold">ORDER NOW</button>
        </section>

        {/* Featured Menu Items */}
        <section className="p-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-center">Featured Menu Items</h2>
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg shadow">
                <div className="h-40 bg-gray-300 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-gray-600">Food Image</span>
                </div>
                <div className="h-6 w-3/4 bg-gray-400 rounded mb-2"></div>
                <div className="h-5 w-1/4 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Promotions Banner */}
        <section className="p-6">
          <div className="h-40 w-full bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 text-xl">Current Promotions Banner</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-200 p-6">
          <div className="flex justify-between">
            <div className="space-y-3">
              <div className="h-6 w-40 bg-gray-400 rounded"></div>
              <div className="h-4 w-60 bg-gray-300 rounded"></div>
              <div className="h-4 w-52 bg-gray-300 rounded"></div>
            </div>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-10 w-10 bg-gray-400 rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-300 flex justify-between">
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
          </div>
        </footer>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        {/* Header */}
        <header className="border-b border-gray-300 p-4 flex justify-between items-center">
          <div className="h-8 w-32 bg-gray-400 rounded flex items-center justify-center text-white font-bold">LOGO</div>
          <div className="h-8 w-8 bg-gray-300 rounded flex items-center justify-center">≡</div>
        </header>

        {/* Hero Section */}
        <section className="p-4 flex flex-col items-center">
          <div className="h-48 w-full bg-gray-300 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-600">Food Image</span>
          </div>
          <button className="bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-bold w-full">ORDER NOW</button>
        </section>

        {/* Featured Menu Items */}
        <section className="p-4 bg-gray-100">
          <h2 className="text-xl font-bold mb-4">Featured Menu Items</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-3 rounded-lg shadow flex">
                <div className="h-24 w-24 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-xs">Image</span>
                </div>
                <div className="ml-3 flex-1">
                  <div className="h-5 w-3/4 bg-gray-400 rounded mb-2"></div>
                  <div className="h-4 w-1/4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-8 w-full bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Promotions Banner */}
        <section className="p-4">
          <div className="h-32 w-full bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Promotions</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-200 p-4">
          <div className="flex justify-center space-x-4 mb-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-8 w-8 bg-gray-400 rounded-full"></div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// Menu Page Wireframe
export function MenuPageWireframe() {
  return (
    <div className="font-sans">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Header (same as home) */}
        <header className="border-b border-gray-300 p-4 flex justify-between items-center">
          <div className="h-10 w-40 bg-gray-400 rounded flex items-center justify-center text-white font-bold">
            LOGO
          </div>
          <nav className="flex space-x-6">
            {["Menu", "About Us", "Locations", "Order Online", "Contact Us"].map((item) => (
              <div
                key={item}
                className={`h-8 px-3 flex items-center justify-center ${item === "Menu" ? "bg-gray-800 text-white" : "bg-gray-200"} rounded`}
              >
                {item}
              </div>
            ))}
          </nav>
        </header>

        {/* Category Tabs */}
        <div className="p-6">
          <div className="flex border-b border-gray-300">
            {["Burgers", "Sides", "Drinks", "Desserts"].map((category, index) => (
              <div key={category} className={`px-6 py-3 ${index === 0 ? "border-b-2 border-gray-800" : ""}`}>
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Filter Options */}
        <div className="px-6 mb-6 flex items-center">
          <span className="mr-4">Filter:</span>
          <div className="flex space-x-3">
            <div className="flex items-center">
              <div className="h-5 w-5 border border-gray-400 rounded mr-2"></div>
              <span>Vegetarian</span>
            </div>
            <div className="flex items-center">
              <div className="h-5 w-5 border border-gray-400 rounded mr-2"></div>
              <span>Gluten-free</span>
            </div>
            <div className="flex items-center">
              <div className="h-5 w-5 border border-gray-400 rounded mr-2"></div>
              <span>Spicy</span>
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <div className="h-40 bg-gray-300 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-gray-600">Food Image</span>
                </div>
                <div className="h-6 w-3/4 bg-gray-400 rounded mb-2"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-3"></div>
                <div className="flex justify-between items-center">
                  <div className="h-5 w-1/4 bg-gray-300 rounded"></div>
                  <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer (same as home) */}
        <footer className="bg-gray-200 p-6">
          <div className="flex justify-between">
            <div className="space-y-3">
              <div className="h-6 w-40 bg-gray-400 rounded"></div>
              <div className="h-4 w-60 bg-gray-300 rounded"></div>
              <div className="h-4 w-52 bg-gray-300 rounded"></div>
            </div>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-10 w-10 bg-gray-400 rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-300 flex justify-between">
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
          </div>
        </footer>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        {/* Header */}
        <header className="border-b border-gray-300 p-4 flex justify-between items-center">
          <div className="h-8 w-32 bg-gray-400 rounded flex items-center justify-center text-white font-bold">LOGO</div>
          <div className="h-8 w-8 bg-gray-300 rounded flex items-center justify-center">≡</div>
        </header>

        {/* Category Tabs - Horizontal Scroll */}
        <div className="p-4 overflow-x-auto">
          <div className="flex border-b border-gray-300 w-max">
            {["Burgers", "Sides", "Drinks", "Desserts"].map((category, index) => (
              <div
                key={category}
                className={`px-4 py-2 whitespace-nowrap ${index === 0 ? "border-b-2 border-gray-800" : ""}`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Filter Options */}
        <div className="px-4 mb-4">
          <div className="flex justify-between items-center">
            <span>Filter</span>
            <div className="h-8 w-8 bg-gray-200 rounded flex items-center justify-center">↓</div>
          </div>
        </div>

        {/* Menu List */}
        <div className="px-4 pb-4">
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow border border-gray-200 flex">
                <div className="h-24 w-24 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-xs">Image</span>
                </div>
                <div className="ml-3 flex-1">
                  <div className="h-5 w-3/4 bg-gray-400 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-5 w-1/4 bg-gray-300 rounded"></div>
                    <button className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-200 p-4">
          <div className="flex justify-center space-x-4 mb-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-8 w-8 bg-gray-400 rounded-full"></div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// Order Online Page Wireframe
export function OrderPageWireframe() {
  return (
    <div className="font-sans">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Header (same as home) */}
        <header className="border-b border-gray-300 p-4 flex justify-between items-center">
          <div className="h-10 w-40 bg-gray-400 rounded flex items-center justify-center text-white font-bold">
            LOGO
          </div>
          <nav className="flex space-x-6">
            {["Menu", "About Us", "Locations", "Order Online", "Contact Us"].map((item) => (
              <div
                key={item}
                className={`h-8 px-3 flex items-center justify-center ${item === "Order Online" ? "bg-gray-800 text-white" : "bg-gray-200"} rounded`}
              >
                {item}
              </div>
            ))}
          </nav>
        </header>

        {/* Order Form and Cart */}
        <div className="p-6 grid grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Order Online</h2>

            {/* Delivery/Pickup Toggle */}
            <div className="flex mb-6 border rounded-lg overflow-hidden">
              <div className="flex-1 bg-gray-800 text-white p-3 text-center">Delivery</div>
              <div className="flex-1 bg-white p-3 text-center">Pickup</div>
            </div>

            {/* Address Form */}
            <div className="mb-6 space-y-4">
              <div className="h-10 w-full bg-gray-100 rounded"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-10 bg-gray-100 rounded"></div>
                <div className="h-10 bg-gray-100 rounded"></div>
              </div>
              <div className="h-10 w-full bg-gray-100 rounded"></div>
            </div>

            {/* Menu Selection */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Select Items</h3>
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="h-16 w-16 bg-gray-300 rounded-lg mr-3"></div>
                      <div>
                        <div className="h-5 w-32 bg-gray-400 rounded mb-1"></div>
                        <div className="h-4 w-20 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <div className="h-8 w-8 bg-gray-100 flex items-center justify-center">-</div>
                        <div className="h-8 w-8 flex items-center justify-center">1</div>
                        <div className="h-8 w-8 bg-gray-100 flex items-center justify-center">+</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="col-span-1">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200 sticky top-6">
              <h3 className="text-xl font-bold mb-4">Your Order</h3>
              <div className="space-y-3 mb-6">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <div className="h-5 w-32 bg-gray-400 rounded mb-1"></div>
                      <div className="h-4 w-16 bg-gray-300 rounded"></div>
                    </div>
                    <div className="h-5 w-16 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <div className="h-5 w-20 bg-gray-300 rounded"></div>
                  <div className="h-5 w-16 bg-gray-300 rounded"></div>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="h-5 w-24 bg-gray-300 rounded"></div>
                  <div className="h-5 w-16 bg-gray-300 rounded"></div>
                </div>
                <div className="flex justify-between font-bold">
                  <div className="h-6 w-20 bg-gray-400 rounded"></div>
                  <div className="h-6 w-20 bg-gray-400 rounded"></div>
                </div>
              </div>
              <button className="bg-gray-800 text-white py-3 rounded-lg text-lg font-bold w-full">CHECKOUT</button>
            </div>
          </div>
        </div>

        {/* Footer (same as home) */}
        <footer className="bg-gray-200 p-6">
          <div className="flex justify-between">
            <div className="space-y-3">
              <div className="h-6 w-40 bg-gray-400 rounded"></div>
              <div className="h-4 w-60 bg-gray-300 rounded"></div>
              <div className="h-4 w-52 bg-gray-300 rounded"></div>
            </div>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-10 w-10 bg-gray-400 rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-300 flex justify-between">
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
          </div>
        </footer>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        {/* Header */}
        <header className="border-b border-gray-300 p-4 flex justify-between items-center">
          <div className="h-8 w-32 bg-gray-400 rounded flex items-center justify-center text-white font-bold">LOGO</div>
          <div className="h-8 w-8 bg-gray-300 rounded flex items-center justify-center">≡</div>
        </header>

        {/* Order Form */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Order Online</h2>

          {/* Delivery/Pickup Toggle */}
          <div className="flex mb-4 border rounded-lg overflow-hidden">
            <div className="flex-1 bg-gray-800 text-white p-2 text-center text-sm">Delivery</div>
            <div className="flex-1 bg-white p-2 text-center text-sm">Pickup</div>
          </div>

          {/* Address Form */}
          <div className="mb-4 space-y-3">
            <div className="h-10 w-full bg-gray-100 rounded"></div>
            <div className="h-10 w-full bg-gray-100 rounded"></div>
            <div className="h-10 w-full bg-gray-100 rounded"></div>
          </div>

          {/* Menu Selection */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-3">Select Items</h3>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex justify-between items-center p-2 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-gray-300 rounded-lg mr-2"></div>
                    <div>
                      <div className="h-4 w-24 bg-gray-400 rounded mb-1"></div>
                      <div className="h-3 w-16 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <div className="h-6 w-6 bg-gray-100 flex items-center justify-center text-xs">-</div>
                      <div className="h-6 w-6 flex items-center justify-center text-xs">1</div>
                      <div className="h-6 w-6 bg-gray-100 flex items-center justify-center text-xs">+</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-4">
            <h3 className="text-lg font-bold mb-3">Your Order</h3>
            <div className="space-y-2 mb-4">
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <div className="h-4 w-24 bg-gray-400 rounded mb-1"></div>
                    <div className="h-3 w-12 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-4 w-12 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-3 mb-4">
              <div className="flex justify-between mb-2">
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                <div className="h-4 w-12 bg-gray-300 rounded"></div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
                <div className="h-4 w-12 bg-gray-300 rounded"></div>
              </div>
              <div className="flex justify-between font-bold">
                <div className="h-5 w-16 bg-gray-400 rounded"></div>
                <div className="h-5 w-16 bg-gray-400 rounded"></div>
              </div>
            </div>
            <button className="bg-gray-800 text-white py-2 rounded-lg text-base font-bold w-full">CHECKOUT</button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-200 p-4">
          <div className="flex justify-center space-x-4 mb-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-8 w-8 bg-gray-400 rounded-full"></div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// About Us Page Wireframe
export function AboutPageWireframe() {
  return (
    <div className="font-sans">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Header (same as home) */}
        <header className="border-b border-gray-300 p-4 flex justify-between items-center">
          <div className="h-10 w-40 bg-gray-400 rounded flex items-center justify-center text-white font-bold">
            LOGO
          </div>
          <nav className="flex space-x-6">
            {["Menu", "About Us", "Locations", "Order Online", "Contact Us"].map((item) => (
              <div
                key={item}
                className={`h-8 px-3 flex items-center justify-center ${item === "About Us" ? "bg-gray-800 text-white" : "bg-gray-200"} rounded`}
              >
                {item}
              </div>
            ))}
          </nav>
        </header>

        {/* About Us Content */}
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-8 text-center">About HotBite Express</h1>

          {/* Company Story */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Restaurant Image</span>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Team</h2>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="text-center">
                  <div className="h-40 w-40 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-600">Photo</span>
                  </div>
                  <div className="h-6 w-32 bg-gray-400 rounded mx-auto mb-2"></div>
                  <div className="h-4 w-24 bg-gray-300 rounded mx-auto"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Join Our Team */}
          <section className="bg-gray-100 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <div className="space-y-4">
              <div className="h-4 w-3/4 bg-gray-300 rounded mx-auto"></div>
              <div className="h-4 w-2/3 bg-gray-300 rounded mx-auto"></div>
            </div>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-bold mt-6">
              JOIN OUR TEAM
            </button>
          </section>
        </div>

        {/* Footer (same as home) */}
        <footer className="bg-gray-200 p-6">
          <div className="flex justify-between">
            <div className="space-y-3">
              <div className="h-6 w-40 bg-gray-400 rounded"></div>
              <div className="h-4 w-60 bg-gray-300 rounded"></div>
              <div className="h-4 w-52 bg-gray-300 rounded"></div>
            </div>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-10 w-10 bg-gray-400 rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-300 flex justify-between">
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
          </div>
        </footer>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        {/* Header */}
        <header className="border-b border-gray-300 p-4 flex justify-between items-center">
          <div className="h-8 w-32 bg-gray-400 rounded flex items-center justify-center text-white font-bold">LOGO</div>
          <div className="h-8 w-8 bg-gray-300 rounded flex items-center justify-center">≡</div>
        </header>

        {/* About Us Content */}
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-6 text-center">About HotBite Express</h1>

          {/* Company Story */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">Our Story</h2>
            <div className="space-y-4">
              <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Restaurant Image</span>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Our Team</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center">
                  <div className="h-20 w-20 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-gray-600 text-xs">Photo</span>
                  </div>
                  <div>
                    <div className="h-5 w-32 bg-gray-400 rounded mb-2"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Join Our Team */}
          <section className="bg-gray-100 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-3">Join Our Team</h2>
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded mx-auto"></div>
            </div>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg text-base font-bold mt-4 w-full">
              JOIN OUR TEAM
            </button>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-200 p-4 mt-6">
          <div className="flex justify-center space-x-4 mb-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-8 w-8 bg-gray-400 rounded-full"></div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// Locations Page Wireframe
export function LocationsPageWireframe() {
  return (
    <div className="font-sans">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Header (same as home) */}
        <header className="border-b border-gray-300 p-4 flex justify-between items-center">
          <div className="h-10 w-40 bg-gray-400 rounded flex items-center justify-center text-white font-bold">
            LOGO
          </div>
          <nav className="flex space-x-6">
            {["Menu", "About Us", "Locations", "Order Online", "Contact Us"].map((item) => (
              <div
                key={item}
                className={`h-8 px-3 flex items-center justify-center ${item === "Locations" ? "bg-gray-800 text-white" : "bg-gray-200"} rounded`}
              >
                {item}
              </div>
            ))}
          </nav>
        </header>

        {/* Locations Content */}
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-8 text-center">Our Locations</h1>

          {/* Map */}
          <div className="h-96 bg-gray-300 rounded-lg mb-12 flex items-center justify-center">
            <span className="text-gray-600 text-xl">Map with Location Markers</span>
          </div>

          {/* Locations List */}
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Location {item}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="h-6 w-6 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                    <div className="space-y-1">
                      <div className="h-4 w-full bg-gray-300 rounded"></div>
                      <div className="h-4 w-4/5 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                    <div className="space-y-1">
                      <div className="h-4 w-full bg-gray-300 rounded"></div>
                      <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
                <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm w-full">GET DIRECTIONS</button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer (same as home) */}
        <footer className="bg-gray-200 p-6 mt-12">
          <div className="flex justify-between">
            <div className="space-y-3">
              <div className="h-6 w-40 bg-gray-400 rounded"></div>
              <div className="h-4 w-60 bg-gray-300 rounded"></div>
              <div className="h-4 w-52 bg-gray-300 rounded"></div>
            </div>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-10 w-10 bg-gray-400 rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-300 flex justify-between">
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
          </div>
        </footer>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        {/* Header */}
        <header className="border-b border-gray-300 p-4 flex justify-between items-center">
          <div className="h-8 w-32 bg-gray-400 rounded flex items-center justify-center text-white font-bold">LOGO</div>
          <div className="h-8 w-8 bg-gray-300 rounded flex items-center justify-center">≡</div>
        </header>

        {/* Locations Content */}
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-6 text-center">Our Locations</h1>

          {/* Map */}
          <div className="h-48 bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
            <span className="text-gray-600">Map</span>
          </div>

          {/* Locations List */}
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <h3 className="text-lg font-bold mb-3">Location {item}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <div className="h-5 w-5 bg-gray-300 rounded-full mr-2 flex-shrink-0"></div>
                    <div className="space-y-1">
                      <div className="h-4 w-full bg-gray-300 rounded"></div>
                      <div className="h-4 w-4/5 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-5 w-5 bg-gray-300 rounded-full mr-2 flex-shrink-0"></div>
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-5 w-5 bg-gray-300 rounded-full mr-2 flex-shrink-0"></div>
                    <div className="space-y-1">
                      <div className="h-4 w-full bg-gray-300 rounded"></div>
                      <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
                <button className="bg-gray-800 text-white px-3 py-2 rounded text-sm w-full">GET DIRECTIONS</button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-200 p-4 mt-6">
          <div className="flex justify-center space-x-4 mb-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-8 w-8 bg-gray-400 rounded-full"></div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// Contact Us Page Wireframe
export function ContactPageWireframe() {
  return (
    <div className="font-sans">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Header (same as home) */}
        <header className="border-b border-gray-300 p-4 flex justify-between items-center">
          <div className="h-10 w-40 bg-gray-400 rounded flex items-center justify-center text-white font-bold">
            LOGO
          </div>
          <nav className="flex space-x-6">
            {["Menu", "About Us", "Locations", "Order Online", "Contact Us"].map((item) => (
              <div
                key={item}
                className={`h-8 px-3 flex items-center justify-center ${item === "Contact Us" ? "bg-gray-800 text-white" : "bg-gray-200"} rounded`}
              >
                {item}
              </div>
            ))}
          </nav>
        </header>

        {/* Contact Us Content */}
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

          <div className="grid grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <div className="h-5 w-20 bg-gray-400 rounded"></div>
                  <div className="h-10 w-full bg-gray-100 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-5 w-20 bg-gray-400 rounded"></div>
                  <div className="h-10 w-full bg-gray-100 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-5 w-32 bg-gray-400 rounded"></div>
                  <div className="h-10 w-full bg-gray-100 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-5 w-24 bg-gray-400 rounded"></div>
                  <div className="h-32 w-full bg-gray-100 rounded"></div>
                </div>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-bold">SEND MESSAGE</button>
              </form>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="h-6 w-3/4 bg-gray-400 rounded"></div>
                      <div className="h-6 w-6 bg-gray-300 rounded-full flex items-center justify-center">+</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-200 rounded"></div>
                      <div className="h-4 w-full bg-gray-200 rounded"></div>
                      <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="h-6 w-6 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                    <div className="h-5 w-48 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                    <div className="h-5 w-32 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                    <div className="h-5 w-40 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer (same as home) */}
        <footer className="bg-gray-200 p-6 mt-12">
          <div className="flex justify-between">
            <div className="space-y-3">
              <div className="h-6 w-40 bg-gray-400 rounded"></div>
              <div className="h-4 w-60 bg-gray-300 rounded"></div>
              <div className="h-4 w-52 bg-gray-300 rounded"></div>
            </div>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-10 w-10 bg-gray-400 rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-300 flex justify-between">
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
          </div>
        </footer>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        {/* Header */}
        <header className="border-b border-gray-300 p-4 flex justify-between items-center">
          <div className="h-8 w-32 bg-gray-400 rounded flex items-center justify-center text-white font-bold">LOGO</div>
          <div className="h-8 w-8 bg-gray-300 rounded flex items-center justify-center">≡</div>
        </header>

        {/* Contact Us Content */}
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>

          {/* Contact Form */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
            <form className="space-y-3">
              <div className="space-y-1">
                <div className="h-4 w-16 bg-gray-400 rounded"></div>
                <div className="h-10 w-full bg-gray-100 rounded"></div>
              </div>
              <div className="space-y-1">
                <div className="h-4 w-16 bg-gray-400 rounded"></div>
                <div className="h-10 w-full bg-gray-100 rounded"></div>
              </div>
              <div className="space-y-1">
                <div className="h-4 w-24 bg-gray-400 rounded"></div>
                <div className="h-10 w-full bg-gray-100 rounded"></div>
              </div>
              <div className="space-y-1">
                <div className="h-4 w-20 bg-gray-400 rounded"></div>
                <div className="h-28 w-full bg-gray-100 rounded"></div>
              </div>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-base font-bold w-full">
                SEND MESSAGE
              </button>
            </form>
          </section>

          {/* FAQ Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <div className="h-5 w-3/4 bg-gray-400 rounded"></div>
                    <div className="h-5 w-5 bg-gray-300 rounded-full flex items-center justify-center">+</div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-3 w-full bg-gray-200 rounded"></div>
                    <div className="h-3 w-full bg-gray-200 rounded"></div>
                    <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Info */}
          <section>
            <h3 className="text-lg font-bold mb-3">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="h-5 w-5 bg-gray-300 rounded-full mr-2 flex-shrink-0"></div>
                <div className="h-4 w-48 bg-gray-300 rounded"></div>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 bg-gray-300 rounded-full mr-2 flex-shrink-0"></div>
                <div className="h-4 w-32 bg-gray-300 rounded"></div>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 bg-gray-300 rounded-full mr-2 flex-shrink-0"></div>
                <div className="h-4 w-40 bg-gray-300 rounded"></div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-200 p-4 mt-6">
          <div className="flex justify-center space-x-4 mb-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-8 w-8 bg-gray-400 rounded-full"></div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// Main App Component
export default function WireframeApp() {
  return (
    <div className="font-sans">
      <h1 className="text-2xl font-bold p-4 border-b">HotBite Express - Wireframes</h1>

      <div className="p-4 space-y-4">
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-3 font-bold border-b">Home Page</div>
          <div className="p-4">
            <HomePageWireframe />
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-3 font-bold border-b">Menu Page</div>
          <div className="p-4">
            <MenuPageWireframe />
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-3 font-bold border-b">Order Online Page</div>
          <div className="p-4">
            <OrderPageWireframe />
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-3 font-bold border-b">About Us Page</div>
          <div className="p-4">
            <AboutPageWireframe />
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-3 font-bold border-b">Locations Page</div>
          <div className="p-4">
            <LocationsPageWireframe />
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-3 font-bold border-b">Contact Us Page</div>
          <div className="p-4">
            <ContactPageWireframe />
          </div>
        </div>
      </div>
    </div>
  )
}
