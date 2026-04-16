import styled from 'styled-components'

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-top: 16px;
  margin-bottom: 80px;
  max-width: 600px;

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
`

export const Title = styled.h3`
  margin-bottom: 12px;
  font-size: 16px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;

  border: 1px solid #ddd;
  border-radius: 8px;

  font-size: 14px;
`

export const CheckGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 12px 0;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    cursor: pointer;
  }
`

export const Details = styled.textarea`
  width: 100%;
  padding: 10px;

  border: 1px solid #ddd;
  border-radius: 8px;

  font-size: 14px;
  margin-bottom: 12px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`
