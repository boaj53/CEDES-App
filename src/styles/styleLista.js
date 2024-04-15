import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    body: {
        paddingTop:5,
        height:'100%',
        width:'100%'
    },
    NavArea:{
        height:70,
        width:'100%',
        position:'relative',
        backgroundColor:'#0C356A'
    },
    AreaBar:{
        position:'relative',
        width:'75%',
    },
    NavBar:{
        width:'100%',
        marginHorizontal:15,
        paddingVertical:10,
        paddingLeft:7,
        paddingRight:68,
        borderRadius:10,
        backgroundColor:'#D9D9D9'
    },
    Seach:{
        position:'absolute',
        width:60,
        height:48,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        right:0,
        marginRight:-15,
        backgroundColor:'#0174BE'
    },
    img:{
        height:35,
        width: 35,
        tintColor: 'white'
    },
    button:{
        width:48,
        height:48,
        right:20,
        backgroundColor:'#0174BE',
        borderRadius:5,
        position:'absolute',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    container: {
        marginVertical:5,
        marginHorizontal:20,    
    },
    globo: {
        backgroundColor:'#D9D9D9',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius:10,
    },
    globoNew: {
        backgroundColor:'#0174BE',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius:10,
    },
    Text: {
        color:'#0C356A',
    },
    TextNew: {
        color:'#FFC436',
    }
});

export default styles;