import react from 'react';
import useInput from '../hooks/useInput';

export default function OmdbSearchForm({ onSearch = f => f }) {
	const [titleProps, resetTitle] = useInput("");

	const submit = e => {
		e.preventDefault();

		onSearch(titleProps.value);
	}

	console.log("titleProps", titleProps);

	return (
		<form onSubmit={submit}>
			<label>Title:
				<input {...titleProps} type="text" name="title" placeholder="movie title" value={titleProps.value} required />
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
}