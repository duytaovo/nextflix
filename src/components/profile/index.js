import React from 'react';
import { Container, Title, List, Item, Avatar, Name } from './styles/profile';

function Profile({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
   return <Title {...restProps}>{children}</Title>;
};

Profile.List = function ProfileList({ children, ...restProps }) {
   return <List {...restProps}>{children}</List>;
};

Profile.User = function ProfileUser({ children, ...restProps }) {
   return <Item {...restProps}>{children}</Item>;
};

Profile.Avatar = function ProfileImage({ src, ...restProps }) {
   const loading = `assets/images/misc/loading.gif`;
   const profileAvatar = `assets/images/users/${src}.png`;
   return <Avatar src={src ? profileAvatar : loading} {...restProps} />;
};

Profile.Name = function ProfileName({ children, ...restProps }) {
   return <Name {...restProps}>{children}</Name>;
};

export default Profile;
