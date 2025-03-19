import dashboard from "@/asserts/school dashboard mockup transparent 3.png"


export default function FaqSection() {
    return (
      <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Call to Action (CTA) Section */}
          <div className="bg-[#003366] text-white rounded-lg p-12 text-center relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let’s make management super easy for you
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Join schools across West Africa to save time, reduce stress, and boost success.
            </p>
            <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Start free trial
            </button>
  
            {/* Overlapping Dashboard Image */}
            <div className="mt-8 relative">
              <img
                src= {dashboard.src}
                alt="Dashboard Preview"
                className="mx-auto shadow-lg rounded-lg"
              />
            </div>
          </div>
  
          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-orange-600">
              Questions we get a lot
            </h3>
            <div className="mt-8 space-y-4 max-w-3xl mx-auto">
              <FaqItem question="What if my teachers aren’t technology wise?" />
              <FaqItem question="What about data security?" />
              <FaqItem question="How much does it cost?" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // FAQ Item Component
  function FaqItem({ question }: { question: string }) {
    return (
      <details className="bg-white shadow-md p-4 rounded-lg cursor-pointer">
        <summary className="font-semibold text-lg text-gray-800 flex items-center justify-between">
          {question}
          <span className="text-gray-500">+</span>
        </summary>
        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </details>
    );
  }
  