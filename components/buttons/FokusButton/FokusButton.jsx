import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FokusButton({ onPress, isRunning }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons 
        name={isRunning ? "pause" : "play"} 
        size={24} 
        color="#021123" 
        style={styles.icon}
      />
      <Text style={styles.buttonText}>
        {isRunning ? "Pausar" : "Começar"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
    fontWeight: "bold",
  },
});