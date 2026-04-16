import styled from 'styled-components'
import { Download } from 'lucide-react'

import { Colors } from '../../styles'

export const Form = styled.form`
  margin-bottom: 80px;

  h2 {
    margin-bottom: 24px;
  }
`

export const InputGroup = styled.div`
  border: 1px solid ${Colors.gray};
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 16px;
`

export const Check = styled.input`
  margin-right: 8px;
`

export const Details = styled.input`
  margin-top: 8px;
  display: block;
  width: 100%;
  border: 1px solid ${Colors.gray};
  padding: 8px;
`

export const Summary = styled.div`
  h2 {
    margin-top: 40px;
    margin-bottom: 24px;
  }

  h3 {
    margin-bottom: 16px;
    margin-top: 16px;
  }

  p {
    margin-top: 8px;
  }
`

export const Icon = styled(Download)`
  height: 20px;
  color: ${Colors.purple};
`

export const Button = styled.button`
  margin-top: 32px;
  padding: 10px 16px;
  border: none;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${Colors.gray};
  color: ${Colors.purple};

  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: ${Colors.purple};
    color: ${Colors.white};
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);

    ${Icon} {
      color: ${Colors.white};
      transition: all 0.2s ease;
    }
  }

  &:active {
    transform: scale(0.97);
  }
`

export const Testes = styled.section`
  h2 {
    margin-bottom: 24px;
  }
`

export const Actions = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
`
