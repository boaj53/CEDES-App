import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    Scroll:{
        height:'100%',
        paddingTop:10, 
        Gap:40,
    },
    HeaderBg:{
        backgroundColor: '#0C356A',
        width:'100%',
        height: '13%', //110
        paddingHorizontal:20,
    },
    HeaderTx:{
        top:55,
        color:'white',
        fontSize:23,
        fontWeight:'bold'
    },
    globo:{
        height:160,
        // width: '85%',
        marginHorizontal:'3%',
        borderWidth:2,
        borderRadius:10,
        backgroundColor: '#FFF0CE',
        borderColor: '#FFC436',
        marginBottom:10,
        flex:1,
        flexDirection:'row',
    },
    GL:{
        width:20,
        height:'100%',
        position:'absolute',
        left:0,
        zIndex:10
    },
    BoxImg:{
        height:'100%',
        width:'40%',
    },
    Image:{
        height: '100%',
        width: '100%',
        borderBottomRightRadius:8,
        borderTopRightRadius:8,
        
    },
    globoTextA:{
        width:'60%',
        position: 'relative',
        paddingHorizontal: 10,
        paddingBottom:15,
    },
    TitleMateria:{
        marginTop:12,
        fontSize:22,
        fontWeight:'bold',
        color:'#0C356A'
    },
    Tema:{
        marginTop:10,
        fontSize:17,
        color:'#0174BE'
    },
    Icon:{
        position:'absolute',
        tintColor:'#0174BE',
        bottom:20,
        left:17,
        height:20,
        width:20
    },
    subComSep:{
        marginTop:15,
        marginBottom:15,
        marginHorizontal:10,
        borderBottomWidth:2,
        borderBlockEndColor:'#0174BE', 
    },
    subComSepT:{
        fontSize:25,
        fontWeight:'bold',
        color:'#0174BE'
    }
});
export default styles;