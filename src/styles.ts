import { createGlobalStyle } from 'styled-components'

export const Colors = {
  gray: '#ccc',
  purple: '#662f77',
  purpleDark: '#290435',
  white: '#e7e4e4'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        text-decoration: none;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        padding: 80px 0;
    }

    .no-print {
        display: flex;
    }

    .pdf-mode .no-print {
        display: none !important;
    }
    
`
