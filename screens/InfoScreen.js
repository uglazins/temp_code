import React from 'react'
import { View, Text } from 'react-native'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-rn'
import { TouchableOpacity } from 'react-native'

const refreshPage = ()=>{
    window.location.reload();  }

const InfoScreen = () => {
    return (
        <View>
        <Header title="Back"  style={tw("mt-5 text-xl")}/>
        <View>
            <Text>ChatScreen</Text>
            <TouchableOpacity title = "button " onClick ={refreshPage}>
            <Text style={tw("text-center text-black text-xl")}>Show me something new</Text>
            </TouchableOpacity>
        </View>
        </View>

    )
}

export default InfoScreen
