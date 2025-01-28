import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filterSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
	const filter = useSelector(selectFilter);
	const dispatch = useDispatch();

	const handleInput = (value) => {
		dispatch(changeFilter(value));
	};

	return (
		<input
			className={css.searchInput}
			type="text"
			placeholder="Find contacts by name"
			value={filter}
			onInput={(evt) => handleInput(evt.target.value.trim())}
		/>
	);
};

export default SearchBox;
