import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import img from "../../assets/images/library.png"

const LoginScreen = ({navigation}) => {
  return (
    <View className="flex flex-1">
        <Image className="w-full object-cover h-[49vh]" source={img}/>
        <View className="p-5">
            <Text className="text-sky-600 text-4xl font-bold mt-10">Perpustakaan</Text>
            <Text className="text-slate-400">Masuk sebagai pelanggan di aplikasi perpustakaan</Text>
        </View>
        <View className="flex flex-col mt-3 px-5">
            <TextInput className="border rounded-md px-2 py-1" placeholder='Email'/>
            <TextInput className="border rounded-md px-2 py-1 mt-3" secureTextEntry={true} placeholder='Password'/>
            <TouchableOpacity className="bg-sky-600 mt-5 py-2 rounded-lg">
                <Text className="text-center text-white font-semibold">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={()=>navigation.navigate("Register")} className="mt-5 py-2 rounded-lg">
                <Text className="text-center text-slate-400">Belum menjadi pelanggan?  <Text className="font-bold text-sky-600">Daftar sekarang!</Text></Text>
            </TouchableOpacity>
            
        </View>
    </View>
  )
}

export default LoginScreen