import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState, useContext } from 'react';
import * as SQLite from 'expo-sqlite/legacy';
import { GlobalContext } from '../database/GlobalContext';

import styles from '../styles/styleSC';
import prueba from '../images/Baner.jpg';

const db = SQLite.openDatabase('myDatabase.db');

export default function Materia({ navigation }) {
  const { Materia, setSubComp } = useContext(GlobalContext);
  const [subCm, setSubCm] = useState([]);
  const [temas, setTemas] = useState({});

  useEffect(() => {
    // Consulta para obtener las subcompetencias
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM SubCompetencia WHERE idmateria = ?;',
        [Materia],
        (tx, results) => {
          let rows = results.rows._array;
          setSubCm(rows);
        },
        (tx, error) => {
          console.log("Error fetching subcompetencias from database", error);
        }
      );
    });
  }, [Materia]);

  useEffect(() => {
    // Consulta para obtener los detalles de cada subcompetencia
    if (subCm.length > 0) {
      const fetchDetails = async () => {
        const temasTemp = {};

        await Promise.all(subCm.map(subComp => {
          return new Promise((resolve, reject) => {
            db.transaction(tx => {
              tx.executeSql(
                'SELECT * FROM Detalles WHERE idSubCom = ?;',
                [subComp.idDetalles],
                (tx, results) => {
                  let rows = results.rows._array;
                  temasTemp[subComp.idSubCom] = rows;
                  resolve();
                  console.log('idSubCom',subComp.idSubCom);
                  console.log('idDeta',subComp.idMateria);

                  console.log(rows);
                },
                (tx, error) => {
                  console.log(`Error fetching details for subcompetencia ${subComp.idSubCom}`, error);
                  reject(error);
                }
              );
            });
          });
        }));

        setTemas(temasTemp);
      };

      fetchDetails();
    }
  }, [subCm]);

  const renderSubCom = () => {
    if (subCm.length === 0) {
      return <Text>No hay materias disponibles</Text>;
    }

    return subCm.map((SubCompetencia) => (
      <View key={SubCompetencia.idSubCom} style={styles.subComContainer}>
        <TouchableOpacity style={styles.subComSep} onPress={() => setSubComp(SubCompetencia.idSubCom)}>
          <View>
            <Text style={styles.subComSepT}>{SubCompetencia.NombreSubCom}</Text>
          </View>
        </TouchableOpacity>

        <View>
          {temas[SubCompetencia.idSubCom]?.map((tema) => (
            <TouchableOpacity key={tema.idDetalles} style={styles.globo} onPress={() => {
              setSubComp(tema.idDetalles);
              navigation.navigate('Temas');
            }}>
              <View style={styles.globoTextA}>
                <Text style={styles.TitleMateria}>{tema.NombreDetalles}</Text>
              </View>
              <View style={styles.BoxImg}>
                <LinearGradient colors={['transparent', '#FFF0CE']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={styles.GL} />
                <Image source={prueba} style={styles.Image} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    ));
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.Scroll}>
        {renderSubCom()}
      </ScrollView>
    </SafeAreaView>
  );
}
