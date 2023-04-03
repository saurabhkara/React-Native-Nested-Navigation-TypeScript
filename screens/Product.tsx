import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

type TProp = NativeStackScreenProps<RootStackParams, "product">;

const Product= ({ route } :TProp) => {
  return (
    <View>
      <Text>{route.params.name}</Text>
    </View>
  );
};

export default Product;
