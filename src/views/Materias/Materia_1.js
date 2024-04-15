import react from "react";
import {Text, View, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';

import styles from "../../styles/styleLista";
import Lupa from "../../images/buscar.png";
import Doc from "../../images/doc.png";


export default function ListaTemas ({ navigation }){
    const Navigate = () => {
        return (
            <View style={styles.NavArea}>
                <View style={styles.AreaBar}>
                    <TextInput style={styles.NavBar}
                     placeholder='Buscar' placeholderTextColor='#0174BE'></TextInput>
                    <TouchableOpacity style={styles.Seach}>
                        <Image source={Lupa} style={styles.img}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Image source={Doc} style={styles.img}/>
                </TouchableOpacity>
            </View>
        );
    }

    const Tema_1 = () => {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.globo} onPress = { () => {navigation.navigate('Regla de 3')} }>
                    <Text style={styles.Text}>
                        Regla de 3 - Tema normal
                    </Text>
                </TouchableOpacity>
            </View> 
        )
    }

    const New = () => {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.globoNew}>
                    <Text style={styles.TextNew}>
                        Tringulos - Tema nuevo
                    </Text>
                </TouchableOpacity>
            </View> 
        )
    }

    return (
        <SafeAreaView>
            <Navigate />
            <ScrollView style={styles.body}>
                <Tema_1 />
                <New />
            </ScrollView>
        </SafeAreaView>
    )
}