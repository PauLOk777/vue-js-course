import Logo from '../components/Logo.vue';

export default {
  title: 'Logo',
  component: Logo
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Logo },
  template: '<logo v-bind="$props" />',
});

export const DefaultLogo = Template.bind({});
DefaultLogo.args = {
  company_name: "netflix",
  app_name: "roulette"
};
