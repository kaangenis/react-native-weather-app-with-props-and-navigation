import { SafeAreaView, Text, View, Button, Image, Alert } from 'react-native'
import React, { Component } from 'react'


export default class Settings extends Component {
    state = {
        city: '',
        country: '',
        temp: '',
        condition: '',
        icon: 'https://cdn-icons-png.flaticon.com/512/1146/1146808.png',
        nextDay: '',
        nextDayMin: '',
        nextDayMax: '',
        secondDay: '',
        secondMin:'',
        secondMax:'',
        thirdDay:'',
        thirdMin:'',
        thirdMax:'',
    }

    errCatch = () => {
        Alert.alert("Lütfen geçerli bir değer giriniz.")
        this.props.navigation.navigate("Home")
    }

    firstFunc = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.route.params.cityName}&appid={YOUR_API_KEY}&lang=tr`)
            .then(getData => getData.json())
            .then(data => this.setState({
                city: data.name + " / ",
                country: data.sys.country,
                temp: (data.main.temp - 272.15).toFixed() + "°C",
                condition: data.weather[0].description,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

            }))
            .catch(err => this.errCatch())

    }

    secondFunc = () => {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key={YOUR_API_KEY}&q=${this.props.route.params.cityName}&days=4&aqi=no&alerts=no`)
            .then(val => val.json())
            .then(getVal => {
                this.setState({
                    nextDay: getVal.forecast.forecastday[1].date,
                    nextDayMin: (getVal.forecast.forecastday[1].day.mintemp_c).toFixed() + "°C",
                    nextDayMax: (getVal.forecast.forecastday[1].day.maxtemp_c).toFixed() + "°C",
                    secondDay: getVal.forecast.forecastday[2].date,
                    secondMin: (getVal.forecast.forecastday[2].day.mintemp_c).toFixed() + "°C",
                    secondMax: (getVal.forecast.forecastday[2].day.maxtemp_c).toFixed() + "°C",
                    thirdDay: getVal.forecast.forecastday[3].date,
                    thirdMin: (getVal.forecast.forecastday[3].day.mintemp_c).toFixed() + "°C",
                    thirdMax: (getVal.forecast.forecastday[3].day.maxtemp_c).toFixed() + "°C"
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.firstFunc()
        this.secondFunc()
    }

    render() {
        const {
            city,
            country,
            temp,
            condition,
            icon,
            nextDayMin,
            nextDayMax,
            nextDay,
            secondDay,
            secondMin,
            secondMax,
            thirdDay,
            thirdMin,
            thirdMax
        } = this.state
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#B0C4DE' }}>

                <View style={{ flex: 1, alignItems: 'center' }}>

                    <View style={{ flex: 1, alignItems: 'center' }}>

                        <Text style={{ fontSize: 90, fontWeight: '300' }}>{temp}</Text>
                        <Text style={{ fontSize: 30, fontWeight: '300' }}>{city}{country}</Text>
                        <Text style={{ fontSize: 30, fontWeight: '300' }}>{condition}</Text>

                        <Image
                            source={{ uri: icon }}
                            style={{ width: 100, height: 100 }}
                        />

                        <View style = {{borderWidth:1,borderRadius:20, padding:20}}>

                            <View style ={{flexDirection:'row', justifyContent:'space-between'}} >
                                <Text style = {{fontSize:22, fontWeight:'bold'}}>Tarih</Text>
                                <Text style = {{fontSize:22, left:60, fontWeight:'bold'}}>Düşük</Text>
                                <Text style = {{fontSize:22, fontWeight:'bold'}}>Yüksek</Text>

                            </View>

                            <Text style={{ fontSize: 30, fontWeight: '300' }}>{nextDay}    {nextDayMin}     {nextDayMax}</Text>
                            <Text style={{ fontSize: 30, fontWeight: '300' }}>{secondDay}    {secondMin}   {secondMax}</Text>
                            <Text style={{ fontSize: 30, fontWeight: '300' }}>{thirdDay}     {thirdMin}   {thirdMax}</Text>

                        </View>

                    </View>

                    <View style={{ flex: 1 }}></View>

                </View>

                <View style={{ flex: 0.1 }}>

                    <Button
                        title='Önceki Sayfa'
                        onPress={() => this.props.navigation.navigate("Home")}
                    />

                </View>

            </SafeAreaView>
        )
    }
}
