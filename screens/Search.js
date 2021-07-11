import React from "react"

import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    View,
    Text,
    ScrollView,
    TextInput
} from "react-native"

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { ItemSection } from "../components";




const Search = ({ navigation }) => {

    let back = "<"

    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={ () => navigation.goBack() } style={styles.backButton}>
                    <Text style={styles.backIcon}>{back}</Text>
                </TouchableOpacity>
                <Text style={styles.menuName}>Busqueda</Text>
            </View>
        );
    }

    const renderItems = () => {
        return (
            <View style={styles.renderItemsContainer}>
                <View>
                    <TextInput></TextInput>
                </View>
                <ScrollView>
                    <ItemSection name={"item.name"} price={"item.price"}></ItemSection>
                    <ItemSection name={"item.name"} price={"item.price"}></ItemSection>
                    <ItemSection name={"item.name"} price={"item.price"}></ItemSection>
                    <ItemSection name={"item.name"} price={"item.price"}></ItemSection>
                    <ItemSection name={"item.name"} price={"item.price"}></ItemSection>
                    <ItemSection name={"item.name"} price={"item.price"}></ItemSection>
                    <ItemSection name={"item.name"} price={"item.price"}></ItemSection>
                    <ItemSection name={"item.name"} price={"item.price"}></ItemSection>

                </ScrollView>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            {renderHeader()}
            {renderItems()}
        </View>
    )
}

const styles = StyleSheet.create({
    itemsFormat:{
        color:'gray',
        fontSize:17,
        padding:10
    },
    renderItemsContainer:{
        backgroundColor:COLORS.lightGray,
        flex:1
    },
    menuName:{
        color:COLORS.white,
        paddingLeft:10,
        fontWeight:'bold',
        fontSize:30
    },
    backIcon:{
        fontWeight:'bold',
        fontSize:20,
        color:COLORS.orange
    },
    backButton:{
        backgroundColor:COLORS.white,
        borderRadius:100,
        height:40,
        width:40,
        justifyContent:'center',
        alignItems:'center'
    },
    headerContainer:{
        backgroundColor: COLORS.orange,
        flex:0.12,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 10
    },
    container:{
        flex:1,
        backgroundColor: COLORS.black
    }

})

export default Search