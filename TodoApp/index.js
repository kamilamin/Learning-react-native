/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import TodoList from './components/TodoList'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TodoList);
