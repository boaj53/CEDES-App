import { StatusBar } from 'expo-status-bar';
import {Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'; 
// import { LinearGradient } from 'expo-linear-gradient';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { RNSepia, RNSketch, RNBlackWhite } from 'react-native-image-filter-kit';
import React, { useContext } from 'react';
import { GlobalContext } from '../database/GlobalContext';

import styles from '../styles/styleSemestres';
import prueba from '../images/Baner.jpg';

export default function Materia ({ navigation }) {

  const { setGlobalVariable } = useContext(GlobalContext);

  const Header = () => {
    return (
      <View style={styles.HeaderBg}>
        <Text style={styles.HeaderTx}>Selecciona tu semestre</Text>
      </View>
    )
  }

  const Materia_1 = () => {
    return (
      <TouchableOpacity style={ styles.globoBY } onPress = { () => {
          setGlobalVariable(1);
          navigation.navigate('Materias')
        } }>
        <View style={ styles.globoBox }>
          <Text style={ styles.Title }>Primer Semestre</Text>
            <Image source={ prueba } style={ styles.Image_1 } /> 
        </View>
      </TouchableOpacity>
    )
  }

  const Materia_2 = () => {
    return (
      <TouchableOpacity style={ styles.globoBB } onPress = { () => {
        setGlobalVariable(2);
        navigation.navigate('Materias')
      } }>
        <View style={ styles.globoBox }>
          <Text style={ styles.TitleB }>Segundo Semestre</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const Materia_3 = () => {
    return (
      <TouchableOpacity style={ styles.globoBB } onPress = { () => {
        setGlobalVariable(3);
        navigation.navigate('Materias')
      } }>
        <View style={ styles.globoBox }>
          <Text style={ styles.TitleB }>Tercer Semestre</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const Materia_4 = () => {
    return (
      <TouchableOpacity style={ styles.globoBY } onPress = { () => {
        setGlobalVariable(4);
        navigation.navigate('Materias')
      } }>
        <View style={ styles.globoBox }>
          <Text style={ styles.Title }>Cuarto Semestre</Text>
          <Image source={ prueba } style={ styles.Image_1 } /> 
        </View>
      </TouchableOpacity>
    )
  }

  const Materia_5 = () => {
    return (
      <TouchableOpacity style={ styles.globoBY } onPress = { () => {
        setGlobalVariable(5);
        navigation.navigate('Materias')
      } }>
        <View style={ styles.globoBox }>
          <Text style={ styles.Title }>Quinto Semestre</Text>
          <Image source={ prueba } style={ styles.Image_1 } /> 
        </View>
      </TouchableOpacity>
    )
  }
  
  const Materia_6 = () => {
    return (
      <TouchableOpacity style={ styles.globoBB } onPress = { () => {
        setGlobalVariable(6);
        navigation.navigate('Materias')
      } }>
        <View style={ styles.globoBox }>
          <Text style={ styles.TitleB }>Sexto Semestre</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const Materia_7 = () => {
    return (
      <TouchableOpacity style={ styles.globoF } onPress = { () => {
          setGlobalVariable(7);
          navigation.navigate('Materias')
        } }>
        <View style={ styles.globoBox }>
          <Text style={ styles.Title }>Septimo Semestre</Text>
            <Image source={ prueba } style={ styles.Image_1 } /> 
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView>
      <Header/>
      <ScrollView style={styles.Scroll}>
        <View style={styles.BoxSem}>
          <Materia_1/>
          <Materia_2/> 
        </View>
        <View style={styles.BoxSem}>
          <Materia_3/>
          <Materia_4/> 
        </View>
        <View style={styles.BoxSem}>
          <Materia_5/>
          <Materia_6/> 
        </View>
        <Materia_7 />
      </ScrollView>
    </SafeAreaView>
  );
} 
