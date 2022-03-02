import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Auth from './views/Auth';
import GameRoom from './views/GameRoom';
import Layout from './components/Layout';

import EditProfile from './components/EditProfile';
import ProtectedRoute from './components/ProtectedRoute';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
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
            <Route exact path="/game-room">
              <GameRoom />
            </Route>


            <ProtectedRoute exact path="/edit-profile">
              <EditProfile />
            </ProtectedRoute>

          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}
