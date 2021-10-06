import React from 'react';
import { Container, Error, Title, Base, Text, TextSmall, Link, Input, Submit } from './styles/form';

function Form({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
}

Form.Input = function FormInput({ children, ...restProps }) {
   return <Input {...restProps} />;
};

Form.Error = function FormError({ children, ...restProps }) {
   return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }) {
   return <Base {...restProps}>{children}</Base>;
};

Form.Text = function FormText({ children, ...restProps }) {
   return <Text {...restProps}>{children}</Text>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
   return <Title {...restProps}>{children}</Title>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
   return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }) {
   return <Link {...restProps}>{children}</Link>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
   return <Submit {...restProps}>{children}</Submit>;
};

export default Form;
