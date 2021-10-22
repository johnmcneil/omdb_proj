import react from 'react';
import useFetch from '../hooks/useFetch';
import MovieCard from './MovieCard';

export default function MovieInfo({ title }) {
	console.log("title searched:", title);

	const { loading, data, error } = useFetch(
		`https://www.omdbapi.com/?t=${title}&plot=full&apikey=db4caf54`
	);

	if (loading) return <h4>loading...</h4>;
	if (error)
		return <pre>{JSON.stringify(error, null, 2)}</pre>;

	console.log("data", data)
	if (data) {
		if (data.Response === "True" ) {
			return (
				<MovieCard data={data} />			
			);			
		}
		else return null;
	}


}