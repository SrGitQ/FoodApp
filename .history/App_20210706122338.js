import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import LineSection from './components';


const App = () => {

  return (
	  <>
	  	<View style={styles.globalContainer}>
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
