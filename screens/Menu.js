import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { ItemSection, CartExploit } from '../components';

const Menu = ({route, navigation}) => {
    let {menu} = route.params
    let back = "<"

    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={ () => navigation.goBack() } style={styles.backButton}>
                    <Text style={styles.backIcon}>{back}</Text>
                </TouchableOpacity>
                <Text style={styles.menuName}>{menu.category_name}</Text>
                <View style={styles.buttonContainer}>
                    <CartExploit nav={ () => navigation.navigate("Cart")}/>
                </View>
            </View>
        );
    }

    const renderHomeImg = () => {
        return (
            <Image
                source={images.tacos}
                style={styles.renderHomeImg}
            />
        );
    }

    const items = menu.items.map( (item, i) => {
        return(
            <ItemSection item = {item} key={i} ></ItemSection>
        );
    })

    const renderItems = () => {

        return (
            <ScrollView style={styles.menuConainer}>
                {items}
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderHomeImg()}
            {renderItems()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        flex:1,
        alignItems:'flex-end'

    },
    icon:{
        width:30,
        height:30
    },
    menuConainer:{
        backgroundColor:COLORS.white,
        flex:1
    },
    renderHomeImg:{
        width:'100%',
        flex:0.4
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


export default Menu