import styled from 'styled-components'
import Excelsiorimg from '../img/Excelsior-dock.JPEG'
import Excelsiorkayak from '../img/Excelsior-kayak.JPEG'

export const Container = styled.div`
  display: grid;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0px 0px 0px 0px;
  background: url(${Excelsiorimg});
  background-position: center 100 px left;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    background: url(${Excelsiorkayak});
    background-position-x: -150px, center;
  }
`
