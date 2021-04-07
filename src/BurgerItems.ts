import { MenuItem } from './MenuItems';

export interface Burger extends MenuItem {
  contents: MenuItem[];
}
