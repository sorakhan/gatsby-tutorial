import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

function BlogPage({ data }) {
  return (
    <Layout pageTitle="My Blog">
      <ul>
        {data.allFile.nodes.map((node) => {
          return node.absolutePath.includes(".mdx") ? (
            <li key={node.name}>{node.name}</li>
          ) : null;
        })}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
        absolutePath
      }
    }
  }
`;

export default BlogPage;
