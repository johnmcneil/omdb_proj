import react from 'react';
import {
	Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem
} from 'reactstrap';
import {} from 'reactstrap';

export default function({ data }) {
	return (				
		<Container>
			<Card>
				<Row>
					<Col xs="3">
						<CardImg src={data.Poster} alt="movie poster" />
					</Col>
					<Col xs="9">
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
									<ListGroupItem>{data.Plot}</ListGroupItem>
								</ListGroup>
							</CardText>
						</CardBody>
					</Col>
				</Row>
			</Card>
		</Container>
	);
}