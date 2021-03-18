import styled from "styled-components";

export const AboutStyle = styled.div<{}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #6b7a8f;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: 969px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (max-width: 969px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .title {
    margin-top: 50px;
    padding-bottom: 20px;
  }

  .subtitle {
    min-width: 300px;
  }

  .section {
    margin-top: 30px;
    margin-bottom: 30px;
    min-width: 325px;
    max-width: 500px;
  }

  .header {
    max-width: 600;
    margin-bottom: 0px;
    min-width: 325px;
  }

  .section-img {
    @media (max-width: 700px) {
      max-width: 350px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  img {
    margin: 10px;
    height: 40px;
  }

  .nodejs {
    height: 80px;
  }
`;
