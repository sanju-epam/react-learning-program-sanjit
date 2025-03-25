
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './components/Counter';
import SearchBox from './components/SearchForm';
import reportWebVitals from './reportWebVitals';
import MovieGenres from './components/GenreSelect';

const root = ReactDOM.createRoot(document.getElementById('root'));

let counterValue = 10;
function updateCounter(newValue) {
  counterValue = newValue;
  render();
}


function handleSearch(query) {
  console.log("Search triggered with query:", query);
}

let selectedGenre = "ALL"; 
const genresList = ["ALL","DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]; 
function handleGenreSelect(newGenre) {
  selectedGenre = newGenre; 
  console.log("New selected movie:", newGenre);
  render();
}

function render() {
  root.render(
      React.createElement(
          React.StrictMode,
          null,
          React.createElement(
              'div',
              { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '50px' } },
              React.createElement(SearchBox, { initialQuery: "Hello", onSearch: handleSearch }),
              React.createElement(Counter, { initialValue: counterValue, onUpdate: updateCounter }),
              React.createElement(MovieGenres, {
                genres: genresList,
                selectedGenre: selectedGenre, 
                onSelect: handleGenreSelect,
              })
          )
      )
  );
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
