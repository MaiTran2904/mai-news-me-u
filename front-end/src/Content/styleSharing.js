import styled from 'styled-components';

export const TestimonialStyles = styled.div`
  padding-bottom: 100px;
  text-align: center;
  position: relative;
  overflow: hidden;

  .img-map {
    height: 800px;
    align-items: center;
    margin: auto;
  }
  .testimonial-content {
    width: 100%;
    position: absolute;
    top: 0;
  }

  .testimonial-current {
    width: 520px;
    background: #ffffff;
    box-shadow: 0px -1px 55px rgba(59, 59, 59, 0.160784);
    border-radius: 12px;
    margin: auto;
    margin-top: 220px;
    text-align: center;
    position: relative;
    min-height: 480px;
    z-index: 1;
    .absolute {
      position: absolute;
      height: 100%;
      width: 500px;
      padding: 40px;
      transition: all 0.3s;
      opacity: 0;
    }
    #testimonial-0 {
      opacity: 1;
    }
  }
  .img-quote {
    margin: auto;
    margin-bottom: 20px;
    margin-top: 35px;
  }
  .testimonial-quote {
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: #1B1B1B;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }
  .testimonial-author {
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    margin-top: 30px;
    color: #eb9736;
  }

  .testimonial-description {
    text-align: center;
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 10px;
    color: #eb9736;
  }

  .testimonial-avatar {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: auto;
    background: #000000;
    border: 3px solid #ffffff;
    box-sizing: border-box;
    box-shadow: 0px 11px 20px rgba(148, 148, 148, 0.258824);
    z-index: 0;
    transition: all 0.5s;
    object-fit: cover;
  }
  .avatar0 {
    top: 160px;
    left: calc(100vw / 2 - 65px);
    z-index: 2;
  }
  .avatar1 {
    top: 100px;
    left: 25%;
  }
  .avatar2 {
    top: 300px;
    left: 10%;
  }
  .avatar3 {
    top: 710px;
    left: 30%;
  }
  .avatar4 {
    top: 500px;
    left: 80%;
  }
  .avatar5 {
    top: 200px;
    left: 90%;
  }

  .btn-prev {
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    top: 50%;
    left: -18px;
    display: flex;
    background-color: #eb9736;
    justify-content: center;
    flex-direction: column;
  }
  .btn-next {
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    top: 50%;
    right: -18px;
    display: flex;
    background-color: #eb9736;
    justify-content: center;
    flex-direction: column;
  }
`;
