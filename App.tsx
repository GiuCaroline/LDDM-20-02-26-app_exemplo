import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native/types_generated/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, mundo!</Text>
      <Button style={styles.botao} title= "Clique aqui"
      onPress={()=> alert('Botão clicado!')} 

       />
      <StatusBar style="auto" />
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
  titulo: {
    fontSize: 30,
    color: 'red',
  },
  botao: {
    
  }
});
