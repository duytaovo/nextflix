import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redirect the user to a specific route if logged in
export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
   return (
      <Route
         {...restProps}
         render={() => {
            if (!user) {
               return children;
            }

            if (user) {
               return (
                  <Redirect
                     to={{
                        pathname: loggedInPath,
                     }}
                  />
               );
            }

            return null;
         }}
      ></Route>
   );
}
//To protect the authenticated route from non-logged in user
export function ProtectedRoute({ user, children, ...restProps }) {
   return (
      <Route
         {...restProps}
         render={({ location }) => {
            if (user) {
               return children;
            }

            if (!user) {
               return <Redirect to={{ pathname: 'signin', state: { from: location } }} />;
            }

            return null;
         }}
      />
   );
}
