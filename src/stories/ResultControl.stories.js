import ResultControl from '../components/ResultControl.vue';

export default {
  title: 'ResultControl',
  component: ResultControl
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ResultControl },
  template: '<result-control v-bind="$props" />',
});

export const DefaultResultControl = Template.bind({});
DefaultResultControl.args = {
  number_of_movies: 0,
  first_option: "RELEASED DATE",
  second_option: "RATING",
  options_name: "sort_by"
};
