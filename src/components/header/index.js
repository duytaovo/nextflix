import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import * as Style from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
   return bg ? <Style.Background {...restProps}>{children}</Style.Background> : children;
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
   return <Style.Link {...restProps}>{children}</Style.Link>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
   return <Style.Profile {...restProps}>{children}</Style.Profile>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
   return <Style.Feature {...restProps}>{children}</Style.Feature>;
};

Header.Frame = function HeaderFrame({ navActive, children, ...restProps }) {
   return (
      <Style.Container navActive={navActive} {...restProps}>
         {children}
      </Style.Container>
   );
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
   return <Style.Group {...restProps}>{children}</Style.Group>;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
   return <Style.Button {...restProps}>{children}</Style.Button>;
};

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
   return (
      <ReactRouterLink to={to}>
         <Style.Logo {...restProps} />
      </ReactRouterLink>
   );
};

Header.Text = function HeaderText({ children, ...restProps }) {
   return <Style.Text {...restProps}>{children}</Style.Text>;
};
Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
   return <Style.FeatureCallOut {...restProps}>{children}</Style.FeatureCallOut>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
   return <Style.Dropdown {...restProps}>{children}</Style.Dropdown>;
};

Header.Avatar = function HeaderAvatar({ src, children, ...restProps }) {
   return (
      <Style.Avatar src={`/assets/images/users/${src}.png`} {...restProps}>
         {children}
      </Style.Avatar>
   );
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
   const [searchActive, setSearchActive] = useState(false);

   return (
      <Style.Search {...restProps}>
         <Style.SearchInput
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
            placeholder="Search films and series"
            active={searchActive}
         />
         <Style.SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)}>
            <img src="/assets/images/icons/search.png" alt="Search" />
         </Style.SearchIcon>
      </Style.Search>
   );
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
   return <Style.PlayButton {...restProps}>{children}</Style.PlayButton>;
};
