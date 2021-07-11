import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home, Search, Cart, Menu } from './screens'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { cartReducer } from './cartReducer'

const Stack = createStackNavigator();

const store = createStore(cartReducer, applyMiddleware())

const App = () => {

  return (
	<Provider store={store}>
		<NavigationContainer>
			  <Stack.Navigator
			  	screenOptions={{
					  headerShown:false
				  }}
				initialRouteName={"Home"}
			  >
				  <Stack.Screen name="Home" component={Home}/>
				  <Stack.Screen name="Menu" component={Menu}/>
				  <Stack.Screen name="Search" component={Search}/>
				  <Stack.Screen name="Cart" component={Cart}/>
			  </Stack.Navigator>
		</NavigationContainer>
	</Provider>
  );
};


export default App;
