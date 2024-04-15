import { StatusBar } from 'expo-status-bar';
import {Text, View, SafeAreaView, TextInput, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import styles from '../styles/styleSC';
import prueba from '../images/Baner.jpg';
import Icon from '../images/nottingNew.png';


export default function Materia ({ navigation }) {

  const Header = () => {
    return (
      <View style={styles.HeaderBg}>
        <Text style={styles.HeaderTx}> Materias </Text>
      </View>
    )
  }

  const Materia = () => {
    return (
      <TouchableOpacity style={ styles.globo } onPress = { () => {navigation.navigate('Materia_1')} }>
        <View style={ styles.globoTextA}>
          <Text style={ styles.TitleMateria }> SubCompetencia 1 </Text>
          <Text style={ styles.Tema }> Triangulos </Text>
          <Image source={ Icon } style={ styles.Icon } /> 
        </View>
        <View style={styles.BoxImg}>
          <LinearGradient colors={['transparent', '#FFF0CE']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={styles.GL} />
          <Image source={ prueba } style={ styles.Image } />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView>
      {/* <Header/> */}
      <ScrollView style={styles.Scroll}>
        <Materia/>
        <Materia/>
        <Materia/>
        <Materia/>
      </ScrollView>
    </SafeAreaView>
  );
} 
