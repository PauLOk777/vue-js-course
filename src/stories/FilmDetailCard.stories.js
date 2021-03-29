import FilmDetailCard from "../components/FilmDetailCard.vue";

export default {
  title: "FilmDetailCard"
};

const Template = (args, { argTypes }) => ({
  components: { FilmDetailCard },
  props: Object.keys(argTypes),
  template: `<film-detail-card v-bind="$props"/>`
});

export const PulpFiction = Template.bind({});
PulpFiction.args = {
  imageUrl:
    "https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/pulp-fiction-cover-i1288.jpg",
  title: "Pulp Fiction",
  genre: "Oscar winning Movie",
  releaseDate: 1994,
  rate: 4.5,
  duration: 178,
  description:
    "Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin " +
    "Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce " +
    "Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The " +
    "title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, " +
    "known for their graphic violence and punchy dialogue."
};
