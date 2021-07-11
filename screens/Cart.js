import React from "react"

import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    View,
    Text,
    ScrollView
} from "react-native"

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { ItemSection } from "../components";

import { connect } from 'react-redux';



const Cart = (props) => {
    let back = "<"

    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={ () => props.navigation.goBack() } style={styles.backButton}>
                    <Text style={styles.backIcon}>{back}</Text>
                </TouchableOpacity>
                <Text style={styles.menuName}>Mi compra</Text>
            </View>
        );
    }

    const renderItems = () => {
        return (
            <View style={styles.renderItemsContainer}>
                <Text style={styles.itemsFormat}>{props.amount} items</Text>
                <Text style={FONTS.largeTitle}>Mi orden</Text>
                <ScrollView>
                    <Text>{props.items.map( item => {return(item.id+" " +item.name)} )}</Text>
                    {/**Here will be the items exploits */}
                </ScrollView>
            </View>
        );
    }

    const renderInformation = () => {
        return (
            <View style={styles.renderInformationContainer}>
                <View>
                    <Text>Cliente</Text>
                    <Text style={FONTS.h2}>JUAN MANUEL</Text>
                    <Text style={styles.address}>cd Caucel</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={FONTS.h2}>TOTAL</Text>
                    <Text style={FONTS.h1}>$ 404.08</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>console.log("Hola")}
                    >
                        <Text style={[FONTS.h1, {color:COLORS.white, fontWeight:'bold'}]}>PEDIR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            {renderHeader()}
            {renderItems()}
            {renderInformation()}
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:COLORS.black,
        width:'90%',
        height:40,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonContainer:{
        alignItems:'center'
    },
    priceContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    address:{
        color:COLORS.darkgray,
        fontSize:15
    },
    renderInformationContainer:{
        backgroundColor:COLORS.white,
        flex:0.2,
        paddingHorizontal:10,
        justifyContent:'space-between'
    },
    itemsFormat:{
        color:'gray',
        fontSize:17,
        padding:10
    },
    renderItemsContainer:{
        backgroundColor:COLORS.lightGray,
        flex:0.7
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


const mapStateToProps = (state, props) => {
    return { 
        amount: state.counter.amount,
        items: state.items
    }
}


export default connect(mapStateToProps)(Cart)