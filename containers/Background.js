import styled from 'styled-components'

const WelcomeBackgrond = ({ children }) => {
  const Style = styled.div`
    height: 100vh;
    background-image: url("/images/welcome-background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;
  return <Style>{children}</Style>;
};

export default WelcomeBackgrond
