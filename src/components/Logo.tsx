// import React from "react";
// import { Box, Text } from "@chakra-ui/react";
// import Image, { graphql, useStaticQuery } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
// // import GenevaLogoSmall from '../images/geneva-logo-small.png';

// function Logo({ data, ...props }) {
//   console.log(data);
  
//   const image = getImage(data.allPages.edges);
//   return (
//     <Box {...props}>
//       <GatsbyImage image={image} />
//     </Box>
//   );
// }

// const export pageQuery =
//   graphql`
//     query {
//       allFile(filter: { relativePath: { eq: "geneva-logo-small.png" } }) {
//         edges {
//           node {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//         }
//       }
//     }
//   `;

