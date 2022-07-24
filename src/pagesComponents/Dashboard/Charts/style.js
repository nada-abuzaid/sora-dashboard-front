import styled from 'styled-components';

const ChartStyle = styled.div`
  box-shadow: 1px 1px 4px 2px #e1e1e1;
  width: 100%;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  height: 100%;
  max-height: 100%;
  &:last-child {
    width: 90%;
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }
  p {
    font-family: "DM Serif Text";
    font-size: 1.2rem;
  }
  .chart {
    width: 85%;
    height: 90%;
    margin-top: 1rem;
  }
  .chart-bar {
    width: 100%;
    height: 80%;
    max-height: 85%;
  }
  .texts {
    a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      font-family: "Nunito Sans";
      text-decoration: underline;
    }
    .text2 {
      font-weight: 100;
      font-family: "Nunito Sans";
      font-size: 0.9rem;
    }
  }
`;

export default ChartStyle;
