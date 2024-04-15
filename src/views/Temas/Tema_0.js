import react, { useState, useRef } from "react";
import {Text, View, SafeAreaView, ScrollView, Animated, Image, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DynamicHeader from "./Titulo";

import Background from "../../images/concept.jpg"
import Doc from "../../images/doc.png"

import styles from "../../styles/styleTema";

export default function Tema () {

    let scrollOffsetY = useRef(new Animated.Value(0)).current;

    const Back = () => {
        return (
            <Image source={Background} style={styles.imgBack} />
        )
    }

    const BtnArchivar = () => {
        return (
            <View style={styles.btnArea}>
                <TouchableOpacity style={styles.TOArea} onPress={ () => {Alert.alert('Guardado')}} > 
                    <Image source={Doc} style={styles.BtnDoc}/>
                </TouchableOpacity>
            </View>
        )
    }

    const Body = () => {
        return (
            <View>
                <View>
                    <LinearGradient colors={['transparent', '#0C356A']} style={styles.GL} ></LinearGradient>
                </View>
                <View style={styles.padBody}>

                    <View style={styles.TitleBox}>
                        <Text style={styles.Titulo}>
                            Titulo
                        </Text>
                    </View>

                    <View style={styles.TextBox}>
                        <Text style={styles.BdText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac cursus mi. Pellentesque euismod nisi nec ante viverra sagittis. Sed pulvinar, turpis a condimentum porta, est ex tempus enim, in molestie felis augue non purus. Nam a dapibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut vitae feugiat purus. Sed ut tincidunt augue.
                            Pellentesque auctor eu est ut convallis. Curabitur vulputate risus porta dolor eleifend, vel feugiat erat commodo. Phasellus sed lectus turpis. Praesent sapien tellus, luctus nec tristique id, euismod eget augue. Etiam mi quam, tempor eu tortor vel, pulvinar sagittis enim. Cras sit amet enim placerat, facilisis nisi in, scelerisque metus. Aenean pulvinar commodo pulvinar. Fusce in nisl gravida, commodo sem nec, aliquet sapien. Nam metus neque, feugiat ut tellus sed, tempus elementum purus.
                            Aliquam maximus metus varius est aliquet, dictum elementum felis porta. Sed urna erat, luctus non molestie quis, aliquet laoreet lorem. Nulla sed malesuada ligula. Duis luctus tellus lectus, eu molestie ex vestibulum tempor. Donec vehicula nulla eget rhoncus aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat pellentesque consequat.
                            Aliquam erat volutpat. Sed tincidunt pharetra neque, vitae tempus purus bibendum non. Donec eu orci sed ligula accumsan tristique sed non quam. Aenean sed vestibulum sem. Mauris in ante consequat, dictum nibh quis, feugiat mi. Quisque ullamcorper vestibulum vulputate. Praesent sed rhoncus libero. Curabitur accumsan semper arcu, eu consectetur lorem tristique at.
                            Aenean a nulla finibus, tempus lacus ut, blandit felis. In id vulputate est. Proin nec augue vel massa dignissim convallis nec a lorem. Sed eu pharetra eros. Mauris pharetra ligula tincidunt, hendrerit lorem fermentum, vehicula elit. In convallis erat in urna viverra euismod. Maecenas tincidunt ante vitae rhoncus auctor. Nullam ut augue ligula. Donec suscipit, nibh congue egestas laoreet, augue ex rutrum nisl, nec mattis ligula lacus vel sapien. Aliquam mollis urna ut ultrices auctor. Sed luctus sit amet augue sit amet laoreet. Nullam semper pharetra interdum. Nulla facilisi.
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.Botton}>
                        <Text style={styles.textBtn}> Ir al PDF </Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

    // return (
    //     <SafeAreaView>
    //         <Back />
    //         <DynamicHeader animHeaderValue={scrollOffsetY} />
    //         <ScrollView scrollEventThrottle={16}
    //             onScroll={Animated.event([{ nativeEvent: { contentOffset: { y:scrollOffsetY } } }], {useNativeDriver:false} )}
    //         >
    //             <Body />
    //         </ScrollView>
    //     </SafeAreaView>
    // );
    
    return (
        <SafeAreaView>
            <Back />
            <BtnArchivar />
            <ScrollView >
                <Body />
            </ScrollView>
        </SafeAreaView>
    );

}