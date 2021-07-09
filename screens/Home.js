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
import { CategorySection, LineSection } from "../components";
import menu from "../components/src/menu-data"



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
        const categories = menu.map( (menu, i) =>{
            return(
                <>
                    <CategorySection menu={menu.category_name} key={i} nav={()=>navigation.navigate("Menu")}></CategorySection>
                    <LineSection key={i+1}></LineSection>
                </>
            );
        })

        return (
            <ScrollView style={styles.menuConainer}>
                {categories}
            </ScrollView>
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
        flex:1
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