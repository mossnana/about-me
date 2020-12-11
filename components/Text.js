const { default: styled } = require("styled-components");

const Text = ({ tag, color, size, children }) => {
  let Style;
  const css = `
    font-size: ${size};
    color: ${color};
  `;
  switch (tag) {
    case "div":
      Style = styled.div`
        ${css}
      `;
      break;
    case "p":
      Style = styled.p`
        ${css}
      `;
      break;
    case "h1":
      Style = styled.h1`
        ${css}
      `;
      break;
    case "h2":
      Style = styled.h2`
        ${css}
      `;
      break;
    case "h3":
      Style = styled.h3`
        ${css}
      `;
      break;
    case "h4":
      Style = styled.h4`
        ${css}
      `;
      break;
    case "h5":
      Style = styled.h5`
        ${css}
      `;
      break;
    case "h6":
      Style = styled.h6`
        ${css}
      `;
      break;
    case "span":
      Style = styled.span`
        ${css}
      `;
      break;
    default:
      Style = styled.p`
        ${css}
      `;
  }
  return <Style>{children}</Style>;
};

export default Text;
