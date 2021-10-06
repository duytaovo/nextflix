import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages/index';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

import './App.css';

function App() {
   const { user } = useAuthListener(); //Custom hook to handle user login state
   return (
      <Router>
         <Switch>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
               <Home />
            </IsUserRedirect>
            <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
               <Browse />
            </ProtectedRoute>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
               <SignIn />
            </IsUserRedirect>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
               <SignUp />
            </IsUserRedirect>
         </Switch>
      </Router>
   );
}

export default App;
