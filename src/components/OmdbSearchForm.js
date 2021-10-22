import react from 'react';
import useInput from '../hooks/useInput';
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

export default function OmdbSearchForm({ onSearch = f => f }) {
	const [titleProps, resetTitle] = useInput("");

	const submit = e => {
		e.preventDefault();

		onSearch(titleProps.value);
	}

	return (
		<Container className="my-3">
			<Form onSubmit={submit}>		
				<FormGroup row>
					<Col xs={4}>
						<Input {...titleProps} id="title" type="text" name="title"  placeholder="Movie Title" required />
					</Col>
					<Col sm={1}>
						<Button >Submit</Button>
					</Col>
				</FormGroup>
			</Form>
		</Container>
	);
}