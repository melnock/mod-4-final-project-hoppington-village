import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './containers/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <App />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render((
  <Router>
    <div>
      <Route path="/" component={App}/>
      // <Route path="/" component={Login}/>
    </div>
  </Router>),
  document.getElementById('root')
);

// ReactDOM.render((
//   <Router>
//     <Route path="/" render={Home} />
//   </Router>),
//   document.getElementById('root')
// );
// registerServiceWorker();
