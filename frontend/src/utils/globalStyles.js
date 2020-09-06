import { createGlobalStyle } from 'styled-components'

export const ResponsiveBoilerPlate = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    @media only screen and (max-width: 75em) {
        html {
            font-size: 56.25%;
        }
    }

    @media only screen and (max-width: 56.25em) {
        html {
            font-size: 50%;
        }
    }

    @media only screen and (min-width: 112.5em) {
        html {
            font-size: 75%;
        }
    }

    body {
        box-sizing: border-box;
    }

    @media only screen and (max-width: 56.25em) {
        body {
            padding: 0;
        }
    }

    ::selection {
        background-color: #2aa3f6;
        color: white;
    }
`