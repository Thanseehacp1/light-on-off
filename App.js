import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React ,{useState}from 'react'

const App = () => {
  const [enable, setEnable] = useState(false)
  const  onClickMe=()=>{
    console.log(enable);
    setEnable(!enable);
  }
  return (
    <View style={{
      flex:1,
      backgroundColor:'white',
    }}>
    
    <View style={{
     flex:1,
      backgroundColor:enable?'#ffff8a':'black',
    }}>
      <View style={{
      
      backgroundColor:'white',
      height:250,
      width:5,
      alignSelf:'center',
    }}>
     <View style={{
      backgroundColor:'white',
      height:400,
      width:5,
      marginLeft:100,
      marginBottom:5,
    }}>
    </View>
      <TouchableOpacity 
      onPress={
        ()=>{
          onClickMe();
          }}
          style={{
        backgroundColor:enable?'white':'black',
        height:50,
        width:50,
        borderRadius:50/2,
       marginLeft:77,
       marginTop:-20,
       borderWidth:2,
       borderColor:'grey',
       alignContent:'center',
       justifyContent:'center',
       
      }}>
      <Image style={{
        height:40,
        width:40,
        alignSelf:'center',
        alignContent:'center',
        justifyContent:'center',
       }}
      source={require("./assets/power3.png")}/>
</TouchableOpacity>
         </View>
  
 
  <Image style={{
          height:150,
          width:100,
          marginTop:-55,
          alignSelf:'center',
        }}
        resizeMode="contain"
        source={enable? require("./assets/on2.png"):require("./assets/off2.png")}/>
   
   <View style={{
    flex:2,
}}>
 <Text style={{
    fontSize:20,
    fontWeight:"bold",
  color:enable?'black':'white',
  marginLeft:40,
  alignSelf:'auto',
  marginTop:70,
}}>Bedroom{'\n'}28°c</Text>
  
   </View>
   </View>
</View>

  )
}

export default App

const styles = StyleSheet.create({})