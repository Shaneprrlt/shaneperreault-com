import styled from "@emotion/styled";

export const NavElement = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: block;

      a:link,
      a:visited {
        color: #868686;
        text-decoration: none;
      }

      a.active:link,
      a.active:visited {
        color: #ffffff;
      }

      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
`;
