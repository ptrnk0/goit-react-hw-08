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
		<input
			type="text"
			placeholder="Find contacts by name"
			value={filter}
			onInput={(evt) => handleInput(evt.target.value.trim())}
		/>
	);
};

export default SearchBox;
