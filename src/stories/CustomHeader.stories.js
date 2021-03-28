import CustomHeader from '../components/CustomHeader.vue';

export default {
  title: 'CustomHeader',
  component: CustomHeader
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CustomHeader },
  template: '<custom-header v-bind="$props" />',
});

export const DefaultCustomHeader = Template.bind({});
DefaultCustomHeader.args = {
  company_name: "netflix",
  app_name: "roulette"
};
