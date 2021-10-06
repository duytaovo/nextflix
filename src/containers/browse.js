import React, { Fragment, useState, useEffect, useContext } from 'react';
import { ProfileContainer, FooterContainer } from './index';
import { FirebaseContext } from '../context/firebase';
import { Player, Card, Loading, Header } from '../components';
import Fuse from 'fuse.js';

function BrowseContainer({ slides }) {
   const [category, setCategory] = useState('series');
   const [searchTerm, setSearchTerm] = useState('');
   const [profile, setProfile] = useState({});
   const [loading, setLoading] = useState(true);
   const [slideRows, setSlideRows] = useState([]);

   // const [navActive, setNavActive] = useState('true');

   const { firebase } = useContext(FirebaseContext);
   const user = JSON.parse(localStorage.getItem('authUser')) || {};

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, [profile.displayName]);

   function mapToArray(map) {
      let temp = [];
      for (const [value] of map.entries()) {
         temp.push({ title: value, data: map.get(value) });
      }
      return temp;
   }

   useEffect(() => {
      const slidesCategory = mapToArray(slides[category]);
      setSlideRows(slidesCategory);
   }, [slides, category]);

   useEffect(() => {
      const fuse = new Fuse(slideRows, { keys: [`data.description`, `data.title`, `data.genre`] });
      const result = fuse.search(searchTerm).map(({ item }) => item);
      if (slideRows.length > 0 && searchTerm.length > 0 && result.length > 0) {
         setSlideRows(result);
      } else {
         const slidesCategory = mapToArray(slides[category]);
         setSlideRows(slidesCategory);
      }
   }, [searchTerm]);

   return profile.displayName ? (
      <Fragment>
         {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
         <Header src="joker1" className="browse-header" dontShowOnSmallViewPort="true">
            <Header.Frame navActive="true">
               <Header.Group>
                  <Header.Logo
                     to={'#'}
                     src="https://fontmeme.com/permalink/200928/ea97e0e8139165beaa10a243a708d312.png"
                     alt="Netflix"
                  />
                  <Header.TextLink
                     active={category === 'series' ? 'true' : 'false'}
                     onClick={() => setCategory('series')}
                  >
                     Series
                  </Header.TextLink>
                  <Header.TextLink
                     active={category === 'films' ? 'true' : 'false'}
                     onClick={() => setCategory('films')}
                  >
                     Films
                  </Header.TextLink>
               </Header.Group>
               <Header.Group>
                  <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                  <Header.Profile>
                     <Header.Avatar src={user.photoURL} />
                     <Header.Dropdown>
                        <Header.Group>
                           <Header.Avatar src={user.photoURL} />
                           <Header.TextLink>{user.displayName}</Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                           <Header.TextLink onClick={() => firebase.auth().signOut()}>
                              Sign out
                           </Header.TextLink>
                        </Header.Group>
                     </Header.Dropdown>
                  </Header.Profile>
               </Header.Group>
            </Header.Frame>
            <Header.Feature>
               <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
               <Header.Text>
                  In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and
                  mistreated by society. He then embarks on a downward spiral of revolution and
                  bloody crime. This path brings him face-to-face with his alter-ego: the Joker.
               </Header.Text>
               <Header.PlayButton>Play</Header.PlayButton>
            </Header.Feature>
         </Header>
         <Card.Group>
            {slideRows.map((slideItem) => (
               <Card key={`${category}-${slideItem.title}`}>
                  <Card.Title>{slideItem.title}</Card.Title>
                  <Card.Entities>
                     {slideItem.data.map((item) => (
                        <Card.Item key={item.docId} item={item}>
                           <Card.Image
                              src={`/assets/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                           />
                           <Card.Meta>
                              <Card.SubTitle>{item.title}</Card.SubTitle>
                              <Card.Text>{item.description}</Card.Text>
                           </Card.Meta>
                        </Card.Item>
                     ))}
                  </Card.Entities>
                  <Card.Feature category={category}>
                     <Player>
                        <Player.Button />
                        <Player.Video src="/assets/videos/bunny.mp4" />
                     </Player>
                  </Card.Feature>
               </Card>
            ))}
         </Card.Group>
         <FooterContainer />
      </Fragment>
   ) : (
      <ProfileContainer user={user} setProfile={setProfile} />
   );
}

export default BrowseContainer;
