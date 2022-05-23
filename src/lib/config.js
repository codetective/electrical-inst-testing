const BASE_URL = "http://www.avetrix.com";
const API_BASE_URL = "http://api.avetrix.com";

const SEOTAGS = (title, path, desc) => {
  return [
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: BASE_URL + path,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: desc,
    },
    {
      property: "og:image",
      content: "Image URL",
    },
    {
      property: "twitter:card",
      content: "summary_large_card",
    },
    {
      property: "twitter:url",
      content: BASE_URL + path,
    },
    {
      property: "twitter:title",
      content: title,
    },
    {
      property: "twitter:description",
      content: desc,
    },
    {
      property: "twitter:image",
      content: "IMAGE_URL",
    },
  ];
};
export { SEOTAGS, BASE_URL, API_BASE_URL };
