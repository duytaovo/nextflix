import React, { Fragment } from 'react';
import { OptForm, Feature } from '../components';
import { JumbotronContainer, FaqsContainer, HeaderContainer } from '../containers';
import { FooterContainer } from '../containers';

export default function Home() {
   return (
      <Fragment>
         <HeaderContainer>
            <Feature>
               <Feature.Title>
                  100% entertainment.
                  <br />
                  90,000 ₫ for your first 30 days.
               </Feature.Title>
               <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
            </Feature>
            <OptForm className="opt-form-header">
               <OptForm.Text className="opt-form-text">
                  Ready to watch? Enter your email to create or restart your membership. Email
                  address
               </OptForm.Text>
               <OptForm.Break />
               <OptForm.Input placeholder="Email Address" />
               <OptForm.Button className="opt-form-button">Try now for 90.000 đ</OptForm.Button>
               <OptForm.Break />
               <OptForm.Text className="opt-form-text">
                  Only new members are eligible for this offer.
               </OptForm.Text>
            </OptForm>
         </HeaderContainer>
         <JumbotronContainer />
         <FaqsContainer />
         <FooterContainer />
      </Fragment>
   );
}
