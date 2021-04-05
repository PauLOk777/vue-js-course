import NavigationBar from "../components/NavigationBar.vue";

export default {
  title: "NavigationBar",
  component: NavigationBar
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavigationBar },
  template: '<navigation-bar v-bind="$props" />'
});

export const DefaultNavigationBar = Template.bind({});
