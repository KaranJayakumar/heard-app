import {StyleSheet, ImageBackground, Text,Image, View} from 'react-native';
import React from 'react';
const Launch = () => {
    return(
        <ImageBackground style = {styles.background}>
            <Image source={require('../../assets/headphoneImg.png')} style = {styles.logo}/> 
        </ImageBackground>
    )
}
export default Launch;
const styles = StyleSheet.create({
    background : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "black",
    },
    logo :{
        justifyContent : "center",
    }
});
