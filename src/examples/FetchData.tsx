import { graphql, useStaticQuery } from "gatsby"

type Props = {}

const getData = graphql`
  query FirstQuery {
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
const FetchData = (props: Props) => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return <div>site title is: {title}</div>
}
export default FetchData
