import React, { useEffect, useState, useContext } from 'react';
import * as SQLite from 'expo-sqlite/legacy';
import {Text, View, SafeAreaView, ScrollView, Animated, Image, TouchableOpacity, Alert, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DynamicHeader from "./Titulo";
import { GlobalContext } from "../../database/GlobalContext";

import Background from "../../images/concept.jpg"
import Doc from "../../images/doc.png"
import styles from "../../styles/styleTema";
import { Link } from '@react-navigation/native';

const db = SQLite.openDatabase('myDatabase.db');

export default function Tema () {
    const {SubComp, setVarTema} = useContext(GlobalContext);
    const [Detalle, setDetalle] = useState([]);

    useEffect(() => {
        // Realiza la consulta a la base de datos
        db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM Detalles WHERE idDetalles = ?;',
            [SubComp],
            (tx, results) => {
            let rows = results.rows._array;
            setDetalle(rows);
            },
            (tx, error) => {
            console.log("Error fetching data from database", error);
            }
        );
        });
    }, [SubComp]); 

    // let scrollOffsetY = useRef(new Animated.Value(0)).current;

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
        return Detalle.map((D) => (
            <View key={D.idDetalles}>
                <View>
                    <LinearGradient colors={['transparent', '#0C356A']} style={styles.GL} ></LinearGradient>
                </View>
                <View style={styles.padBody}>

                    <View style={styles.TitleBox}>
                        <Text style={styles.Titulo}>
                            {D.NombreDetalles}
                        </Text>
                    </View>

                    <View style={styles.TextBox}>
                        <Text style={styles.BdText}>
                            {D.TextoPrincip}
                        </Text>
                        <Text style={styles.BdText}>
                            {D.TextoSec}
                        </Text>
                    </View>

                    
                    <TouchableOpacity style={styles.Botton} onPress={ () => { Linking.openURL(D.Link) }}>
                        <Text style={styles.textBtn}> {D.BottonName} </Text>
                    </TouchableOpacity> 
                    

                </View>
            </View>
        ))
    }
    
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