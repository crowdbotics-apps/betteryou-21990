import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList2162355Navigator from '../features/ArticleList2162355/navigator';
import ArticleList3162354Navigator from '../features/ArticleList3162354/navigator';
import Settings162320Navigator from '../features/Settings162320/navigator';
import BlankScreen0162315Navigator from '../features/BlankScreen0162315/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList2162355: { screen: ArticleList2162355Navigator },
ArticleList3162354: { screen: ArticleList3162354Navigator },
Settings162320: { screen: Settings162320Navigator },
BlankScreen0162315: { screen: BlankScreen0162315Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
