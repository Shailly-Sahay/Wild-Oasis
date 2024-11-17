import styled from "styled-components";

const Heading = styled.h1`
  font-size: ${(props) => {
    switch (props.as) {
      case "h1":
        return "3rem";
      case "h2":
        return "2rem";
      case "h3":
        return "2rem";
    }
  }};

  font-weight: ${(props) => {
    switch (props.as) {
      case "h1":
        return "600";
      case "h2":
        return "600";
      case "h3":
        return "500";
    }
  }};
`;

export default Heading;
