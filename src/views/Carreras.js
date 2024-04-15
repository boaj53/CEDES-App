import { StatusBar } from 'expo-status-bar';
import {Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from '../styles/styleCarreras';
import DmgBtn from '../images/DmgBtn.png';
import LesiBtn from '../images/LesiBtn.png';
import lesi from '../images/Lesi.png';
import dmg from '../images/DMG.png';

export default function Materia ({ navigation }) {

  const Header = () => {
    return (
      <View style={styles.HeaderBg}>
        <Text style={styles.HeaderTx}>Selecciona una carrera</Text>
      </View>
    )
  }

  const Materia_1 = () => {
    return (
      <TouchableOpacity style={ styles.globoBY } onPress = { () => {navigation.navigate('semestres')} }>
        <View style={ styles.globoBox }>
          {/* <Text style={ styles.TitleB }>LESI</Text> */}
          <Image source={ LesiBtn } style={ styles.Image_1 } /> 
          <Image source={ lesi } style={ [styles.ImageLesi, {transform:[{rotate:'-45deg'}]}] } /> 
        </View>
      </TouchableOpacity>
    )
  }

  const Materia_2 = () => {
    return (
      <TouchableOpacity style={ styles.globoBB } onPress = { () => {navigation.navigate('semestres')} }>
        <View style={ styles.globoBox }>
          {/* <Text style={ styles.TitleB }>DESARROLLO</Text> */}
          <Image source={ DmgBtn } style={ styles.Image_2 } /> 
          <Image source={ dmg } style={ [styles.ImageDMG, {transform:[{rotate:'-45deg'}]}] } /> 
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView>
      <Header/>
      <View style={styles.Scroll}>
        <View 
         style={[ styles.BoxSem, {transform:[{rotate:'45deg'}]}]}
        >
          <Materia_1/>
          <Materia_2/>
        </View>
      </View>
      {/* <ScrollView style={styles.Scroll}>
        <View 
        style={[ styles.BoxSem, {transform:[{rotate:'45deg'}]}]}
        >
          <Materia_1/>
          <Materia_2/>
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
} 
