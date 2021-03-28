import CustomFooter from '../components/CustomFooter.vue';

export default {
  title: 'CustomFooter',
  component: CustomFooter
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CustomFooter },
  template: '<custom-footer v-bind="$props" />',
});

export const DefaultCustomFooter = Template.bind({});
DefaultCustomFooter.args = {
  company_name: "netflix",
  app_name: "roulette"
};
