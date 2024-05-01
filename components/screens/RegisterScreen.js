import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const RegisterScreen = ({navigation}) => {
  return (
    <View className="flex flex-1 mt-5 p-5">
      <Text className="text-2xl font-bold text-sky-600">Daftar</Text>
      <Text className="text-slate-400">Daftar untuk menjadi pelanggan perpustakaan</Text>
      <View className="flex flex-col gap-3 mt-4">
        <TextInput className="border rounded-md px-2 py-1" placeholder='First Name'/>
        <TextInput className="border rounded-md px-2 py-1" placeholder='Last Name'/>
        <TextInput className="border rounded-md px-2 py-1" keyboardType='numeric' placeholder='Age'/>
        <TextInput className="border rounded-md px-2 py-1" keyboardType='email-address' placeholder='Email'/>
        <TextInput className="border rounded-md px-2 py-1" secureTextEntry={true} placeholder='Password'/>
        <TextInput className="border rounded-md px-2 py-1" secureTextEntry={true} placeholder='Confirmation Password'/>
      </View>
      <View className="mt-20">
        <TouchableOpacity className="bg-sky-600 mt-5 py-2 rounded-lg">
                    <Text className="text-center text-white font-semibold">Daftar Pelanggan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPressOut={()=>navigation.navigate("Login")} className="mt-5 py-2 rounded-lg">
                <Text className="text-center text-slate-400">Sudah menjadi pelanggan?  <Text className="font-bold text-sky-600">Login sekarang!</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RegisterScreen