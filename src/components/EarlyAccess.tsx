export default function EarlyAccess() {
    return (
      <section className="bg-[#EAB89F] py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#003366]">
            Get Early Access to Africa’s Digital Academic Ecosystem
          </h2>
          <p className="mt-4 text-lg text-[#003366]">
            Join West African schools using Talim to manage classes, connect with parents, and teach local curricula in their everyday life.
          </p>
  
          {/* Form Container */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 mt-8 max-w-3xl mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Full name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#003366] outline-none"
                  />
                </div>
  
                {/* Email Address */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">What's your email address?</label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#003366] outline-none"
                  />
                </div>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* School Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">What's the name of your school?</label>
                  <input
                    type="text"
                    placeholder="School name"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#003366] outline-none"
                  />
                </div>
  
                {/* School Location */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Where’s the school located?</label>
                  <input
                    type="text"
                    placeholder="School location"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#003366] outline-none"
                  />
                </div>
              </div>
  
              {/* Subscribe Checkbox */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="subscribe" className="w-5 h-5 text-[#003366] focus:ring-[#003366]" />
                <label htmlFor="subscribe" className="text-gray-700 font-semibold">
                  Subscribe to updates
                </label>
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#003366] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#002244] transition"
              >
                Get started
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  