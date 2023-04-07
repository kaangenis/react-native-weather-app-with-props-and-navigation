import { SafeAreaView, TouchableOpacity, View, Image, TextInput, Text } from 'react-native'
import React, { Component } from 'react'

export default class Home extends Component {
  state = {
    cityName:''
  }

  changeText = (val) => {
    this.setState({
      cityName: val

    })
  }

  render() {
    let imageUrl = 'https://cdn-icons-png.flaticon.com/512/1146/1146808.png'
    const {cityName} = this.state
    return (
      <SafeAreaView style={{ backgroundColor: '#6495ED', flex: 1 }}>

        <View style={{ 
          justifyContent: 'center', 
          alignItems: 'center', 
          flex: 1 }}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("Settings", {cityName})}>

            <Image style={{ height: 100, width: 100 }} source={{ uri: imageUrl }} />

          </TouchableOpacity>

          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 20,
              justifyContent: 'center',
              alignSelf: 'center',
              width: '85%',
              height: '5%',
              padding: 5,
              fontSize:20,
              fontWeight:'800'
            }}
            placeholder='Şehir giriniz...'
            textAlign='center'
            clearButtonMode='always'
            onChangeText={val => this.changeText(val)} />

        </View>

      </SafeAreaView>
    )
  }
}




/* import { Text, View, SafeAreaView, Button, TextInput, Alert, Image } from 'react-native'
import React, { Component } from 'react'



export default class App extends Component {
  state = {
    cityName: '',
    countryName: '',
    temp: '',
    tempFeelsLike: '',
    tempMin: '',
    tempMax: '',
    condition: '',
    cityInput: '',
    icon: 'https://cdn-icons-png.flaticon.com/512/9176/9176568.png'
  }

  getWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityInput}&appid=64e633162a6f402b163d49d7596fb69f&lang=tr`)
      .then(data => data.json())
      .then(getData => {
        this.setState({
          cityName: getData.name + " / ",
          countryName: getData.sys.country,
          temp: (getData.main.temp - 272.15).toFixed() + "°C" ,
          tempFeelsLike: "Hissedilen: " + (getData.main.feels_like - 272.15).toFixed() + "°C",
          tempMin: "En düşük: " + (getData.main.temp_min - 272.15).toFixed() + "°C",
          tempMax: "En yüksek: " + (getData.main.temp_max - 272.15).toFixed() + "°C",
          condition: getData.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${getData.weather[0].icon}@2x.png`

        })
      })
      .catch(err => Alert.alert("Geçersiz bir değer girdiniz."))
  }

  changeText = (val: any) => {
    this.setState({
      cityInput: val
    })


  }

  render() {
    const {
      cityName,
      countryName,
      temp,
      tempFeelsLike,
      tempMin,
      tempMax,
      condition,
      icon } = this.state
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFE4C4' }}>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1
        }}>

          <View style = {{
            borderWidth:1,
            borderRadius:20,
            width:'80%',
            height:'60%',
            justifyContent:'center',
            alignItems:'center'
          }}>

            <Image style = {{width:100, height:100}} source={{uri: icon}} />
            <Text style={{ fontSize: 36, fontWeight:'800' }}>{temp}</Text>
            <Text style={{ fontSize: 30, fontWeight:'600' }}>{cityName}{countryName}</Text>
            <Text style={{ fontSize: 30, fontWeight:'600' }}>{condition}</Text>
            <Text style={{ fontSize: 20, fontWeight:'300' }}>{tempFeelsLike}</Text>
            <Text style={{ fontSize: 20, fontWeight:'300' }}>{tempMin}</Text>
            <Text style={{ fontSize: 20, fontWeight:'300' }}>{tempMax}</Text>

          </View>

          <TextInput
            style={{
              borderWidth: 1,
              width: '80%',
              height: '6%',
              borderRadius: 20,
              padding: 10
            }}
            placeholder='Şehir ismi giriniz..'
            textAlign='center'
            onChangeText={val => this.changeText(val)} />

          <Button
            title='Şehir ara'
            onPress={this.getWeatherData} />


        </View>

      </SafeAreaView>
    )
  }
} */