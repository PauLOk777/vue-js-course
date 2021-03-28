import HugeFontParagraph from '../components/HugeFontParagraph.vue';

export default {
  title: 'HugeFontParagraph',
  component: HugeFontParagraph
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HugeFontParagraph },
  template: '<huge-font-paragraph v-bind="$props" />',
});

export const DefaultHugeFontParagraph = Template.bind({});
DefaultHugeFontParagraph.args = {
  text: "FIND YOUR MOVIE",
  color: "black"
}
