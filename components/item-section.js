import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { icons, images, SIZES, COLORS, FONTS } from "../constants";


const ItemSection = (props) => {


	const renderImage = () => {
		return (
        	<View style={styles.sectionImage}>
        	    <View style={styles.backgroundImg}>
					<Image source = {images.taco} style={styles.imageRender}/>
				</View>
        	</View>
		);
	}

	const renderDescription = () => {
		return (
        	<View style={styles.sectionDescription}>
        	    <Text style={styles.itemTitle}>{props.name}</Text>
        	    <Text style={styles.itemDescription}>Lorem ipsum dolor</Text>
                <Text style={styles.itemPrice}>$ {props.price}</Text>
        	</View>
		);
	}
    
	const renderButton = () => {
        return (
            <View style={styles.sectionButton}>
        	    <TouchableOpacity
					onPress={() => {props.nav()}}
					style={styles.openItemButton}
				>
                    <Text style={styles.openItemButtonText}>Agregar</Text>
				</TouchableOpacity>
        	</View>
		);
	}

    return(
    	<View style={styles.itemContainer}>
			{renderImage()}
			{renderDescription()}
			{renderButton()}
    	</View>
    );
}

const styles = StyleSheet.create({
    itemPrice:{
        color: '#ffc108',
        fontWeight:'bold',
        fontSize:17
    },
	LineSection:{
		backgroundColor:'gray',
		height:40
	},
	openItemButtonText:{
		color: COLORS.white,
		fontWeight:'bold'
	},
	openItemButton:{
		backgroundColor:COLORS.black,
		paddingHorizontal:10,
		paddingVertical:5,
		borderRadius:20
	},
	itemDescription:{
		color:COLORS.darkgray,
	},
	itemTitle:{
		fontWeight:'bold',
		fontSize:20
	},
	imageRender:{
		width:'90%',
		height:'90%',
		justifyContent:'center',
		borderRadius:100
	},
	backgroundImg:{
		height:70,
		width:70,
		backgroundColor: COLORS.redblack,
		borderRadius:100,
		justifyContent:'center',
		alignItems:'center'
	},
	itemContainer:{
        flex:1,
        flexDirection:'row',
        height:89
	},
	sectionImage:{
        flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	sectionDescription:{
        flex:2,
		paddingVertical:10
	},
	sectionButton:{
        flex:1.3,
		alignItems:'center',
		justifyContent:'center'
	},
});

export default ItemSection