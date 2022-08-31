import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "0jiowjxw",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// don't forget to whitelist localhosts 3000 & 19006 on sanity.io --> api --> cors origins
// or in terminal go to sanity folder and run `sanity cors add http://localhost:3000`

export default client;
