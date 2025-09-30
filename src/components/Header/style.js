import styled from "styled-components";
import { debugBackground } from "../../styles/mixins";

export const Navbar = styled.header`
  ${debugBackground("blue")};
display: flex;
  justify-content: center;

  img {
    // width: 100%;
    /* height: 90px; */
    height: 10vh;
  }
`;
