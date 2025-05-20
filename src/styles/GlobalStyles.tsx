import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Pretendard", sans-serif;
        background-color: #1e1e1e;
        color: #222;
        display: flex;
        justify-content: center;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);

export default GlobalStyles;
