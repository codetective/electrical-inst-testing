import React from "react";
import { NextSeo } from "next-seo";
import { SEOTAGS } from "../config";

function SEO({ title, desc, path }) {
  return (
    <NextSeo
      title={title}
      description={desc}
      canonical={path}
      additionalMetaTags={SEOTAGS(title, desc, path)}
    />
  );
}

export default SEO;
