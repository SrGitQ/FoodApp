import React from "react"

import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    View,
    Text,
} from "react-native"

import { icons, images, SIZES, COLORS, FONTS } from "../constants";



const Home = ({ navigation }) => {

    let category = 1

    const renderHeader = () => {

        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={ () => navigation.navigate("Search") }
                >
                    <Image source={icons.search} style={styles.icon}/>
                </TouchableOpacity>
                <Image source={images.logo} style={styles.logo}/>
                <TouchableOpacity
                    onPress={ () => navigation.navigate("Cart") }
                >
                    <Image source={icons.cart} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        );
    }

    const renderHomeImg = () => {
        return (
            <Image
                source={images.background}
                style={styles.renderHomeImg}
            />
        );
    }

    const renderMenu = () => {
        return (
            <FlatList style={styles.menuConainer}>

            </FlatList>
        );
    }

    return(
        <SafeAreaView style={styles.constainer}>
            {renderHeader()}
            {renderHomeImg()}
            {renderMenu()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    menuConainer:{
        backgroundColor:COLORS.white,
    },
    renderHomeImg:{
        width:'100%',
        flex:0.4
    },
    logo:{
        width:100,
        height:40
    },
    icon:{
        width:30,
        height:30
    },
    headerContainer:{
        backgroundColor: COLORS.orange,
        flex:0.12,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 10
    },
    constainer:{
        flex:1,
        backgroundColor: COLORS.black
    }

})

export default Home