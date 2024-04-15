import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
        body: {
            flex:1,
            justifyContent: 'center',
            alignItems: 'center', 
        },
        btnArea:{
            position:'absolute',
            zIndex:10,
            top:15,
            right:15,
        },
        TOArea:{
            flex:1,
            padding:5,
            borderRadius:10,
            backgroundColor:'#0174BE'
        },
        BtnDoc:{
            height:35,
            width:35,
            tintColor:'#FFF0CE'
        },
        imgBack:{
            // marginTop:0,
            height:320,
            width:'100%',
            position:'absolute'
        },
        GL: {
            // position:'absolute',
            marginTop:150,
            bottom:0,
            width:'100%',
            height:150,
            // zIndex:-1,
        },
        padBody:{
            backgroundColor:'#0C356A',
            paddingHorizontal:20
        },
        TitleBox:{
            position:'sticky',
            top:0, 
        },
        Titulo: {
            backgroundColor:'#0C356A',
            color:'#fff',
            fontSize:35,
            fontWeight:'bold'
        },
        TextBox:{
            paddingVertical:10
        },
        BdText:{
            textAlign:'justify',
            color:'#FFF0CE'
        },
        Botton:{
            padding:20,
            marginBottom:100,
            backgroundColor:'#0174BE'
        },
        textBtn:{
            textAlign:'center',
            fontSize:20,
            fontWeight:'bold',
            color:'#FFF'
        }
    })
export default styles;