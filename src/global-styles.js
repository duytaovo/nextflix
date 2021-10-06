import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,body{
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: white;
    font-size: 16px;

.opt-form-header{
    padding: 0px 40px;
    padding-bottom: 140px;  
}

.opt-form-text{
    text-align: center;
}

.opt-form-button{
    font-size: 27px;
}

@media (max-width: 1000px){
    .opt-form-button{
        font-size: 20px;
    }
}

.browse-header{
    border: none;
}


}`;
