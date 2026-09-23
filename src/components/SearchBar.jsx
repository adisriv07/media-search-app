import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../Redux/features/searchSlice";


const SearchBar = () => {
  const [text, settext] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    settext(""); //after searching set it back to clear
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex p-3 bg-gradient-to-br from-[#241f24] to-[#4a4a4a]"
      >
        <input
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
          className="w-full border-2 px-4 py-1 m-2 text-2xl rounded-sm outline-none focus:border-3"
          type="text"
          placeholder="Search Here..."
          required
        />
        <button className="active:scale-95 border-2 px-4 py-1 m-2 text-2xl cursor-pointer rounded-md outline-none ">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
