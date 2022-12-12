import React from "react";
import { SuccessPage, Container, Image, Content, Head, Headline, Subhead } from "./style";

const Success = () => {
  const email = localStorage.getItem("email");

  return (
    <SuccessPage>
      <Container>
        <Image
          src="assets/Image-Placeholder3.png"
          alt=""
        />
        <Content>
          <Head>
            <Headline>Successfully Logged In</Headline>
            <Subhead
              href="mailto:"
              className="subhead"
            >
              {email}
            </Subhead>
          </Head>
        </Content>
      </Container>
    </SuccessPage>
  );
};

export default Success;
