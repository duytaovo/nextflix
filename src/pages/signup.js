import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContainer, FooterContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
//Firebase
import { FirebaseContext } from '../context/firebase';

function SignUp() {
   const history = useHistory();
   const { firebase } = useContext(FirebaseContext);
   const firebaseAuth = firebase.auth();

   const [firstName, setFirstName] = useState('');
   const [emailAddress, setEmailAddress] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');

   const isEmpty =
      firstName === '' || password === '' || confirmPassword === '' || emailAddress === '';

   const handleSignup = async (e) => {
      e.preventDefault();

      if (password === confirmPassword) {
         try {
            const res = await firebaseAuth.createUserWithEmailAndPassword(emailAddress, password);
            await res.user.updateProfile({
               displayName: firstName,
               photoURL: Math.floor(Math.random() * 5) + 1,
            });
            history.push(ROUTES.BROWSE);
         } catch (error) {
            setFirstName('');
            setEmailAddress('');
            setPassword('');
            setConfirmPassword('');
            setError(error.message);
         }
      } else {
         setError('Password and confirmation password do not match. Please try again.');
      }
   };

   return (
      <Fragment>
         <HeaderContainer>
            <Form>
               <Form.Title>Sign Up</Form.Title>

               {error && <Form.Error>{error}</Form.Error>}

               <Form.Base onSubmit={handleSignup} method="POST">
                  <Form.Input
                     placeholder="First Name"
                     type="text"
                     autoComplete="off"
                     value={firstName}
                     onChange={({ target }) => setFirstName(target.value)}
                  />
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
                  <Form.Input
                     placeholder=" Confirm Password"
                     type="password"
                     autoComplete="off"
                     value={confirmPassword}
                     onChange={({ target }) => setConfirmPassword(target.value)}
                  />
                  <Form.Submit disabled={isEmpty} type="submit">
                     Sign Up
                  </Form.Submit>
               </Form.Base>
               <Form.Text>
                  Already have an account? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
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

export default SignUp;
