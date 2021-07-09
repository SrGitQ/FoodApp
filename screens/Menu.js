import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { icons, images, SIZES, COLORS, FONTS } from "../constants";

const Menu = ({route, navigation}) => {
    return (
        <View>
            <TouchableOpacity
                    onPress={ () => navigation.goBack() }
            >
                <Image source={icons.search}/>
            </TouchableOpacity>
        </View>
    );
}

export default Menu