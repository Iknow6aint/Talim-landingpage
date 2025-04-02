const Header = () => {
  return (
    <header className="w-full bg-white  px-6 md:px-20 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-lg font-semibold flex items-center gap-2 text-gray-900">
        <span className="bg-[#0066CC] text-white px-2 py-1 rounded">🖥</span>
        <span>Talim</span>
      </div>

      {/* CTA Button */}
      <button className="bg-[#0066CC] text-white px-4 py-2 rounded-lg shadow-md">
        Start free trial
      </button>
    </header>
  );
};

export default Header;
