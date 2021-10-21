import react from 'react';
import useFetch from '../hooks/useFetch';
import {
	Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem 
} from 'reactstrap';

export default function MovieInfo({ title }) {
	console.log("title searched:", title);

	const { loading, data, error } = useFetch(
		`https://www.omdbapi.com/?t=${title}&apikey=db4caf54`
	);

	if (loading) return <h4>loading...</h4>;
	if (error)
		return <pre>{JSON.stringify(error, null, 2)}</pre>;

	if (data)
		return (
			<div>
				<Card>
					<CardBody>
						<CardTitle tag="h5">{data.Title}</CardTitle>
						<CardSubtitle tag="h6" className="mb-2 text-muted">{data.Year}</CardSubtitle>
						<CardText>
							<ListGroup>
								<ListGroupItem>Starring: {data.Actors}</ListGroupItem>
								<ListGroupItem>Genre: {data.Genre}</ListGroupItem>
								<ListGroupItem>Director: {data.Director}</ListGroupItem>
								<ListGroupItem>Rated: {data.Rated}</ListGroupItem>
								<ListGroupItem>Country: {data.Country}</ListGroupItem>
								<ListGroupItem>Runtime: {data.Runtime}</ListGroupItem>
							</ListGroup>
						</CardText>
					</CardBody>
					<CardImg src={data.Poster} alt="movie poster" />
				</Card>
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</div>
			
		);
}