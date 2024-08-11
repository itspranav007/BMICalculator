
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import icon from "../assets/convert.png" 

export const Currencyconverter = () => {
  
  const [Amt, setAmt] = useState();
  const [currency, setcurrency] = useState(null);
  const[convert,setconvert]=useState(null);
  const[description,setdescription]=useState("");
  const result =()=>{
  
    if (currency=='USD' ){
      const convert=(Amt*83.50);
      setconvert(convert.toFixed(1));
      setdescription("USD");

    }
    else if(currency=='EURO' ){
    const convert=(Amt*90.055);
      setconvert(convert.toFixed(1));
      setdescription("EURO");
    }
    else if(currency=='POUND' ){
    const convert=(Amt*105.91);
      setconvert(convert.toFixed(1));
      setdescription("POUND");
    }
    else if(currency=='AUD' ){
    const convert=(Amt*55.74);
      setconvert(convert.toFixed(1));
      setdescription("AUD");
    }
    else if(currency=='INR'){
    const  convert=(Amt*1);
      setconvert(convert.toFixed(1));
      setdescription("INR");
    }
    else if(currency=='YEN'){
    const  convert=(Amt*0.576732);
      setconvert(convert.toFixed(1));
      setdescription("YEN");
    }
    else if(currency=='HONGKONG'){
   const  convert=(Amt*10.63);
      setconvert(convert.toFixed(1));
      setdescription("Hong Kong");
    }
  else{
     setdescription("Invalid ")
  }
    
  
}


  return (


    <View style={styles.container}>{/* Main Container */}


      <StatusBar style="auto" />
                    {/* Title  */}
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Currency Converter</Text>
      </View>


      <View style={styles.inputcontainer}>
                  {/* Input  */}
                  <Text style={{fontSize:15, fontWeight:'400', fontVariant:'small-caps'}}>Enter Amount</Text>
        <TextInput style={styles.input}
        value={Amt}
        onChangeText={(text)=>{setAmt(text)}}
         keyboardType='number-pad'
        />

        <Text ></Text>
        
        <Text style={{fontSize:15, fontWeight:'400', fontVariant:'small-caps'}}>Covert Country</Text>
        <TextInput style={styles.input}
         value={currency}
         onChangeText={(text)=>{setcurrency(text)}}
         keyboardType='default'
        />

</View>

                 {/* Button */}
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.btn} onPress={result}>
          <Text style={styles.btntxt} >Convert</Text>
        </TouchableOpacity>
      </View>


              {/*Result View  */}
      <View style={styles.resultcontainer}>
        
        <Text style={styles.resulttext}>Amount :</Text>
        <Text style={styles.resulttext}>{convert}  </Text>
        <Text style={styles.resulttext}>{description}</Text>
      </View>

      <View style={styles.icon}>
        <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/256/10826/10826388.png' }}
            style={{ width: 350, height: 180, resizeMode:'contain' ,margin:20 }} />
      </View>
     
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#e0ecde'
  },
 
 titlecontainer: {
      backgroundColor: '#2c6975',
      alignItems:'center',
    },
    title: {
      height:60,
      fontSize: 30,
      color: 'white',
      marginTop:15,
      fontWeight:'bold',
      fontVariant:'small-caps'
    },
  
    inputcontainer: {
      margin: 10,
     marginTop:20,
    marginBottom:50,
    
    },
    input: {
      paddingLeft: 30,
      height:50,
      width: 370,
      borderRadius: 7,
      borderColor: 'black',
      borderWidth:1,
      fontSize: 20,
      backgroundColor:'#cde0c9'
    },

    btncontainer:{
      alignItems:'center',
      marginTop:-10,
     marginBottom:20
    },
  
    btn:{
      height:50,
      width:150,
      borderRadius:10,
      borderColor:'black',
      borderWidth:1,
      backgroundColor:'#68b2a0'
    },
    btntxt:{
      fontSize:20,
      textAlign:'center',
      paddingTop:7,
      fontWeight:'bold',
      fontVariant:'small-caps'
    },
    resultcontainer:{
      marginTop:20,
     flexDirection:'row',
     justifyContent:'space-evenly',
      
    },
    resulttext:{
      fontSize:30,
      fontWeight:'700',
      fontVariant:'small-caps',
      color: '#2c6975'
    },
  
});

