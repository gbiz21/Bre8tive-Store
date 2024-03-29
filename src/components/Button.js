import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  color: ${prop => (prop.cart ? "blue" : "black")};
  border-color: ${props => (props.cart ? "blue" : "black")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.2rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: #e6e6e6;
  }
  &:focus {
    outline: none;
  }
`;
