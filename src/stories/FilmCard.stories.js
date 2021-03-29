import FilmCard from "../components/FilmCard.vue";

export default {
  title: "FilmCard"
};

const Template = (args, { argTypes }) => ({
  components: { FilmCard },
  props: Object.keys(argTypes),
  template: `<film-card v-bind="$props"/>`
});

export const PulpFiction = Template.bind({});
PulpFiction.args = {
  imageUrl:
    "https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/pulp-fiction-cover-i1288.jpg",
  title: "Pulp Fiction",
  genre: "Oscar winning Movie",
  releaseDate: 1994
};
