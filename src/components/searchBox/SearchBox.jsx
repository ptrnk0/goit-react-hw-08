import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";
import { changeFilter } from "../../redux/filter/slice";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleInput = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <fieldset className="fieldset w-full md:w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Search contacts by name</legend>
        <input
          type="text"
          placeholder="Find contacts by name"
          value={filter}
          onInput={(evt) => handleInput(evt.target.value.trim())}
          className="input w-full"
        />
      </fieldset>
    </div>
  );
};

export default SearchBox;
