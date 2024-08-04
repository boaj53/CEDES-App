import { useState } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    padre: {
        position:'relative', 
        height:'100%'
    },
    container: {
        position:'absolute',
        bottom:0,
        height:'35%',
        width:'100%',
        // flex:1,
        gap:10,
        backgroundColor: '#0C356A',
        paddingHorizontal:50,
        justifyContent: 'center',
        // alignItems: 'center',    
    },
    filter:{
        position:'absolute',
        top:50,
        left:30,
        height: 70,
        width:50,
        zIndex:10,
    },
    filter2:{
        position:'absolute',
        top:52,
        left:90,
        height: 63,
        width:70,
        zIndex:10,
    },
    Imge:{
        position:'absolute',
        height:'70%',
        width:'100%',
        zIndex:0,
        // tintColor:'gray' ,
        // opacity: 0.3,
    },
    GL: {
        position:'absolute',
        bottom: '35%',

        height: 100,
        width: '100%',

        justifyContent:'flex-end',
        alignItems:'center',
    },
    titulo: {
        marginBottom:20,
        color:'#fff',
        fontSize:35,
        fontWeight:'bold',
    },
    texto: {
        color: '#FFC436',
        fontSize:20,
        marginBottom:10,
        marginTop:20,
    },
    Caja_correo: {
        height:40,
        borderRadius:10,
        paddingHorizontal:10,
        backgroundColor:'#fff',
        color: '#0174BE', 
    },
    Caja_contraseña: {
        height:40,
        borderRadius:10,
        paddingHorizontal:10,
        backgroundColor:'#fff',
        color: '#0174BE',
    },
    boton: {
        paddingVertical:15,
        marginTop:30,
        backgroundColor: '#0174BE',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botonTxt: {
        color: '#fff',
        fontSize: 27, 
    },
    Bienv:{
        color: '#FFC436',
        fontSize: 22,
        textAlign: 'center'
    }
  });

export default styles;