import React, { useState, useContext, createContext } from 'react';
import * as Style from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
   const [showFeature, setShowFeature] = useState(false);
   const [itemFeature, setItemFeature] = useState({});

   return (
      <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
         <Style.Container {...restProps}>{children}</Style.Container>
      </FeatureContext.Provider>
   );
}

Card.Group = function CardGroup({ children, ...restProps }) {
   return <Style.Group {...restProps}>{children}</Style.Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
   return <Style.Title {...restProps}>{children}</Style.Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
   return <Style.SubTitle {...restProps}>{children}</Style.SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
   return <Style.Text {...restProps}>{children}</Style.Text>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
   return <Style.Meta {...restProps}>{children}</Style.Meta>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
   const { setShowFeature, setItemFeature } = useContext(FeatureContext);

   return (
      <Style.Item
         onClick={() => {
            setItemFeature(item);
            setShowFeature(true);
         }}
         {...restProps}
      >
         {children}
      </Style.Item>
   );
};

Card.Image = function CardImage({ ...restProps }) {
   return <Style.Image {...restProps} />;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
   return <Style.Entities {...restProps}>{children}</Style.Entities>;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
   const { showFeature, setShowFeature, itemFeature } = useContext(FeatureContext);
   return showFeature ? (
      <Style.Feature
         src={`/assets/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
         {...restProps}
      >
         <Style.Content>
            <Style.FeatureTitle>{itemFeature.title}</Style.FeatureTitle>
            <Style.FeatureText>{itemFeature.description}</Style.FeatureText>
            <Style.FeatureClose onClick={() => setShowFeature(false)}>
               <img src="/assets/images/icons/close.png" alt="Close" />
            </Style.FeatureClose>
         </Style.Content>

         <Style.Group margin="0px 0px 30px 50px" flexDirection="row" alignItems="center">
            <Style.Maturity rating={itemFeature.maturity}>
               {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
            </Style.Maturity>
            <Style.FeatureText fontWeight="bold">
               {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
            </Style.FeatureText>
         </Style.Group>
         {children}
      </Style.Feature>
   ) : null;
};
