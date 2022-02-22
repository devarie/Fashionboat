import styled from 'styled-components'
import logo from '../png/FashionBoat_logo.png'
const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 14rem;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
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

/* ... */

const HeaderImg = styled.img.attrs({
  src: `${logo}`
})`
width: 50vh;
height: 30vh;
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderImg />
    </StyledHeader>
  )
}
