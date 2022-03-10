import styled from 'styled-components'
import Excelsiorimg from '../img/Excelsior-dock.JPEG'
import ExcelsiorkayakSMALL from '../img/Excelsior-kayakSMALL.JPEG'

export const Container = styled.div`
  display: grid;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0px 0px 0px 0px;
  background-image:
    linear-gradient(to right top, rgba(245, 246, 252, 0.12), rgba(117, 19, 93, 0.73)),
    url(${Excelsiorimg});
  background-position: center 100 px left;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    background:     linear-gradient(to right, rgba(245, 246, 252, 0.12), rgba(117, 19, 93, 0.73)),
url(${ExcelsiorkayakSMALL});
    background-position: left 200px, top 20px;
  }
`
