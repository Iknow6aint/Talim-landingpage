import Image from "next/image";
import dashboard from "@/asserts/school dashboard mockup transparent 3.png"; // Ensure correct path

export default function FaqSection() {
  return (
    <section className="bg-gray-100 pb-16 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* CTA Section */}
        <div className="relative bg-[#003366] text-white rounded-xl px-6 py-10 text-center">
          <h2 className="text-xl sm:text-2xl font-bold leading-tight">
            Let’s make management <br /> super easy for you
          </h2>
          <p className="mt-2 text-sm sm:text-base max-w-lg mx-auto">
            Join schools across West Africa to save time, reduce stress, and boost success.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            🚀 Start free trial
          </button>

          {/* Overlapping Image */}
          <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[60%]">
            <Image
              src={dashboard}
              alt="Dashboard Preview"
              className="mx-auto shadow-lg rounded-lg"
              priority
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-orange-600">
            Questions we get a lot
          </h3>
          <div className="mt-6 space-y-4 max-w-3xl mx-auto">
            <FaqItem question="🔧 What if my teachers aren’t technology wise?" />
            <FaqItem question="🛡️ What about data security?" />
            <FaqItem question="💰 How much does it cost?" />
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
function FaqItem({ question }: { question: string }) {
  return (
    <details className="bg-white shadow-md p-4 rounded-lg cursor-pointer transition-all">
      <summary className="font-semibold text-lg text-gray-800 flex items-center justify-between">
        {question}
        <span className="text-gray-500">+</span>
      </summary>
      <p className="mt-2 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </details>
  );
}
