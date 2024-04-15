import { StatusBar } from 'expo-status-bar';
import {Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'; 
// import { LinearGradient } from 'expo-linear-gradient';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { RNSepia, RNSketch, RNBlackWhite } from 'react-native-image-filter-kit';
import React from 'react';

import styles from '../styles/styleSemestres';
import prueba from '../images/Baner.jpg';

export default function Materia ({ navigation }) {

  const Header = () => {
    return (
      <View style={styles.HeaderBg}>
        <Text style={styles.HeaderTx}>Selecciona tu semestre</Text>
      </View>
    )
  }

  const Materia_1 = () => {
    return (
      <TouchableOpacity style={ styles.globoBY } onPress = { () => {navigation.navigate('Materias')} }>
        <View style={ styles.globoBox }>
          <Text style={ styles.Title }>Primer Semestre</Text>
            <Image source={ prueba } style={ styles.Image_1 } /> 
        </View>
      </TouchableOpacity>
    )
  }

  const Materia_2 = () => {
    return (
      <TouchableOpacity style={ styles.globoBB } onPress = { () => {navigation.navigate('Materias')} }>
        <View style={ styles.globoBox }>
          <Text style={ styles.TitleB }>Segundo Semestre</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const Materia_3 = () => {
    return (
      <TouchableOpacity style={ styles.globoF } onPress = { () => {navigation.navigate('Materias')} }>
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
          <Materia_2/>
          <Materia_1/> 
        </View>
        <View style={styles.BoxSem}>
          <Materia_1/>
          <Materia_2/> 
        </View>
        <Materia_3 />
      </ScrollView>
    </SafeAreaView>
  );
} 
