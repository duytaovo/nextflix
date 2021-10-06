import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContainer, FooterContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
//Firebase
import { FirebaseContext } from '../context/firebase';

function SignIn() {
   const history = useHistory();
   const { firebase } = useContext(FirebaseContext);
   const firebaseAuth = firebase.auth();

   const [emailAddress, setEmailAddress] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');

   const isEmpty = password === '' || emailAddress === '';

   const handleSignin = async (e) => {
      e.preventDefault();

      //firebase works here
      try {
         await firebaseAuth.signInWithEmailAndPassword(emailAddress, password);
         history.push(ROUTES.BROWSE);
      } catch (error) {
         setEmailAddress('');
         setPassword('');
         setError(error.message);
      }
   };

   return (
      <Fragment>
         <HeaderContainer buttonShow={false}>
            <Form>
               <Form.Title>Sign In</Form.Title>
               {error && <Form.Error>{error}</Form.Error>}

               <Form.Base onSubmit={handleSignin} method="POST">
                  <Form.Input
                     placeholder="Email Address"
                     type="email"
                     autoComplete="off"
                     value={emailAddress}
                     onChange={({ target }) => setEmailAddress(target.value)}
                  />
                  <Form.Input
                     placeholder="Password"
                     type="password"
                     autoComplete="off"
                     value={password}
                     onChange={({ target }) => setPassword(target.value)}
                  />
                  <Form.Submit disabled={isEmpty} type="submit">
                     Sign In
                  </Form.Submit>
               </Form.Base>
               <Form.Text>
                  New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
               </Form.Text>
               <Form.TextSmall>
                  This page is protected by Google reCAPTCHA to ensure you're not a bot.
               </Form.TextSmall>
            </Form>
         </HeaderContainer>
         <FooterContainer />
      </Fragment>
   );
}

export default SignIn;
