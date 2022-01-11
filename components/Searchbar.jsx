import { FiSearch } from "react-icons/fi";
const Searchbar = () => {
  return (
    <div className="h-10 flex items-center bg-white rounded-full px-4 shadow-lg hover:shadow-sm w-full grow">
      <input
        className="focus:outline-0 grow"
        type="text"
        placeholder="Search from millions of books..."
        name=""
        id=""
      />
      <FiSearch className="text-subtitle" />
    </div>
  );
};

export default Searchbar;
