import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 14rem;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media (max-width: 768px) {
    height: 2rem;
    margin-top: 140px;
  }
`

const Title = styled.h1`
  justify-content: center;
  font-size: 10rem;
  color: palegoldenrod;
  @media (max-width: 768px) {
    font-size: 3.4rem;
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <Title>FASHIONBOAT</Title>
    </StyledHeader>
  )
}
