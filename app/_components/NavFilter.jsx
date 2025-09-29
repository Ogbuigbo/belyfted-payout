const NavFilter = ({ items, activeItem, onItemClick }) => {
  return (
    <div className="flex gap-4 items-start">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemClick(item)}
          className={`md:px-6 mt-[14px] font-medium transition-all text-[12px] md:text-[16px] ${
            activeItem?.id === item.id
              ? "text-[#F39C12] border-b-2 border-[#F39C12] "
              : "text-[#0B0111] hover:text-gray-700"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default NavFilter;
