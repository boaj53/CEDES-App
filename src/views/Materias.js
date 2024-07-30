import { StatusBar } from 'expo-status-bar';
import {Text, View, SafeAreaView, TextInput, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native'; 
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState, useContext } from 'react';
import * as SQLite from 'expo-sqlite/legacy';
import { GlobalContext } from '../database/GlobalContext';

import styles from '../styles/styleMaterias';
import prueba from '../images/Baner.jpg';
import Icon from '../images/nottingNew.png';

const db = SQLite.openDatabase('myDatabase.db');

export default function Materia ({ navigation }) {

  const { globalVariable, setMateria } = useContext(GlobalContext);
  const [materias, _setMaterias] = useState([]);

  useEffect(() => {
    // Realiza la consulta a la base de datos
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Materia WHERE idsemestre = ?;',
        [globalVariable],
        (tx, results) => {
          let rows = results.rows._array;
          _setMaterias(rows);
        },
        (tx, error) => {
          console.log("Error fetching data from database", error);
        }
      );
    });
  }, [globalVariable]);

  const renderMaterias = () => {

    if (materias.length === 0) {
      return <Text> No hay meterias disponibles </Text>;
    }

    return materias.map((materia) => (
      <TouchableOpacity key={materia.idMateria} style={styles.globo} onPress={() => { 
        setMateria(materia.idMateria);
        navigation.navigate('Sub-Competencias');
        }}>
        <View>
          <Image source={prueba} style={styles.Image} />
        </View>
        <View style={styles.globoTextA}>
          <Text style={styles.TitleMateria}>{materia.NombreMateria}</Text>
          <Image source={Icon} style={styles.Icon} />
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView>
      {/* <Header/> */}
      <ScrollView style={styles.Scroll}>
        {renderMaterias()}
        {/* <Text>Variable Global: {globalVariable}</Text> */}
      </ScrollView>
    </SafeAreaView>
  );
} 
