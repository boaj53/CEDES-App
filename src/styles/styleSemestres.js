import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    Scroll:{
        height:'82%',
        backgroundColor:'#0174BE',
        // paddingTop:10, 
        // Gap:40,
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
        flex:1,
        flexDirection:'row',
    },
    globoBB:{
        height:225,
        width:'50%',
        // borderWidth:2, 
        backgroundColor: '#0174BE',
        // borderColor: '#FFC436',
        // marginBottom:10,
        flex:1,
        flexDirection:'row',
    },
    globoBY:{
        height:225,
        width:'50%', 
        backgroundColor: '#FFFADD',
        // marginBottom:10,
        flex:1,
        flexDirection:'row',
    },
    globoF:{
        height:180,
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
    Title:{
        bottom:0,
        left:0,
        paddingHorizontal:15,
        paddingBottom:10,
        fontSize:22,
        fontWeight:'bold',
        color:'#0C356A',
        zIndex:1,
        position:'absolute'
    },
    TitleB:{
        bottom:0,
        left:0,
        paddingHorizontal:15,
        paddingBottom:10,
        fontSize:22,
        fontWeight:'bold',
        color:'#fff',
        zIndex:1,
        position:'absolute'
    },
    Image_1:{
        height: '100%',
        width: '100%',
        position:'absolute',
        tintColor:'#FFFADD',
        zIndex:-1,
    },
});
export default styles;