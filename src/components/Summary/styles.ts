import styled from 'styled-components'

export const Summary = styled.div`
  background: #fff;
  padding: 32px;
  padding-bottom: 80px;
  width: 794px; /* 🔥 largura A4 em px */
  min-height: 1123px; /* 🔥 altura A4 */
  margin: 0 auto;
  font-family: Arial, sans-serif;
  color: #222;
  line-height: 1.4;

  h2 {
    font-size: 16px;
    margin-bottom: 32px;
    padding-left: 8px;
  }

  &.pdf-mode {
    width: 100%;
    padding: 16px;
  }
`

// HEADER
export const Header = styled.div`
  text-align: center;

  img {
    width: 200px;
    margin-bottom: 8px;
  }

  h1 {
    font-size: 22px;
    margin-bottom: 4px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`

export const Meta = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #777;
`

// DIVISOR
export const Divider = styled.hr`
  margin: 16px 0;
  border: none;
  border-top: 1px solid #ddd;
`

// SECTION
export const Section = styled.div`
  padding-bottom: 150px;

  page-break-inside: avoid;
  break-inside: avoid;

  h3 {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 4px;
    color: #444;
  }

  .pdf-mode & {
    margin-bottom: 24px;
  }
`

// CHECKLIST ITEM
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 4px 0;
  font-size: 13px;

  break-inside: avoid;

  span:first-child {
    font-weight: bold;
    width: 16px;
  }

  small {
    margin-left: auto;
    color: #777;
    font-size: 12px;
  }
`

// GRID DOS TESTES
export const TestGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  /* 🔥 PDF MODE */
  .pdf-mode & {
    display: block;
  }
`

// CARD DO TESTE
export const TestCard = styled.div`
  border: 1px solid #e5e7eb;
  border-left: 4px solid #6c63ff;
  border-radius: 10px;
  padding: 12px;
  background: #f9fafb;
  font-size: 13px;
  margin-bottom: 24px;

  page-break-inside: avoid;
  break-inside: avoid;

  /* 🔥 PDF MODE */
  .pdf-mode & {
    width: 100%;
    margin-bottom: 12px;
  }
`

export const TestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  strong {
    font-size: 14px;
  }

  small {
    font-size: 11px;
    color: #777;
  }
`

// CHECKS
export const CheckGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;

  span {
    font-size: 12px;
  }
`

// OBS
export const Obs = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #555;
  background: #fff;
  padding: 6px;
  border-radius: 4px;
`

// FOOTER
export const Footer = styled.div`
  margin-top: 32px;
  text-align: center;
  font-size: 11px;
  color: #999;

  border-top: 1px solid #eee;
  padding-top: 8px;
`

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 10px;

  button {
    border: none;
    padding: 6px 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 11px;
    font-weight: 500;
  }

  .pdf-mode & {
    display: none; // 🔥 some no PDF
  }
`

export const InfoBox = styled.div`
  margin-top: 12px;
  font-size: 13px;
  line-height: 1.6;
  text-align: left;

  p {
    margin: 2px 0;
  }
`

export const SignatureSection = styled.div`
  padding-bottom: 50px;

  ul {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
`

export const SignatureBox = styled.li`
  text-align: center;
  font-size: 12px;
  margin-bottom: 16px;
  color: #444;
`

export const SignatureLine = styled.div`
  border-top: 1px solid #ddd;
  margin-bottom: 8px;
`
