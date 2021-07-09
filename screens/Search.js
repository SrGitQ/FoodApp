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




const Search = ({ navigation }) => {

    return(
        <SafeAreaView style={styles.constainer}>
            <Text style={{...FONTS.h1}}>Search</Text>
            <TouchableOpacity
                    onPress={ () => navigation.goBack() }
            >
                <Image source={icons.search} style={styles.icon}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default Search