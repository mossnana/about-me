import React from "react";
import styled from "styled-components";

const StyledNotFoundSpaceMan = styled.div`
  html, body {
    height: 100%;
    margin: 0px;
  }

  .full-screen {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .half-screen {
    width: 50%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  h1 {
    font-size: 40px;
  }
`;

export const NotFoundSpaceMan = () => {
  return (
    <StyledNotFoundSpaceMan>
      <div className="full-screen">
        <div className="half-screen">
          Hello
        </div>
        <div className="half-screen">
          <h1>404</h1>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <h2>Page not found</h2>
        </div>
      </div>
    </StyledNotFoundSpaceMan>
  );
};
