import styled from "styled-components";
import background from "../../assets/other/Home_Screen_Background.jpeg";
import background_mobile from "../../assets/other/Mobile_Home_Screen_Background.jpeg";

export const HomeScreenStyle = styled.div<{}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  color: #fff;

  .text-container {
    text-align: left;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 50px;
    border-radius: 4px;
    margin-left: 250px;
    border: 1px solid #fff;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    background: url(${background_mobile}) no-repeat;
    background-size: cover;

    .text-container {
      text-align: left;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 20px;
      margin-top: 100px;
      margin-left: 0px;
      width: 100vw;
      height: auto;
      border-left: none;
      border-right: none;
      border-radius: 0px;
    }
  }
`;
