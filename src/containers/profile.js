import React, { Fragment } from 'react';
import { HeaderContainer } from '../containers';
import { Profile } from '../components';

export default function ProfileContainer({ user, setProfile }) {
   return (
      <Fragment>
         <HeaderContainer bg={false} buttonShow={false} />
         <Profile>
            <Profile.Title>Who's watching?</Profile.Title>
            <Profile.List>
               <Profile.User
                  onClick={() => {
                     setProfile({ displayName: user.displayName, photoURL: user.photoURL });
                  }}
               >
                  <Profile.Avatar src={user.photoURL}></Profile.Avatar>
                  <Profile.Name>{user.displayName}</Profile.Name>
               </Profile.User>
            </Profile.List>
         </Profile>
      </Fragment>
   );
}
