const Hero = () => {
  return (
    <section className="container  relative h-screen flex items-center justify-center text-center  text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover border-9 rounded-2xl"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/header.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 container">
        <h1 className="text-3xl md:text-5xl font-bold">
          Bringing Africa’s Education Online
        </h1>
        <p className="mt-4 text-lg">
          We help West African schools manage classes, follow curriculum, and keep parents updated.
        </p>
        <button className="mt-6 bg-[#0066CC] text-white px-6 py-3 rounded-lg shadow-md">
          Start free trial
        </button>
      </div>
    </section>
  );
};

export default Hero;
