/**
 * @format
 */

import { AppRegistry } from "react-native";
import AppNavigator from "./src/Navigator/AppNavigator";
//import Home from "./src/screen/Home";
import { name as appName } from "./app.json";
AppRegistry.registerComponent(appName, () => AppNavigator);
