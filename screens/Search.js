import React, { useState } from "react"

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
import { generalMenu } from "../components/src/menu-data";




const Search = ({ navigation }) => {
    const [search, setSearch] = useState("Hola")

    const getCoincidence = (seacrh) => {
        const cons = []
        generalMenu.map( item => {
        })
    }


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
                    <TextInput 
                        style={styles.searchBox}
                        onSubmitEditing={()=>console.log("HOLA SEARCH")}
                    />
                </View>
                <ScrollView>
                    <Text>
                        {search}
                    </Text>
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
    searchBox:{
        backgroundColor:'gainsboro',
        color:COLORS.darkgray
    },
    itemsFormat:{
        color:'gray',
        fontSize:17,
        padding:10
    },
    renderItemsContainer:{
        backgroundColor:COLORS.lightGray,
        flex:1,
        paddingHorizontal:7
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