import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { useState, useCallback } from 'react';




export const BmiCalculator = () => {

  const [weight, setweight] = useState('');
  const [height, setheight] = useState('');
  const [bmi, setbmi] = useState('');
  const [description, setdescription] = useState('');


  const CalculatBmi = () => {

    const bmi = weight / ((height / 100) * (height / 100))
    setbmi(bmi.toFixed(1))

    if (bmi <= 18.5) {
      setdescription('UnderWight ! Eat More...')

    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
      setdescription('Normal , Keep it Up......')
    }
    else if (bmi >= 25 && bmi <= 29.9) {
      setdescription('Obese, Hit The GYM......')
    }

  }
  return (

    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titletext}>BMI Calculator</Text>
      </View>

      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={(text) => setweight(text)}
        placeholder='Enter Weight in Kg'
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        value={height}
        onChangeText={(text) => setheight(text)}
        placeholder='Enter Height in cm'
        keyboardType='numeric'
      />

      <TouchableOpacity style={styles.button} onPress={CalculatBmi}>
        <Text style={styles.buttontxt}>Calculate</Text>
      </TouchableOpacity>

      <View style={styles.resultview}>
        <Text style={styles.result} >{bmi}</Text>
        <Text style={styles.result}>{description}</Text>

        <View style={styles.img}>
          <Image
            source={{ uri: 'https://m.timesofindia.com/photo/59645926.cms' }}
            style={{ width: 350, height: 180, }} />
        </View>

      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //paddingTop:constants.statusBarHeight,
    backgroundColor: '#e0ecde'

  },
  title: {
    backgroundColor: '#2c6975',
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    fontVariant:'small-caps'
  },
  titletext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    fontVariant:'small-caps'
  },
  input: {

    height: 55,
    width: '90%',
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#cde0c9',
    fontSize: 18,
    fontVariant:'small-caps'
  },
  button: {
    height: 50,
    width: '60%',
    margin: 15,
    borderWidth: 1 / 2,
    borderRadius: 5,
    backgroundColor: '#68b2a0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontxt: {
    fontSize: 23,
    fontWeight: 'bold',
    fontVariant:'small-caps'

  },
  resultview: {
    margin: 15,

  },
  result: {
    fontSize: 25,
    color: '#2c6975',
    fontWeight: 'bold',
    fontVariant:'small-caps'
  },
  img: {
    marginTop: 35,

  },


});

export default BmiCalculator