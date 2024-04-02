import { StatusBar } from 'expo-status-bar';
import {Text, View, SafeAreaView, TextInput, Pressable, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../styles/styles';
import LoginImage from '../images/Login.jpg';
import CedesLogo from '../images/CEDES.png';
import UnachLogo from '../images/unach.png'; 

function Login({ navigation })
{
    return (
      <View style={styles.padre}>
        
        <Image source={LoginImage} style={styles.Imge} />
        <Image source={CedesLogo} style={styles.filter} />
        <Image source={UnachLogo} style={styles.filter2} /> 
  
        <LinearGradient colors={['transparent', '#0C356A']} style={styles.GL}>
          <Text style={styles.titulo}>Ingresa tu usuario</Text>
        </LinearGradient>
        
        <SafeAreaView style={styles.container}>
          <Text style={styles.texto}>Correo electronico</Text>
          <TextInput style={styles.Caja_correo} 
            placeholder='alumno01@ejemplo.com' placeholderTextColor='#0174BE' autoComplete='email' textContentType='emailAddress'>
          </TextInput>
          <Text style={styles.texto}>Contraseña</Text>
          <TextInput style={styles.Caja_contraseña} 
            placeholder='********' placeholderTextColor='#0174BE' textContentType='password' secureTextEntry={true}>
          </TextInput>
  
          <TouchableOpacity style={styles.boton} onPress = { () => {navigation.navigate('Materias')} }>
            <Text style={styles.botonTxt}>Ingresa</Text>
          </TouchableOpacity>
  
        </SafeAreaView>
        
        <StatusBar style="auto" />
      </View>
    );  
} 
export default Login;