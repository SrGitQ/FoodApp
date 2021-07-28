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
import { CategorySection, LineSection, CartExploit } from "../components";
import {menu} from "../components/src/menu-data"



const Home = ({ navigation }) => {

    let category = 1

    const renderHeader = () => {

        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={ () => navigation.navigate("Search") }>
                    <Image source={icons.search} style={styles.icon}/>
                </TouchableOpacity>

                <Image source={images.logo} style={styles.logo}/>

                <CartExploit nav={ () => navigation.navigate("Cart") }/>
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
                <View key={i}>
                    <CategorySection 
                        menu={menu.category_name}
                        nav={() => navigation.navigate("Menu", {menu})
                    }/>
                    <LineSection/>
                </View>
            );
        })

        return (
            <ScrollView style={styles.menuConainer}>
                {categories}
            </ScrollView>
        );
    }

    return(
        <SafeAreaView style={styles.container}>
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
    container:{
        flex:1,
        backgroundColor: COLORS.black
    }

})

export default Home