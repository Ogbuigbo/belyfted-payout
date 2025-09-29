const Sidebar = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-[-30px] bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-[-25px] right-0 h-screen md:w-[428px] w-[90vw] max-w-[400px] bg-white shadow-lg transform transition-transform duration-300 overflow-auto ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between mt-8 items-center p-6">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.75 7.25L7.25 21.75M7.25 7.25L21.75 21.75"
                stroke="#042656"
                stroke-width="2.41667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Content with scrolling */}
        <div className="p-6  overflow-y-auto">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
