import react from 'react';
import useFetch from '../hooks/useFetch';

export default function MovieInfo({ title }) {
	console.log("title searched:", title);

	const { loading, data, error } = useFetch(
		`https://www.omdbapi.com/?t=${title}&apikey=db4caf54`
	);

	if (loading) return <h4>loading...</h4>;
	if (error)
		return <pre>{JSON.stringify(error, null, 2)}</pre>;

	if (data)
		return <pre>{JSON.stringify(data, null , 2)}</pre>;
}