import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export default function HeaderContainer({ children, buttonShow = true, bg = true }) {
   return (
      <Header bg={bg}>
         <Header.Frame>
            <Header.Logo
               to={ROUTES.HOME}
               src="https://fontmeme.com/permalink/200928/ea97e0e8139165beaa10a243a708d312.png"
               alt="Netflix"
            />
            {buttonShow && <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>}
         </Header.Frame>
         {children}
      </Header>
   );
}
