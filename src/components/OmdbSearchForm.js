import react from 'react';
import useInput from '../hooks/useInput';

export default function OmdbSearchForm({ onSearch = f => f }) {
	const [titleProps, resetTitle] = useInput("");

	const submit = e => {
		e.preventDefault();

		onSearch(titleProps.value);
	}

	return (
		<form onSubmit={submit}>
			<label>Title:
				<input {...titleProps} type="text" name="title" placeholder="movie title" required />
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
}