import React from "react"
import { View, StyleSheet } from 'react-native'

const LineSection = () => {
	return(
		<View style={styles.lineDivisor}></View>
	);
}

const styles = StyleSheet.create({
	lineDivisor:{
		backgroundColor:'gray',
		height:1
	},
});

export default LineSection