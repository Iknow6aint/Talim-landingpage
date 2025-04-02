export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div className="bg-[#0066CC] text-white p-8 rounded-2xl shadow-lg max-w-md">
          <h2 className="text-2xl font-bold leading-tight">
            Bringing Africa’s Education Online
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            We help West African schools manage classes, follow curriculum, aand keep parents updated.
          </p>
          <a href="#" className="inline-block mt-4 text-white font-medium underline">
            Get Started →
          </a>
        </div>

        {/* Right Section */}
        <div className="bg-[#E8F1FC] rounded-2xl p-8 shadow-lg flex flex-col justify-between">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-gray-800">
            {/* Product Links */}
            <div>
              <h4 className="text-sm font-bold text-gray-900">Product</h4>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Watch Demo</a></li>
              </ul>
            </div>

            {/* Community Links */}
            <div>
              <h4 className="text-sm font-bold text-gray-900">Community</h4>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Help Center</a></li>
              </ul>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-end mt-6">
            <div className="flex items-center space-x-2">
              <div className="bg-[#0066CC] p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-6-6l6 6 6-6M6 9l6-6 6 6" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-[#0066CC]">Talim</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:underline">Terms of Use</a>
        </div>
        <p className="mt-4 md:mt-0">© 2025 TALIM</p>
      </div>
    </footer>
  );
}
