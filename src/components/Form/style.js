import {StyleSheet} from 'react-native';
import Form from '.';

const styles = StyleSheet.create({
    formContainer:{
        backgroundColor:"#ececec",
        width:"100%",
        height:"100%",
        flex: 1,
        flexDirection:"column",
        alignItems:"flex-start",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },  
    boxFormTitle:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",

    },
    textFormTitle:{
        padding:5,
        fontWeight:"bold",
        fontSize:30,
    },
    textLabel:{
        
        padding:10,
        paddingLeft:20,
        fontSize:25,
        fontWeight:"600",

    },
    inputLabel:{
        fontSize:20,
        backgroundColor:"#dcdcdc",
        width:"60%",
        padding:5,
        paddingHorizontal:10,
        marginLeft: 20,
        borderRadius:20,
    },
    boxViewButton:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
    },
    boxButton:{
        backgroundColor:"#b38941",
        padding:10,
        paddingHorizontal:20,
        borderRadius:22,
        

    },
    textButton:{
        fontSize:25,
        color:"white",
        fontWeight:"bold",
    },

});
export default styles;