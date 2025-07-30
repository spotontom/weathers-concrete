import styled from "styled-components";

export const StyledGallery = styled.section`
  padding: 2rem;
  text-align: center;

  h3 {
    color: #1e90ff;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .slick-slide img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    max-height: 500px;
    object-fit: cover;
  }

  .slick-dots li button:before {
    color: #1e3a8a;
  }
`;