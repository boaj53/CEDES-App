import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    Scroll:{
        height:'100%',
        paddingTop:10,
        // paddingBottom:50,
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
        // height:220,
        // width: '85%',
        marginHorizontal:'3%',
        borderWidth:2,
        borderRadius:10,
        backgroundColor: '#FFF0CE',
        borderColor: '#FFC436',
        marginBottom:10,
    },
    Image:{
        height: 150,
        width: '100%',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },
    globoTextA:{
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
    // NameProfe:{
    //     marginTop:10,
    //     fontSize:18,
    //     fontWeight:'normal',
    //     color: '#0174BE'
    // },
    // Face:{
    //     position: 'absolute',
    //     height:50,
    //     width:50,
    //     right:20,
    //     top:50,
    //     borderRadius:100,
    // },
    Icon:{
        position:'absolute',
        tintColor:'#0174BE',
        top:20,
        right:20,
        height:20,
        width:20
    }
});
export default styles;