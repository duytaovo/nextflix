import styled from 'styled-components/macro';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 80px;
`;

const Title = styled.div`
   color: white;
   max-width: 750px;
   font-size: 4rem;
   font-weight: bold;
   text-align: center;
   margin: auto;
   @media (max-width: 600px) {
      font-size: 35px;
      max-width: 450px;
   }
`;

const SubTitle = styled.div`
   color: white;
   max-width: 640px;
   font-size: 30px;
   font-weight: normal;
   margin: 16px auto;
   @media (max-width: 600px) {
      font-size: 20px;
   }
`;

export { Title, SubTitle, Container };
