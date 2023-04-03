import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import { RootStackParams } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Products() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <CustomButton
        onPress={() => navigation.navigate("login")}
        label="Login"
      />
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
        onPress={() => navigation.navigate("product",{name:'Shirt'})}
      >
        <Text>Move to Product</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
