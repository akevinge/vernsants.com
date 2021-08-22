import { FC, useState } from "react";
import { SearchIcon } from "icons/SearchIcon";

export const SearchAutoComplete: FC = () => {
  const placeholderResults = ["test1", "test2", "test3", "test4"];
  const [displayAc, setDisplayAc] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="h-full bg-gray-50 flex items-center relative">
      <input
        type="text"
        className="w-full outline-none ml-3 text-sm placeholder-gray-600"
        placeholder="Search by species or genus"
        onChange={(e) => {
          setDisplayAc(e.target.value !== "");
          setQuery(e.target.value);
        }}
        value={query}
        onFocus={(e) => {
          setDisplayAc(e.target.value !== "");
        }}
        onBlur={() => setDisplayAc(false)}
      />
      <SearchIcon customTwClass="ml-auto mr-3" />
      <ul className="list-none absolute w-full h-auto top-full transition-all">
        {displayAc &&
          placeholderResults.map((x) => (
            <li key={x} className="w-full h-10 bg-gray-50 flex items-center">
              <span className="ml-2">{x}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
