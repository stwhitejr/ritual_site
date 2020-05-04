import styled, {css} from 'styled-components';
import {colors} from '@root/components/theme';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  background: ${colors.base};
  color: ${colors.base};
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  outline: none;
  &:hover {
    background: ${colors.light}
  }

  ${props =>
    props.primary &&
    css`
      background: ${colors.primary};
      color: ${colors.white};
    `};
`;

export default Button;
