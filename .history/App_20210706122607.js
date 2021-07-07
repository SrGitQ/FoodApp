import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { LineSection } from './components';


const App = () => {

  return (
	  <>
	  	<View style={styles.globalContainer}>
			  <Text>HOLA</Text>
			  <LineSection></LineSection>
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
