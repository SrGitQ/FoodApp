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
    Button,
    Linking
} from "react-native"

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { ItemSection } from "../components";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { delItem, addItem, resetCart } from '../cartActions';



const CartItemRender = (props) => {

    const item = {
		id:props.item.id,
		name:props.item.name,
		price:props.item.price,
		cant:1,
	}
	const renderImage = () => {
		return (
        	<View style={styles.sectionImage}>
        	    <View style={styles.backgroundImg}>
					<Image source = {images.taco} style={styles.imageRender}/>
				</View>
        	</View>
		);
	}

	const renderDescription = () => {
		return (
        	<View style={styles.sectionDescription}>
                {renderImage()}
        	    <Text style={styles.itemTitle}>{props.item.name}</Text>
                <Text style={styles.itemPrice}>1x${props.item.price}</Text>
        	</View>
		);
	}
    const renderButtons = () => {
        return (
            <View
                style={{
                    flexDirection:'row'
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor:'white',
                        borderBottomLeftRadius:100,
                        borderTopLeftRadius:100,
                        height:30,
                        width:30,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    onPress={ () => props.remove() }
                >
                    <Text>-</Text>
                </TouchableOpacity>
                <View
                    style={{
                        backgroundColor:'white',
                        height:30,
                        width:30,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <Text>{props.item.cant}</Text>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor:'white',
                        borderBottomRightRadius:100,
                        borderTopRightRadius:100,
                        height:30,
                        width:30,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    onPress={ () => props.add() }
                >
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return(
    	<View style={styles.itemContainer}>
            {renderDescription()}
            {renderButtons()}
        </View>
    )
}








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
        const items = (
            props.items.map( (item,i) => {
                return(
                    <View key={i}>
                        <CartItemRender 
                            item = {item} 
                            add={() => props.addItem(item)}
                            remove={() => props.delItem(item)}
                        />
                        <View style={{height:10}}></View>
                        
                    </View>
                )
            })
        )
        return (
            <View style={styles.renderItemsContainer}>
                <Text style={styles.itemsFormat}>{props.amount} productos</Text>
                <Text style={FONTS.largeTitle}>Mi orden</Text>
                <ScrollView>
                    {items}
                    {/**Here will be the items exploits */}
                </ScrollView>
            </View>
        );
    }
    const getPrice = () => {
        let price = 0
        props.items.map( (item) => {
            price = price + (item.price * item.cant) 
        })
        return price
    }

    const renderInformation = () => {
        return (
            <View style={styles.renderInformationContainer}>
                <View>
                    <Text>Cliente</Text>
                    <Text style={FONTS.h2}>FEDERICO</Text>
                    <Text style={styles.address}>La costa</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={FONTS.h2}>TOTAL</Text>
                    <Text style={FONTS.h1}>$ {getPrice()}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{
                            if (props.items.length > 0){
                                let itemsList = props.items.map( (item =>`    ${item.cant}x${item.name}\n`))
                                let message = `Hola Run Run, Soy Federico, quiero ordenar Tacos'Tumbras.\nEste es mi numero: .\nMi dirección es: .\nQuisiera ordenar:\n${itemsList}mi total es: $${getPrice()}.00`
                                console.log(message)
    
                                Linking.openURL('whatsapp://send?text='+ message +'&phone=+52 1 999 140 5395')
                                props.resetCart()
                                props.navigation.goBack()
                            }else{
                                props.navigation.navigate('Home')
                            }
                        }}
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
    itemPrice:{
        color: '#ffc108',
        fontWeight:'bold',
        fontSize:17
    },
    itemTitle:{
        fontWeight:'bold',
        fontSize:20,
        paddingHorizontal:10
    },
    imageRender:{
        width:'90%',
        height:'90%',
        justifyContent:'center',
        borderRadius:100
    },
    backgroundImg:{
        height:50,
        width:50,
        backgroundColor: COLORS.redblack,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    itemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center'
    },
    sectionImage:{
        justifyContent:'center',
    },
    sectionDescription:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'30%',
        alignItems:'center'
    },
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
        flex:0.7,
        paddingHorizontal:5
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

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		delItem,
        addItem,
        resetCart
	}, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Cart)