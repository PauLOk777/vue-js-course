import FilmGallery from "../components/FilmGallery.vue";

export default {
  title: "FilmGallery",
};

const Template = (args, { argTypes }) => ({
  components: { FilmGallery },
  props: Object.keys(argTypes),
  template: `<film-gallery v-bind="$props"/>`
});

export const Empty = Template.bind({});

export const With_Cards = Template.bind({});
With_Cards.args = {
  cards: [
    {
      imageUrl: "https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/pulp-fiction-cover-i1288.jpg",
      title: "Pulp Fiction",
      genre: "Oscar winning Movie",
      releaseDate: "1994"
    },
    {
      imageUrl: "https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/pulp-fiction-cover-i1288.jpg",
      title: "Pulp Fiction",
      genre: "Oscar winning Movie",
      releaseDate: "1994"
    },
    {
      imageUrl: "https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/pulp-fiction-cover-i1288.jpg",
      title: "Pulp Fiction",
      genre: "Oscar winning Movie",
      releaseDate: "1994"
    },
    {
      imageUrl: "https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/pulp-fiction-cover-i1288.jpg",
      title: "Pulp Fiction",
      genre: "Oscar winning Movie",
      releaseDate: "1994"
    }
  ]
};
