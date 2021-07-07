import React from 'react'
import { View, StyleSheet } from 'react-native'

const LineSection = () => {
	return(
		<View style={styles.LineSection}></View>
	);
}

const styles = StyleSheet.create({
	LineSection:{
		backgroundColor:'gray',
		height:1
	},
});

export default {LineSection}