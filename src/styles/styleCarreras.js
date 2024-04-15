import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    Scroll:{
        height:'82%',
        zIndex:-1,
    },
    HeaderBg:{
        backgroundColor: '#0C356A',
        width:'100%',
        height:'18%',
        justifyContent:'center',
    },
    HeaderTx:{
        textAlign:'center',
        color:'white',
        fontSize:23,
        fontWeight:'bold',
    },
    BoxSem:{
        marginTop:-30,
        marginLeft:-187,
        height:757,
        width:'200%'
    },
    globoBB:{
        height:170,
        width:'100%',
        backgroundColor: '#0174BE',
        flex:1,
        flexDirection:'row',
    },
    globoBY:{
        height:170,
        width:'100%', 
        backgroundColor: '#FFF0CE',
        // marginBottom:10,
        flex:1,
        flexDirection:'row',
    }, 
    globoBox:{
        width:'100%',
        position: 'relative',
    },
    // TitleB:{
    //     bottom:0,
    //     left:0,
    //     paddingHorizontal:15,
    //     paddingBottom:10,
    //     fontSize:22,
    //     fontWeight:'bold',
    //     color:'#fff',
    //     zIndex:1,
    //     position:'absolute'
    // },
    Image_1:{
        height: '100%',
        width: '100%',
        position:'absolute',
        // tintColor:'black',
        zIndex:-1,
    },
    Image_2:{
        height: '100%',
        width: '100%',
        position:'absolute',
        // tintColor:'Blue',
        zIndex:-1,
    },
    ImageLesi:{
        marginTop:105,
        marginLeft:70,
        height: '55%',
        width: '50%',
        position:'absolute',
        tintColor:'white',
        zIndex:-1,
    },
    ImageDMG:{
        marginTop:30,
        marginLeft:290,
        height: '65%',
        width: '50%',
        position:'absolute',
        tintColor:'white',
        zIndex:-1,
    },
});
export default styles;