import React from 'react';
import { Footer } from '../components';

export default function FooterContainer() {
   return (
      <Footer>
         <Footer.Title>Questions? Contact us.</Footer.Title>
         <Footer.Break />
         <Footer.Row>
            <Footer.Column>
               <Footer.Link href="https://help.netflix.com/vi/node/412">
                  <span>FAQ </span>
               </Footer.Link>
               <Footer.Link href="https://www.netflixinvestor.com/ir-overview/profile/default.aspx">
                  <span>Investor Relations</span>
               </Footer.Link>
               <Footer.Link href="https://help.netflix.com/legal/privacy">
                  <span>Privacy</span>
               </Footer.Link>
               <Footer.Link href="https://fast.com/">
                  <span>Speed Test</span>
               </Footer.Link>
            </Footer.Column>
            <Footer.Column>
               <Footer.Link href="https://help.netflix.com/vi/">
                  <span> Help Center</span>
               </Footer.Link>
               <Footer.Link href="https://jobs.netflix.com/">
                  <span> Jobs</span>
               </Footer.Link>
               <Footer.Link href="https://help.netflix.com/legal/privacy#cookies">
                  <span> Cookie Preferences</span>
               </Footer.Link>
               <Footer.Link href="https://help.netflix.com/legal/notices">
                  <span>Legal Notices</span>
               </Footer.Link>
            </Footer.Column>
            <Footer.Column>
               <Footer.Link href="https://www.netflix.com/vn/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">
                  <span> Account</span>
               </Footer.Link>
               <Footer.Link href="https://devices.netflix.com/en/">
                  <span>Ways to Watch</span>
               </Footer.Link>
               <Footer.Link href="https://help.netflix.com/vi/node/2101">
                  <span> Corporate Information</span>
               </Footer.Link>
               <Footer.Link href="https://www.netflix.com/vn/browse/genre/839338">
                  <span>Netflix Originals</span>
               </Footer.Link>
            </Footer.Column>
            <Footer.Column>
               <Footer.Link href="https://media.netflix.com/">
                  <span>Media Center</span>
               </Footer.Link>
               <Footer.Link href="https://help.netflix.com/legal/termsofuse">
                  <span> Terms of Use</span>
               </Footer.Link>
               <Footer.Link href="https://help.netflix.com/vi/contactus">
                  <span>Contact Us</span>
               </Footer.Link>
            </Footer.Column>
         </Footer.Row>
         <Footer.Break />
         <Footer.Text>Netflix Việt Nam</Footer.Text>
      </Footer>
   );
}
