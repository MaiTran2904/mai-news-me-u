import styled from 'styled-components';

export const SlideSectionStyles = styled.div`
  background: #faca61;

  .title {
    font-size: 48px;
    color: #000000;
    text-decoration: none;
    background-color: transparent;
    font-weight: bold;
  }

  .slide-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 90px;
  }
  .card {
    padding: 10px 15px 100px;
    border-radius: 28px;
    margin: 0px 20px 40px;
    height: 400px !important;
  }

  .slick-current {
    margin-top: -40px;
  }

  .slick-slide {
    padding-top: 50px !important;
  }

  .slick-dots {
    display: flex !important;
    flex-direction: row;
    justify-content: center;
    li {
      background: #fff;
      width: 50px !important;
      height: 6px;
      border-radius: 3px;
      overflow: hidden;
      button {
        background: #transparent;
        border: none;
        width: 100%;
      }
  }

    .slick-active {
      button {
        background: #16457B !important;
        border: none;
        width: 100%;
      }
    }
  }

  .slick-list {
    overflow-y: visible;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1470px) {
    padding: 50px 0;
    overflow: visible;

    .slide-section {
      margin-bottom: 40px;
    }

    .card {
      padding-bottom: 45px !important;

      .card-content {
        padding: 15px 20px;
      }
    }

    .ant-avatar {
      width: 60px !important;
      height: 60px !important;
      line-height: 60px !important;
    }

    .slick-dots {
      li {
        width: 30px;
        height: 4px;
        border-radius: 2px;
      }
    }
  }

  @media (max-width: 550px) {
    padding: 30px 0;
    
    .ant-avatar {
      width: 50px !important;
      height: 50px !important;
      line-height: 50px !important;
    }

    .slick-slide {
      > div {
        position: absolute;
        opacity: 0;
      }
    }

    .slick-dots {
      li {
        width: 24px !important;
        height: 3px;
        border-radius: 1px;
      }
    }

    .slick-current {
      width: 90vw !important;
      transform: translateX(-32%);
      > div {
        position: relative;
        opacity: 1;
      }
    }
  }
`;

export const BlogCardItemStyle = styled.div`
  height: 100%;
  .ant-card {
    height: 100%;
  }
  .description {
    margin-top: 20px;
    .des-content {
      p {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #454545;
      }
    }
  }

  .ant-card-hoverable:hover {
    box-shadow: none;
  }

  .ant-card-body {
    padding: 15px 0px 0px;
  }

  .ant-card {
    border-radius: 10px;
    border: none;
  }

  .ant-card-meta-title {
    margin-top: 18px;
    white-space: normal;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
  }

  .ant-card-meta-description {
    max-height: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .ant-tag {
    border: none;
  }

  .ant-card-cover img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
  }
`
