import styled from 'styled-components/macro';

const Container = styled.div`
   display: flex;
   padding: 70px 56px;
   padding-bottom: 0px;
   margin: auto;
   max-width: 1000px;
   flex-direction: column;

   @media (max-width: 1000px) {
      padding: 70px 30px;
   }
`;

const Column = styled.div`
   display: flex;
   flex-direction: column;
   text-align: left;
`;

const Row = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
   grid-gap: 15px;

   @media (max-width: 1000px) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
   }
`;

const Link = styled.a`
   color: #757575;
   margin-bottom: 20px;
   font-size: 14px;
   text-decoration: none;
   span {
      &:hover {
         border-bottom: 0.5px solid #757575;
      }
   }
`;

const Title = styled.h2`
   color: #757575;
   font-size: 16px;
   margin-bottom: 20px;
`;

const Text = styled.p`
   font-size: 14px;
   color: #757575;
   margin-bottom: 40px;
`;

const Break = styled.p`
   flex-basis: 100%;
   height: 0;
`;

export { Container, Row, Column, Link, Title, Text, Break };
