import styled from '@emotion/styled';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-bottom: 2rem;

  .sub-heading {
    font-size: 25px;
    max-width: 85%;
    margin-bottom: 1rem;
  }

  .list {
    color: #000;
  }

  .list-item {
    margin: 15px 0 10px 0;
    list-style: none;
  }

  .source {
    margin-top: 2rem;
  }
`;
