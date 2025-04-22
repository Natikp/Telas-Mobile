import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProductDetailsScreen() {
  const router = useRouter();

  const handleBuyNow = () => {
    alert('Produto comprado com sucesso!');
  };

  const handleLogout = () => {
    router.push('/Login'); // Redireciona para a tela de login
  };

  return (
    <View style={styles.container}>
      {/* Seta para voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/Login')}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      {/* Detalhes do Produto */}
      <Image
        source={{ uri: 'https://via.placeholder.com/300' }}
        style={styles.productImage}
      />
      <Text style={styles.productTitle}>Nome do Produto</Text>
      <Text style={styles.productDescription}>
        Este é um produto incrível com várias funcionalidades.
      </Text>
      <Text style={styles.productPrice}>R$ 199,99</Text>

      <TouchableOpacity style={styles.button} onPress={handleBuyNow}>
        <Text style={styles.buttonText}>Comprar Agora</Text>
      </TouchableOpacity>

      {/* Botão de Sair */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair do Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#810000',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
    marginTop: 60, // Para evitar sobreposição com o botão de voltar
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#810000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#810000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});