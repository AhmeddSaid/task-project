import { Link } from "react-router-dom";
import styled from "styled-components";

export const WelcomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 200px 100px;
  gap: 10px;
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
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
  height: 435px;
  background: rgba(245, 247, 255, 0.85);
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 0px;
    gap: 40px;
    width: 375px;
    height: 647px;
  }
`;

export const Image = styled.img`
  width: 450px;
  height: 315px;
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 1;
  @media (max-width: 768px) {
    width: 315px;
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
  height: 225px;
  flex: none;
  order: 1;
  flex-grow: 1;
  @media (max-width: 768px) {
    gap: 20px;
    width: 315px;
    height: 212px;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 450px;
  height: 125px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 315px;
    height: 135px;
    order: 1;
  }
`;

export const Title = styled.h1`
  width: 315px;
  height: 67px;
  font-size: 56px;
  line-height: 67px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #2d2d2d;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    width: 315px;
    height: 80px;
  }
`;

export const Subhead = styled.p`
  width: 450px;
  height: 38px;
  font-size: 24px;
  line-height: 38px;
  color: #1f1249;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  @media (max-width: 768px) {
    width: 315px;
    height: 52px;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
  }
`;

export const ButtonHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 450px;
  height: 60px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 315px;
  }
`;

export const Button = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 50px;
  gap: 12px;
  width: 450px;
  height: 60px;
  background: linear-gradient(113.87deg, #2663df 14.81%, #758ff0 88.76%);
  box-shadow: 0px 6px 18px #9cadf2;
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 1;
  text-decoration: none;
  @media screen {
    width: 315px;
    flex-grow: 0;
  }
`;

export const Text = styled.span`
  width: 89px;
  height: 22px;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 140%;
  }
`;
