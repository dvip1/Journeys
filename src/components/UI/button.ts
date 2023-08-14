import styled from 'styled-components';
import { colors } from '../../styles/homeStyle';
const buttonStyles = `
  border: none;
  padding: 0.8rem 1.3rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin: 1rem 0.5rem;
  transition: all 0.2s ease-in-out;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:hover {
    transform: translate(0, -3px);
  }
`;
export const CustomButton = styled.button`
font-size: 1rem;
font-weight: 500;
cursor: pointer;
margin: 1rem 0.5rem;
transition: all 0.2s ease-in-out;
letter-spacing: 1px;
text-transform: uppercase;
&:hover {
  transform: translate(0, -3px);
}
`;
export const PrimaryButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  ${buttonStyles}
  &:hover {
    box-shadow: 0 20px 80px -10px ${colors.primary};
  }
  @media (max-width: 380px) {
    margin: 1rem 0.25rem;
  }
`;

export const SecondaryButton = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.text};
  ${buttonStyles}
  &:hover {
    box-shadow: 0 20px 80px -10px ${colors.secondary};
  }
  @media (max-width: 380px) {
    margin: 1rem 0.25rem;
  }
`;