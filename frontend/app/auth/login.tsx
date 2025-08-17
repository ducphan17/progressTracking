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
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
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
            <TouchableOpacity style={styles.primaryButton}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
            <View style={styles.continueAsContainer}>
              <View style={styles.sideLines}></View>
              <Text style={styles.bottomText}> Or continue with </Text>
              <View style={styles.sideLines}></View>
            </View>
            <View style={styles.continueOptions}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/guestLogo.png")}
                  style={styles.logo}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/appleLogo.png")}
                  style={styles.logo}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/images/googleLogo.png")}
                  style={styles.logo}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.createAccContainer}>
              <Text style={styles.bottomText}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("/auth/signup");
                }}
              >
                <Text style={styles.bottomText}> Sign Up</Text>
              </TouchableOpacity>
            </View>
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
    paddingVertical: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)", // Shadow color (black with 75% opacity)
    textShadowOffset: { width: 2, height: 2 }, // Horizontal and vertical offset
    textShadowRadius: 8, // Blur radius
  },
  subTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingVertical: 8,
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
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 10,
  },
  primaryButton: {
    backgroundColor: "#251F5B",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginVertical: 30,
    height: 56,
    justifyContent: "center",
  },
  continueAsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sideLines: {
    flex: 1,
    height: 1,
    backgroundColor: "#fff",
  },
  continueOptions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
    resizeMode: "contain",
    marginVertical: 20,
  },
  bottomText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  },
  createAccContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30,
  },
});
