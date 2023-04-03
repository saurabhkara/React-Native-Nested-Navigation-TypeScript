import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface IProp {
  onPress: () => void,
  label:string
}

export default function CustomButton({ onPress, label }: IProp) {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "cyan",
        borderRadius: 10,
        padding: 15,
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 18 }}>{label}</Text>
    </TouchableOpacity>
  );
}
