import * as contentful from "contentful";

class Contentful {
  client;
  contentTypes = {
    images: "images",
  };

  constructor() {
    this.client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }

  _getImageUrl(image) {
    return image.fields.file.url;
  }

  getAllImages() {
    return this.client
      .getEntries({ content_type: this.contentTypes.images, limit: 600 })
      .then((entry) => {
        return entry.items.map((entry) => {
          const { room, project, image, primaryImage } = entry.fields;

          return { room, project, url: this._getImageUrl(image), primaryImage };
        });
      });
  }
}

export default Contentful;
