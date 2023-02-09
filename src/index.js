import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function App() {
  return (
    <div id='app'>
      <div className="button">
        <p className="btnText">Read random article</p>
        <div className="btnTwo">
          <p className="btnText2"><i class="fas fa-search"></i></p>
        </div>
      </div>
      <form id='search-form' href>
        <input id='input' type='text' name='search' placeholder='Type your search here...'/>
        <div className="button" id='form-button'>
          <p className="btnText">Search</p>
          <div className="btnTwo">
            <p className="btnText2"><i class="fas fa-search"></i>
</p>
          </div>
      </div>
      </form>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

