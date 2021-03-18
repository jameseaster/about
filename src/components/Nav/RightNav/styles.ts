import styled from "styled-components";

type UlProps = {
  open: boolean;
};

export const UlStyle = styled.ul<UlProps>`
  flex-flow: column nowrap;
  background-color: #0d2538;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.4s ease-in-out;
  list-style-type: none;

  li {
    color: #fff;
    padding: 18px 30px;
  }

  .resume {
    color: #fff;
    text-decoration: none;
  }

  .active {
    border: 1px solid #f7882f;
    padding: 4px;
    border-radius: 2px;
  }
`;