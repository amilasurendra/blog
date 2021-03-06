import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../../content/meta/config";

const Seo = props => {
  const { data } = props;
  const pageTitle = props.pageTitle;
  const postTitle = ((data || {}).frontmatter || {}).title;
  const postDescription = ((data || {}).frontmatter || {}).description;
  const postSlug = ((data || {}).fields || {}).slug;

  const title = config.shortSiteTitle + " - " + (postTitle || pageTitle)
  const description = postDescription ? postDescription : config.siteDescription;
  const url = config.siteUrl + config.pathPrefix + postSlug;

  return (
    <Helmet
      htmlAttributes={{
        lang: config.siteLanguage,
        prefix: "og: http://ogp.me/ns#"
      }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

Seo.propTypes = {
  data: PropTypes.object
};

export default Seo;
