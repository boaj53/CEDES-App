import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TextInput, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native'; 
import React, { useEffect, useState, useContext } from 'react';
import * as SQLite from 'expo-sqlite/legacy';
import { GlobalContext } from '../database/GlobalContext';
import { decode as atob } from 'base-64';

import styles from '../styles/styleMaterias';
import Icon from '../images/nottingNew.png';

const db = SQLite.openDatabase('myDatabase.db'); 

export default function Materia({ navigation }) {
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
          // console.log(rows);
        },
        (tx, error) => {
          console.log("Error fetching data from database", error);
        }
      );
    });
  }, [globalVariable]);

  const renderMaterias = () => {
    if (materias.length === 0) {
      return <Text>No hay materias disponibles</Text>;
    }

    return materias.map((materia) => { 
      const imageUri = `data:image/jpeg;base64,${materia.Imagen}`;

      return (
        <TouchableOpacity key={materia.idMateria} style={styles.globo} onPress={() => { 
          setMateria(materia.idMateria);
          navigation.navigate('Sub-Competencias');
        }}>
          <View>
            <Image source={{ uri: imageUri }} style={styles.Image} />
          </View>
          <View style={styles.globoTextA}>
            <Text style={styles.TitleMateria}>{materia.NombreMateria}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.Scroll}>
        {renderMaterias()}
      </ScrollView>
    </SafeAreaView>
  );
}
