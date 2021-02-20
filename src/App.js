import './App.css';
import {Layout, LayoutNone} from './layout/Layout';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import SignupPage from './pages/auth/SignupPage';
import HomePage from './pages/HomePage';

function RouteWrapper({
  Component, 
  Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <RouteWrapper exact path='/' Component={HomePage} Layout={Layout} />
          <RouteWrapper path="/signup" Component={SignupPage} Layout={LayoutNone} />
        </Switch>
      </Router>
    </div>
  );
}



export default App;
