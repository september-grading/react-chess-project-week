
import ChessBoard from './components/ChessBoard/ChessBoardComponent';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Header from './components/Header';
import Home from './components/Home';
import { UserProvider } from './context/UserContext';
import Auth from './views/Auth';

export default function App() {
  return (
    <h1>
      <UserProvider>
        <BrowserRouter>
          <Header />
     <ChessBoard></ChessBoard>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Auth />
            </Route>
            <Route exact path="/register">
              <Auth isSigningUp />
            </Route>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </h1>

  );
}
