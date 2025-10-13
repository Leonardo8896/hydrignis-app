import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { ENV } from '../env';

const api_adress = ENV.API_ADDRESS;

export async function getDevices(token) {
    try {
        const response = await fetch(`${api_adress}/devices`, {
            method: "GET",
            headers: {
                // "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        console.log(`Response status: ${response.status}`);
        //console.log(`Response: ${response.text()}`);
        const json = await response.json();
        if (response.status === 401) {
            alert(json["error"]);
            return null;
        } else if (response.status === 200) {
            // alert("Login realizado com sucesso!");
            return json;
        } else if (response.status === 400) {
            alert(json["error"]);
            return null;
        }
    } catch (error) {
        console.error("Erro ao enviar:", error);
    }
}