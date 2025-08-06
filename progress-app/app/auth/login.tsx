import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ImageBackground
          source={require("../../assets/images/tree.png")}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "center" }}
        >
          <View style={styles.cardContainer}>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subTitle}>Email</Text>
            <View style={styles.inputContainer}>
              <Ionicons
                name="person-outline"
                size={20}
                color="#888"
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Email Address"
                //   value={email}
                //   onChangeText={setEmail}
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholderTextColor="rgba(0,0,0,0.5)"
              />
            </View>
            <Text style={styles.subTitle}>Password</Text>
            <View style={styles.inputContainer}>
              <Ionicons
                name="person-outline"
                size={20}
                color="#888"
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Email Address"
                //   value={email}
                //   onChangeText={setEmail}
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholderTextColor="rgba(0,0,0,0.5)"
              />
            </View>
            <View>
              <TouchableOpacity style={{ position: "absolute", right: 0 }}>
                <Text style={{ color: "white" }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.primaryButton}>
              <Text
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.35)", // frosted effect
    padding: 20,
    width: "100%",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
  },
  title: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
    textShadowColor: "rgba(0, 0, 0, 0.75)", // Shadow color (black with 75% opacity)
    textShadowOffset: { width: 2, height: 2 }, // Horizontal and vertical offset
    textShadowRadius: 8, // Blur radius
  },
  subTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingVertical: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)", // Shadow color (black with 75% opacity)
    textShadowOffset: { width: 2, height: 2 }, // Horizontal and vertical offset
    textShadowRadius: 8, // Blur radius
  },
  input: {
    flex: 1,
    padding: 16,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 10,
  },
  primaryButton: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginTop: 70,
    alignItems: "center",
    marginBottom: 24,
    height: 56,
    justifyContent: "center",
  },
});
