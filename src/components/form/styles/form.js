import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 660px;
   background-color: rgba(0, 0, 0, 0.75);
   border-radius: 5px;
   box-sizing: border-box;
   width: 100%;
   max-width: 450px;
   padding: 60px 68px 40px 68px;
   margin: auto;
   margin-bottom: 100px;
   margin-top: 20px;
`;

const Input = styled.input`
   background: #333;
   color: white;
   border-radius: 4px;
   border: 0;
   height: 40px;
   line-height: 50px;
   padding: 5px 20px;
   margin-bottom: 20px;

   &:last-of-type {
      margin-bottom: 30px;
   }
`;

const Error = styled.p`
   background: #e87c03;
   border-radius: 4px;
   font-size: 14px;
   margin: 0 0 16px;
   color: white;
   padding: 15px 20px;
`;

const Title = styled.h1`
   margin: 30px 0px;
   margin-top: 0px;
`;

const Base = styled.form`
   display: flex;
   flex-direction: column;
   max-width: 450px;
   width: 100%;
`;

const Text = styled.p`
   color: #737373;
   font-size: 16px;
   font-weight: 500;
`;
const TextSmall = styled.p`
   margin-top: 10px;
   font-size: 13px;
   line-height: normal;
   color: #8c8c8c;
`;

const Link = styled(ReactRouterLink)`
   color: white;
   text-decoration: none;

   &:hover {
      text-decoration: underline;
   }
`;

const Submit = styled.button`
   background: #e50914;
   border-radius: 4px;
   font-size: 16px;
   font-weight: bold;
   margin: 24px 0 12px;
   padding: 16px;
   border: 0;
   color: white;
   cursor: pointer;

   &:disabled {
      opacity: 0.5;
   }
`;

export { Container, Error, Title, Base, Text, TextSmall, Link, Input, Submit };
