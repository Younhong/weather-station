import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Raining bit, hehe"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Its' Raining Day, Hallelujah!",
        subtitle: "It's raining, Hallelujah"
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ["#373B44", "#4286f4"],
        title: "Its' Raining Day, Hallelujah!",
        subtitle: "It's raining, Hallelujah"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#373B44", "#4286f4"],
        title: "Tornados",
        subtitle: "Stay in your house"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snowy",
        subtitle: "Do you wanna build snowman?"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny",
        subtitle: "Go burn it"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "Cloudy weather, so cool"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Foggy",
        subtitle: "Can't See Anything Outside. Drive Carefully,."
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Sandy",
        subtitle: "It's like you have no glasses on."
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Ash",
        subtitle: "It's like you have no glasses on."
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Smoker",
        subtitle: "It's like you have no glasses on."
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mists",
        subtitle: "It's like you have no glasses on."
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    }
  };

export default function Weather({temp, condition}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>  
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    name={weatherOptions[condition].iconName}
                    size={96}
                    color="white"/>
                <Text style={styles.temp}>
                    {temp}
                </Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
        "Fog",
        "Squall", 
        "Tornado", 
        "Sand", 
        "Ash",
        "Smoke"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})