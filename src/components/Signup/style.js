import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const SignupPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 200px 100px;
  gap: 10px;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 20px;
    height: 931px;
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
  height: 656px;
  background: rgba(245, 247, 255, 0.85);
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
    gap: 20px;
    margin: auto;
    width: 375px;
    height: 880px;
    align-self: stretch;
    flex-grow: 1;
  }
`;

export const Image = styled.img`
  width: 450px;
  height: 536px;
  border-radius: 10px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
  @media (max-width: 768px) {
    width: 315px;
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
  height: 536px;
  flex: none;
  order: 1;
  flex-grow: 1;
  @media (max-width: 768px) {
    width: fit-content;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 450px;
  height: 146px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  @media (max-width: 768px) {
    gap: 16px;
    width: 315px;
    height: 106px;
    flex-grow: 0;
  }
`;

export const Headline = styled.h2`
  width: 450px;
  height: 50px;
  font-weight: bold;
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
    width: 315px;
    height: 38px;
    font-size: 32px;
    line-height: 120%;
    text-align: center;
    color: #2d2d2d;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const Subhead = styled.p`
  width: 450px;
  height: 76px;
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
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 450px;
  height: 350px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 315px;
    order: 2;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 450px;
  height: 270px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 315px;
  }
`;

export const TypeForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 20px;
  gap: 12px;
  width: 450px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #dbe3ff;
  border-radius: 10px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 315px;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 29px;
  height: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
  border-right: 1px solid #9cadf2;
  color: #9cadf2;
`;

export const Input = styled.input`
  width: 369px;
  height: 44px;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #3b3b3b;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
  border: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 234px;
    line-height: 140%;
  }
`;

export const SubmitHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 450px;
  height: 60px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 315px;
  }
`;

export const SubmitContainer = styled.div`
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
  align-self: stretch;
  flex-grow: 0;
  &:hover {
    border: 1px solid #dbe3ff;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    width: 315px;
  }
`;

export const Submit = styled.input`
  width: 118px;
  height: 22px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Error = styled.span`
  font-size: 12px;
  color: red;
  font-weight: bold;
`;
