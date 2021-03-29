import SearchInput from "../components/SearchInput.vue";

export default {
  title: "SearchInput",
  component: SearchInput
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchInput },
  template: '<search-input v-bind="$props" />'
});

export const DefaultSearchInput = Template.bind({});
DefaultSearchInput.args = {
  placeholder_text: "Search",
  width_percentage: 80
};
