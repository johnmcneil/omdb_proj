import react, { useState } from 'react';
import './App.css';
import OmdbSearchForm from './components/OmdbSearchForm';
import MovieInfo from './components/MovieInfo';

function App() {
  const [title, setTitle] = useState("");

  const search = (title) => {
    setTitle(title);
  }

  return (
    <>
      <OmdbSearchForm onSearch={search} />
      <MovieInfo title={title} />
    </>
  );
}

export default App;
