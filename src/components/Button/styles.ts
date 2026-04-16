import styled from 'styled-components'

type Props = {
  variant: 'primary' | 'secondary'
}

export const Button = styled.button<Props>`
  padding: 10px 16px;
  border-radius: 10px;
  border: none;

  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  transition: all 0.2s ease;

  ${({ variant }) =>
    variant === 'primary'
      ? `
        background: #298046;
        color: white;

        &:hover {
          background: #356d48;
        }
      `
      : `
        background: #f1f1f1;
        color: #333;

        &:hover {
          background: #ddd;
        }
      `}

  &:active {
    transform: scale(0.97);
  }
`
