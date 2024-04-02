import { StatusBar } from 'expo-status-bar';
import {Text, View, SafeAreaView, TextInput, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import styles from '../styles/styleMaterias';
import prueba from '../images/Login.jpg';
import Icon from '../images/nottingNew.png'

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
        <View>
          <Image source={ prueba } style={ styles.Image } />
        </View>
        <View style={ styles.globoTextA}>
          <Text style={ styles.TitleMateria }> Matematicas </Text>
          <Text style={ styles.NameProfe }> Mtra. Mercedes Mercedes </Text>
          <Image source={ Icon } style={ styles.Icon } />
          <Image source={ prueba } style={ styles.Face } />

        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView>
      <Header/>
      <ScrollView style={styles.Scroll}>
        <Materia/>
        <Materia/>
      </ScrollView>
    </SafeAreaView>
  );
} 
