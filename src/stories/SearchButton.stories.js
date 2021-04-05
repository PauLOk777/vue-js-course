import SearchButton from "../components/SearchButton.vue";

export default {
  title: "SearchButton",
  component: SearchButton
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchButton },
  template: '<search-button v-bind="$props" />'
});

export const DefaultSearchButton = Template.bind({});
DefaultSearchButton.args = {
  text: "SEARCH",
  width_percentage: 20
};
