import React, { createContext, useState, useContext } from 'react';
import { Title, Frame, Item, Header, Body, Container, Inner } from './styles/accordion.js';

const ToggleContext = createContext();

function Accordion({ children, ...restProps }) {
   return (
      <Container {...restProps}>
         <Inner>{children}</Inner>
      </Container>
   );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
   return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
   return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
   const [toggleShow, setToggleShow] = useState(false);

   return (
      <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
         <Item {...restProps}>{children}</Item>
      </ToggleContext.Provider>
   );
};

Accordion.Header = function AccordionItem({ children, ...restProps }) {
   const { toggleShow, setToggleShow } = useContext(ToggleContext);
   return (
      <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
         {children}
         {toggleShow ? (
            <img src="/assets/images/icons/close-slim.png" alt="Close" />
         ) : (
            <img src="/assets/images/icons/add.png" alt="Open" />
         )}
      </Header>
   );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
   const { toggleShow } = useContext(ToggleContext);

   return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordion;
