import RadioChoose from "../components/RadioChoose.vue";

export default {
  title: "RadioChoose",
  component: RadioChoose
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RadioChoose },
  template: '<radio-choose v-bind="$props" style="background-color: #555555" />'
});

export const DefaultRadioChoose = Template.bind({});
DefaultRadioChoose.args = {
  text: "Search by",
  first_option: "Title",
  second_option: "Genre",
  options_name: "for_storybook"
};
