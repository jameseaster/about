import styled from "styled-components";

export const ProjectListItemStyle = styled.div<{}>`
  .app-container {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0px 40px;
    @media (max-width: 900px) {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: left;
    }
  }

  .app-img {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0% 2% 0% 5%;
    @media (max-width: 900px) {
      margin: 0% 2% 0% 2%;
    }
  }

  .app-img:hover {
    filter: brightness(50%);
  }

  .app-text {
    flex: 1;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0% 10% 0% 2%;
    @media (max-width: 900px) {
      max-width: 400px;
      margin: 0% 2% 0% 2%;
    }
    a {
      text-decoration: none;
      color: #fff;
      font-size: small;
      font-style: italic;
    }
    a:hover {
      color: dodgerblue;
    }
  }

  .flourish {
    width: auto;
    max-height: 400px;
  }

  .img {
    width: 500px;
    border-radius: 4px;
    padding-left: 100px;
    @media (max-width: 900px) {
      width: 400px;
      padding-left: 0px;
    }
    @media (max-width: 525px) {
      width: 300px;
    }
  }

  .p_margin {
    margin: 20px 5px 0px 5px;
  }

  .title-margin {
    margin: 5px;
  }
`;
