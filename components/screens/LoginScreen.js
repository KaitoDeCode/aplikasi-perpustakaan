import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import img from "../../assets/images/library.png";
import { useRecoilState } from "recoil";
import { loginState } from '../../Utilities/atom';
import { fetchData } from '../../Utilities/fetchData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {


    const [loginProps, setLoginProps] = useRecoilState(loginState);
    const [loading, setLoading] = useState(false);

    async function handleLogin() {
        try {
            const response = await fetchData({
                url: "/login",
                method: "POST",
                body: loginProps
            });
            if(response.meta.success){
                await AsyncStorage.setItem("access_token",response.data.token)
                await AsyncStorage.setItem("role",response.data.role)
            }

            if(response.data.role == "user"){
                navigation.navigate("/User/Home")
            }else if(response.data.role == "admin"){
                navigation.navigate("/Admin/Home")
            }
        } catch (error) {
            console.log(error)
        }
            
    }

    return (
        <View className="flex-1">
            <Image source={img} className="w-full h-[49vh]" />
            <View className="p-5">
                <Text className="text-sky-600 text-4xl font-bold mt-10">Perpustakaan</Text>
                <Text className="text-slate-400">Masuk sebagai pelanggan di aplikasi perpustakaan</Text>
            </View>
            <View className="flex flex-col mt-3 px-5">
                <TextInput keyboardType='email-address' onChangeText={(e) => setLoginProps({ ...loginProps, email: e })} className="border rounded-md px-2 py-1" placeholder='Email' />
                <TextInput onChangeText={(e) => setLoginProps({ ...loginProps, password: e })} className="border rounded-md px-2 py-1 mt-3" secureTextEntry={true} placeholder='Password' />
                <TouchableOpacity onPress={handleLogin} className={`bg-sky-600 mt-5 py-2 rounded-lg ${loading ? 'opacity-50' : ''}`}>
                    <Text className="text-center text-white font-semibold">Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Register")} className="mt-5 py-2 rounded-lg">
                    <Text className="text-center text-slate-400">Belum menjadi pelanggan? <Text className="font-bold text-sky-600">Daftar sekarang!</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;
