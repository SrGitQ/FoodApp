/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const App = () => {

  return (
	  <>
	  	<View style={styles.globalContainer}>
	  	</View>
	  </>
  );
};

const styles = StyleSheet.create({
	globalContainer:{
		backgroundColor:'white',
		flex:1,
	},
});


export default App;


