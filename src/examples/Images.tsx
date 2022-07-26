type Props = {}
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import big from "../assets/images/big.jpg"

const Images = (props: Props) => {
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/recipe-1.jpeg"
        alt="food"
        placeholder="tracedSVG"
      ></StaticImage>
      <StaticImage
        src="../assets/images/big.jpg"
        alt="food static image"
        // TODO: show all options below!
        placeholder="tracedSVG"
      ></StaticImage>
      <img src={big} alt="food" />
      <h2>Gatsby Images</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`
export default Images
