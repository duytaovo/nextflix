import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer() {
   return (
      <Accordion>
         <Accordion.Title>Frequently Asked Questions</Accordion.Title>
         {faqsData.map(({ id, header, body }) => {
            return (
               <Accordion.Item key={id}>
                  <Accordion.Header>{header}</Accordion.Header>
                  <Accordion.Body>{body}</Accordion.Body>
               </Accordion.Item>
            );
         })}
         <OptForm.Break />
         <OptForm>
            <OptForm.Text>
               Ready to watch? Enter your email to create or restart your membership. Email address
            </OptForm.Text>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Bắt đầu</OptForm.Button>
         </OptForm>
         <OptForm.Break />
      </Accordion>
   );
}
