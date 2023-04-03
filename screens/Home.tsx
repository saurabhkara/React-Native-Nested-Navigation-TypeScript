import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import { RootStackParams } from "../App";


export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, marginVertical:'15%' }}>Home</Text>
        <CustomButton onPress={()=>navigation.navigate('products')} label="Products"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex:1,
  },
});
