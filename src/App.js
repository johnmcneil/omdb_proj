import react, { useState } from 'react';
import './App.css';
import OmdbSearchForm from './components/OmdbSearchForm.js';

function App() {
  const [title, setTitle] = useState("");

  const search = (title) => {
    setTitle(title);
  }

  return (
    <OmdbSearchForm onSearch={search} />
  );
}

export default App;
