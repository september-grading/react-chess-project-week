import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Auth from './views/Auth';
import GameRoom from './views/GameRoom/GameRoom';
import Layout from './components/Layout';

import EditProfile from './components/EditProfile';
import ProtectedRoute from './components/ProtectedRoute';
import { ProfileProvider } from './context/ProfileContext';

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
            <ProfileProvider>
              <ProtectedRoute exact path="/game-room">
                <GameRoom />
              </ProtectedRoute>
              <ProtectedRoute path="/edit-profile">
                <EditProfile />
              </ProtectedRoute>
            </ProfileProvider>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}
