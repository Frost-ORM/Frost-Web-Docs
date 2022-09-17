import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import ApiNavbarItem from '@site/src/components/NavbarItems/ApiNavbarItem';
import ExampleNavbarItem from '@site/src/components/NavbarItems/ExampleNavbarItem';
import FslNavbarItem from '@site/src/components/NavbarItems/FslNavbarItem';

export default {
  ...ComponentTypes,
  'custom-api-navbar-item': ApiNavbarItem,
  'custom-example-navbar-item': ExampleNavbarItem,
  'custom-fsl-navbar-item': FslNavbarItem,
};