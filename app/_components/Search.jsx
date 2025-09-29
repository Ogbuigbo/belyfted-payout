import SearchIcon from "../../public/assets/icons/SearchIcon";

const Search = ({
  placeholder = "Search",
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className="relative border border-[#C8C6C9] py-[12px] pl-2 pr-4 rounded md:w-[161px] w-full flex items-center text-sm  justify-between bg-white">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg outline-none  placeholder:text-[#777779] ${className}`}
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
