import * as React from 'react';
import Img from 'gatsby-image';

interface PageTemplateProps {
  data: {
    productsCsv: {
      name: string
      price: string
      img: {
        childImageSharp: {
          sizes: any
        }
      }
    }
  }
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <div>
    <p>{data.productsCsv.name}</p>
    <Img sizes={data.productsCsv.img.childImageSharp.sizes}/>
  </div>
);

export default PageTemplate;

export const query = graphql`
  query ProductCsv($slug: String!) {
    productsCsv(fields: { slug: {eq: $slug} }) {
      name
      price
      img {
        childImageSharp {
          sizes(maxWidth: 900) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`;
