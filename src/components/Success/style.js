import styled from "styled-components";

export const SuccessPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 200px 100px;
  gap: 10px;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #a9c9ff;
  background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 60px;
  gap: 60px;
  width: 1080px;
  height: 576px;
  background: rgba(245, 247, 255, 0.85);
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 46px;
    gap: 30px;
    width: 100%;
    height: 730px;
    align-self: stretch;
    flex-grow: 1;
  }
`;

export const Image = styled.img`
  width: 450px;
  height: 456px;
  border-radius: 10px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
  @media (max-width: 768px) {
    width: 322px;
    height: 315px;
    flex-grow: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 450px;
  height: 96px;
  flex: none;
  order: 1;
  flex-grow: 1;
  @media (max-width: 768px) {
    width: fit-content;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 450px;
  height: 96px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Headline = styled.h1`
  width: 450px;
  height: 50px;
  font-size: 42px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #2d2d2d;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 335px;
    height: 38px;
    font-size: 32px;
    line-height: 120%;
    text-align: center;
  }
`;

export const Subhead = styled.a`
  width: 450px;
  height: 26px;
  font-size: 16px;
  line-height: 26px;
  text-decoration-line: underline;
  color: #1f1249;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 315px;
    height: 26px;
    font-size: 16px;
    text-align: center;
    order: 3;
  }
`;
