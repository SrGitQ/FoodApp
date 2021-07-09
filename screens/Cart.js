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




const Cart = ({ navigation }) => {

    return(
        <SafeAreaView style={styles.constainer}>
            <Text style={{...FONTS.h1}}>Cart</Text>
            <TouchableOpacity
                    onPress={ () => navigation.goBack() }
            >
                <Image source={icons.cart} style={styles.icon}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default Cart