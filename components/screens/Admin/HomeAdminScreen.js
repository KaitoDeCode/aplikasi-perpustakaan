import { View, Text, Image } from 'react-native'
import React from 'react'
import image from "../../../assets/images/admin.png" 

const HomeAdminScreen = () => {
  return (
    <View className="w-full min-h-screen bg-white">
        <Image
            className="w-full h-[40vh]"
            source={image}
        />
        <View className="p-2">
            <Text className="text-6xl text-sky-500 font-extrabold">Selamat Datang,</Text>
            <Text className="text-slate-400">Selamat datang Admin, ini adalah halaman yang dibuat untuk mengetahui segala aktifitas perpustakaan</Text>
            <View className="mt-4">
                <Text className="text-2xl text-sky-500 font-bold">Fitur</Text>
                <Text className="text-slate-400">Disini admin bisa menambah,mengurangi,melihat segala data yang sangat penting bagi aplikasi contohnya adalah <Text className=" text-sky-500 font-bold">Buku</Text>,<Text className=" text-sky-500 font-bold"> Pelanggan</Text>,dan <Text className=" text-sky-500 font-bold"> History peminjaman</Text></Text>
            </View>
        </View>
    </View>
  )
}

export default HomeAdminScreen