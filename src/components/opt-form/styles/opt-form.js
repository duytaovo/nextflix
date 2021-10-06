import styled from 'styled-components/macro';

const Input = styled.input`
   max-width: 450px;
   width: 100%;
   font-size: 16px;
   border: 0px;
   height: 70px;
   padding: 10px;
   box-sizing: border-box;
   @media (max-width: 1000px) {
      max-width: 550px;
      height: 60px;
   }
`;

const Button = styled.button`
   display: flex;
   align-items: center;
   font-weight: 400;
   justify-content: center;
   height: 100%;
   padding: 0 32px;
   color: white;
   font-size: 1.875rem;
   text-transform: uppercase;
   background-color: #e50914;
   border: none;
   height: 70px;
   cursor: pointer;
   img {
      filter: brightness(0) invert(1);
      width: 22px;
      margin: 0px 0px 0px 10px;
      @media (max-width: 1000px) {
         width: 16px;
      }
   }
   &:hover {
      background-color: #f40612;
   }
   @media (max-width: 1000px) {
      margin-top: 50px;
      font-size: 0.9rem;
      padding: 14px 15px;
      border-radius: 3px;
      height: fit-content;
   }
`;

const Text = styled.h3`
   font-weight: 400;
`;

const Container = styled.div`
   display: flex;
   justify-content: center;
   height: 100%;
   margin-top: 20px;
   flex-wrap: wrap;

   @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
   }
`;

const Break = styled.div`
   flex-basis: 100%;
`;
export { Input, Button, Text, Container, Break };
