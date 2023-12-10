import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function WebSocketView() {
  const ws = new WebSocket('ws://192.168.2.106:8088');

  useEffect(() => {
    ws.onopen = () => {
      ws.send('something'); // send a message
    };
  }, []);

  const sendMessage = () => {
    ws.send('outra');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Message" />
      <Button
        title="Send Message"
        onPress={sendMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
