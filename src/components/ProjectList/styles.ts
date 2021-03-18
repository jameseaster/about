import styled from "styled-components";

export const ProjectListStyle = styled.div<{}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  background-color: #404040;
  padding-top: 30px;
  padding-bottom: 30px;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) {
    min-height: 100vh;
  }
  color: #fff;

  .header {
    margin-top: 50px;
  }
`;
