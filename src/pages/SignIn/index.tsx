import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Slider from '@react-native-community/slider';
import * as LocalAuthentication from 'expo-local-authentication';

export default function SignIn() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordSize, setPasswordSize] = useState(6);
  async function verifyAvailableAuthentication() {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    console.log(compatible);
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
  }

  async function handleAuthentication() {
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isBiometricEnrolled) {
      return Alert.alert(
        'Login',
        'Nenhuma biometria encontrada. Por favor, cadastre no dispositivo!',
      );
    }
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login com biometria',
      fallbackLabel: 'Biometria não reconhecida',
    });

    setIsAuthenticated(auth.success);
  }
  useEffect(() => {
    verifyAvailableAuthentication();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../src/assets/password.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{passwordSize} caracteres</Text>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#2b79c2"
          thumbTintColor="#0058A0"
          value={passwordSize}
          onValueChange={value => setPasswordSize(parseFloat(value.toFixed(0)))}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
      {/* <Text>Usuário conectado: {isAuthenticated ? 'Sim' : 'Não'}</Text>
      <Button
        title="Entrar"
        onPress={handleAuthentication}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: '8%',
  },
  sliderContainer: {
    width: '80%',
    marginVertical: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
  },
  slider: {
    height: 50,
  },
  button: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0058A0',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
