import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './index.css';

async function searchArticles(searchTerm) {
  const response = await axios.get(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json&origin=*`
  );

  const articles = response.data.query.search;

  return articles;
}

function App() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function getArticles() {
      const results = await searchArticles(searchTerm);
      setArticles(results);
    }

    if (searchTerm) {
      getArticles();
    }
  }, [searchTerm]);

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(event.target.elements.search.value);
  }

  function handleRandomArticle() {
    window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
  }

  return (
    <div id='app'>
      <div className="button" onClick={handleRandomArticle}>
        <p className="btnText">Read random article</p>
        <div className="btnTwo">
          <p className="btnText2"><i class="fas fa-search"></i></p>
        </div>
      </div>
      <form id='search-form' onSubmit={handleSubmit}>
        <input id='input' type='text' name='search' placeholder='Type your search here...' />
        <button className="button" id='form-button' type='submit' >
          <p className="btnText">Search</p>
          <div className="btnTwo">
            <p className="btnText2"><i class="fas fa-search"></i></p>
          </div>
        </button>
      </form>
      {articles.map(article => (
        <div key={article.pageid} className='result'>
          <h3>
            <a className='result-link' href={`https://en.wikipedia.org/wiki/${article.title}`} target='_blank'>
              {article.title}
            </a>
          </h3>
          <p>{article.snippet.replace(/<\/?span[^>]*>/g, '')}</p>
        </div>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
