import React from "react";
import { WelcomePage, Container, Image, Content, Head, Title, Subhead, ButtonHolder, Button, Text } from "./style";

const Welcome = () => {
  return (
    <WelcomePage>
      <Container>
        <Image
          src="assets/Image-Placeholder.png"
          alt=""
        />
        <Content>
          <Head>
            <Title>Welcome</Title>
            <Subhead>We're glad you're here! Sign up to start</Subhead>
          </Head>
          <ButtonHolder>
            <Button to="/task-project/signup">
              <Text>Get Started</Text>
            </Button>
          </ButtonHolder>
        </Content>
      </Container>
    </WelcomePage>
  );
};
export default Welcome;
