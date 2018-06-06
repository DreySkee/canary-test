// Dependencies
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import style from './style';

// Components
import Home from 'components/Home';

ReactDOM.render(
  <Router>
    <div className="page"> 

      <Route exact  path="/" component={Home} />

    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
