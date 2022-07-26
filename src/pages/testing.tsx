type Props = {
  data: any
}
import { graphql, useStaticQuery } from "gatsby"

const Testing = ({
  data: {
    site: {
      info: { author },
    },
  },
}: Props) => {
  return <div>Testing</div>
}
export const data = graphql`
  query {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        person {
          age
          name
        }
        complexData {
          age
          name
        }
      }
    }
  }
`

export default Testing
