import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, button, input {
        font-family: Helvetica, Arial, sans-serif
    }

    #root {
        --color-dark-primary: #1c1e21;
        --color-dark-secondary: #18191A;
        --bg-dark-icons: rgba(255, 255, 255, 0.1);
        --text-dark-primary: #E4E6EB;
        --text-dark-secondary: #B0B3B8;
        --search-icon-dark: #3A3B3C;

        --color-light-primary: #f0f2f5;
        --color-light-secondary: #FFF;
        --bg-light-icons: #E7F3FF;
        --text-light-primary: #050505;
        --text-light-secondary: #65676B;
        --search-icon-light: #F0F2F5;

        --color-active-icon: #3578E5;
    }
`;