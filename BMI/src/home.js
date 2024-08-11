
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar, Button, Image, ImageBackground } from 'react-native';

export const Home = (props) => {
  return (

    <View style={styles.container}>
      <StatusBar backgroundColor={"black"} hidden={false} />

      <View style={styles.titlecontainer} >
        <TouchableOpacity style={styles.profile} onPress={() => props.navigation.navigate('Profile')}>
          <Image
            source={{ uri: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png', }}
            style={{ width: 50, height: 50, resizeMode: 'contain', borderColor: 'black', borderRadius: 200, borderWidth: 2 }} />
        </TouchableOpacity>

        <View style={styles.bmitxtcontainer}>
          <Text style={styles.bmitxt}>Calculator</Text>
        </View>

      </View>

      <View style={styles.buttoncontain}>

        <TouchableOpacity style={styles.button} title='Get Started' onPress={() => props.navigation.navigate('BMI')}>
            <Text style={styles.Text}>Bmi Calculator</Text>

        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity style={styles.button} title='Get Started' onPress={() => props.navigation.navigate('Currency Converter')}>
          <Text style={styles.Text}>Currency Converter</Text>
      

        </TouchableOpacity>

      </View>




    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ecde'
  },
  image: {
    alignItems: 'center',
  },

  bmitxtcontainer: {
    alignItems: 'white',
    marginLeft: 35,
    fontVariant: 'small-caps',
    marginTop: 10,


  },
  bmitxt: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    fontVariant: 'small-caps'
  },

  titlecontainer: {
    flexDirection: "row",
    backgroundColor: '#2c6975'
  },

  buttoncontain: {
    justifyContent: 'flex-end',
    borderColor: 'skyblue',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#68b2a0',
    height: 60,
    width: 350,
    borderRadius: 10,
    borderWidth: 1,
  },

  Text: {
    paddingTop: 12,
    color: 'black',
    textAlign: 'center',
    alignItems: 'center',
    fontSize:27,
    fontWeight: '800',
    fontVariant: 'small-caps'

  },
  profile: {
    width: 50,
    height: 50,
    alignItems: 'flex-start',
    margin: 10,
  },

})

export default Home