import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StartScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Welcome to the Trivia Challenge!</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.description}>
          You will be presented with 10 True or False questions.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.challenge}>Can you score 100%?</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.beginButton}
          onPress={() => navigation.navigate('QuizScreen')}
        >
          <Text style={styles.beginText}>BEGIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCF6F5FF',
    },
    section: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '10%',
    },
    title: {
      color: '#333333FF',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    description: {
      color: '#333333FF',
      fontSize: 25,
      textAlign: 'center',
    },
    challenge: {
      color: '#333333FF',
      fontSize: 25,
      textAlign: 'center',
    },
    beginButton: {
      backgroundColor: '#5B84B1FF',
      paddingHorizontal: 60,
      paddingVertical: 20,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: '#FCF6F5FF',
    },
    beginText: {
      color: '#FCF6F5FF',
      fontSize: 25,
      fontWeight: 'bold',
    },
  });
