import styled from 'styled-components';

export const PicQuoteStyles = styled.header`
  .container {
    @media (min-width: 768px) {
      .pic-quote {
        align-items: center;
        display: flex;
        flex-direction: row;
        padding: 60px;
        justify-content: center;
      }
      .pic1 {
        order: 1
        padding-left: 20px;
        padding-right: 20px;
      }
      .quote1 {
        order: 2
        padding-left: 20px;
        padding-right: 20px;
      }
      .pic2 {
        order: 2;
        padding-left: 20px;
        padding-right: 20px;
      }
      .quote2 {
        order: 1;
        padding-left: 20px;
        padding-right: 20px;
      }
    }
    @media (max-width: 767px) {
      .pic-quote {      
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: center;
      }
      .pic1 {
        order: 1;
        max-width: 100%;
        height: auto;
      }
      .quote1 {
        order: 2;
      }
      .pic2 {
        order: 1;
        max-width: 100%;
        height: auto;
      }
      .quote2 {
        order: 2;
      }
    }
  }
`;
