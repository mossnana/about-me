import styled from "styled-components";

const WoodBox = ({ children, height, width }) => {
  const Styles = styled.div`
    .woodbox-controller {
      height: ${height};
      width: ${width};
      margin: auto !important;
    }
    .woodbox-container {
      background-image: url("/images/texture-wood.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.9;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  `;
  return (
    <Styles>
      <div className="woodbox-controller woodbox-container">
        <div className="woodbox-controller nes-container is-rounded">
          {children}
        </div>
      </div>
    </Styles>
  );
};

export default WoodBox;
