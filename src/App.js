import react, { useState } from 'react';
import './App.css';
import OmdbSearchForm from './components/OmdbSearchForm';
import MovieInfo from './components/MovieInfo';
import { Container, Jumbotron } from 'reactstrap';

function App() {
  const [title, setTitle] = useState("");

  const search = (title) => {
    setTitle(title);
  }

  return (
    <>
      <Container className="mb-3"> 
        <Jumbotron>
          <h1 className="display-3">Movie Search Tool</h1>
          <p className="lead">Search the <a href="https://www.omdbapi.com/">Open Movie Database API</a></p>
          <hr className="my-2" />
          <p>Search by title for a movie you want information about.</p>
        </Jumbotron>
      </Container>
      <OmdbSearchForm onSearch={search} />
      <MovieInfo title={title} />
    </>
  );
}

export default App;
