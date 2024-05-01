import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function fetchData({
    url,
    method = "GET",
    body = null,
}){
    const configuration = {
        method: method,
        headers:{
            "Content-Type":"application/json"
        }
    };
    const token = await AsyncStorage.getItem('access_token');

    if(token !== null){
        configuration.headers.Authorization=`Bearer ${token}`
    }

    if(body !== null){
        configuration.body = JSON.stringify(body);

    }

    const api_url = "http://192.168.1.3:8000/api";
    const response = await fetch(api_url + url, configuration);
    const result = await response.json();
    if(!result.meta.success){
        Alert.alert("Error", result.data["error"] || "Something went wrong");
    }

    return result;
}
