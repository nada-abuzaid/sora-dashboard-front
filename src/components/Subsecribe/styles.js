import styled from 'styled-components';

const FeatureStyle = styled.div`
  display: flex;
  gap: 0.6rem;
  .icon {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.check};
  }
  p {
    font-family: "Nunito Sans", sans-serif;
    color: ${(props) => props.theme.colors.lightGray4};
  }
`;

const LeftStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .right {
    width: 50%;
    background-color: #275c61;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .mobile-container {
      background-color: #fff;
      width: 60%;
      height: 72%;
      border-radius: 10px;
      filter: drop-shadow(0px 0px 5px #e9e9e9);
      padding: 1rem;
      position: relative;
      .mobile-header {
        display: flex;
        flex-direction: column;
        .premium {
          font-family: "DM Serif Text", sans-serif;
          font-size: 2rem;
          color: ${({ theme }) => theme.colors.primary};
          text-align: center;
        }
        .desc {
          color: #404040;
          font-size: 1.125rem;
          text-align: justify;
          width: 85%;
          margin: 0 auto;
          font-family: "Nunito Sans", sans-serif;
        }
        .line {
          width: 90%;
          height: 1px;
          background-color: ${(props) => props.theme.colors.lightGray};
          margin: 1rem 0;
          align-self: center;
        }
      }
      .mobile-features {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0 1rem;
        font-size: 1.125rem;
        font-family: "Nunito Sans", sans-serif;
      }
      @media screen and (max-width: 768px) {
        height: 96%;
        margin: 1rem;
      }
    }
    .close-btn {
      color: #fff;
      border: none;
      background: none;
      cursor: pointer;
      font-size: 1.5rem;
      box-shadow: none;
      position: absolute;
      top: 2rem;
      right: 2rem;
      z-index: 10;
      opacity: 1;
      @media screen and (max-width: 768px) {
        opacity: 0;
      }
    }
    .scribble {
      position: absolute;
      &:nth-child(3) {
        width: 30%;
        top: -1rem;
        left: 0;
      }
      &:nth-child(4) {
        width: 20%;
        top: 16rem;
        left: 0;
      }
      &:nth-child(5) {
        width: 15%;
        top: 12rem;
        right: -0.5rem;
      }
      &:nth-child(6) {
        width: 6%;
        top: 23rem;
        right: 2rem;
      }
    }
  }
  .left-container {
    width: 50%;
    background-color: #fff;
    padding: 2rem 1rem;
    position: relative;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .left {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      font-family: "Nunito Sans", sans-serif;
      p:not(:first-child) {
        color: #404040;
        text-align: justify;
        font-size: 0.9rem;
        width: 75%;
        margin: 0 auto;
      }
      a {
        text-decoration: underline;
        color: #404040;
      }
      .title {
        align-self: center;
        position: relative;
        .scribbles {
          position: absolute;
          left: -4rem;
          top: -2.5rem;
          width: 6rem;
        }
        .section-title {
          font-family: "DM Serif Text", sans-serif;
          font-size: 2rem;
          text-align: center;
          width: 100%;
        }
        @media only screen and (max-width: ${({ theme: { screens } }) => screens.mobile}) {
          .scribbles {
            display: none;
          }
          .section-title {
            font-size: 1.8em;
          }
          
        }
      }
    }
    .image {
      width: 50%;
      height: 40%;
      margin: 2rem;
    }
  }
`;

const StyledCloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
  opacity: 0;
  @media screen and (max-width: 768px) {
    opacity: 1;
  }
`;

const UpgradeStyle = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  .upgrade {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    padding: 4rem 0.8rem 2rem 0.8rem;
    margin-top: 2rem;
    background-color: #f4f7f7;
    width: 85%;
    height: 87%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    @media only screen and (max-width: 600px) {
      width: 70%;
    }
    .upgrade-img {
      width: 40%;
      position: absolute;
      top: 0;
      @media screen and (max-width: 600px) {
        top: -3.5rem;
      }
      @media screen and (max-width: 435px) {
        top: -1.5rem;
      }
    }
    .title {
      font-family: "DM Serif Text", sans-serif;
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 0;
      width: 80%;
    }
    .desc {
      font-family: "Nunito Sans", sans-serif;
      text-align: center;
      font-size: 0.9rem;
      width: 100%;
    }
    .btn-more {
      padding: 0.5rem 2rem;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      background: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
      color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
    }
  }
`;

export {
  FeatureStyle, LeftStyle, StyledCloseButton, UpgradeStyle,
};
