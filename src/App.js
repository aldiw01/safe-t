import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

// Set API IP address
localStorage.setItem('serverAPI', process.env.REACT_APP_API_PATH);
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const LoginAdmin = React.lazy(() => import('./views/Pages/LoginAdmin'));
const RegisterAdmin = React.lazy(() => import('./views/Pages/RegisterAdmin'));
const ResetPassword = React.lazy(() => import('./views/Pages/ResetPassword'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const LandingPage = React.lazy(() => import('./views/LandingPage/LandingPage'));
const ViolationPage = React.lazy(() => import('./views/ViolationPage/ViolationPage'));
const ChartPage = React.lazy(() => import('./views/ChartPage/ChartPage'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
            <Route path="/login/:id" name="Login Page" render={props => <Login {...props} />} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
            <Route exact path="/admin/login" name="Login Page" render={props => <LoginAdmin {...props} />} />
            <Route exact path="/admin/register" name="Register Page" render={props => <RegisterAdmin {...props} />} />
            <Route path="/resetpassword/:token" name="Reset Password" render={props => <ResetPassword {...props} />} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
            <Route exact path="/home" name="Landing Page" render={props => <LandingPage {...props} />} />
            <Route exact path="/violation" name="Violation Page" render={props => <ViolationPage {...props} />} />
            <Route exact path="/chart" name="Chart Page" render={props => <ChartPage {...props} />} />
            <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
