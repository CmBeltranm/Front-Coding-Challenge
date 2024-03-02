import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResultsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { questions, userAnswers } = route.params;
  
  const score = userAnswers.reduce((total, userAnswer, index) => {
    return total + (userAnswer === (questions[index].correct_answer === 'True') ? 1 : 0);
  }, 0);

  return (
    <View style={styles.container}>
        <Text style={styles.score}>You scored</Text>
        <Text style={styles.scoreDetail}>{score} / {questions.length}</Text>
        <ScrollView style={styles.scrollView}>
            {questions.map((question, index) => (
                <View key={index} style={[
                styles.questionItem,
                userAnswers[index] === (question.correct_answer === 'True')
                    ? styles.correctAnswer
                    : styles.incorrectAnswer 
                ]}>
                <Text style={styles.questionText}>
                    {userAnswers[index] === (question.correct_answer === 'True') ? '+' : '-'}{' '}
                    {decodeURIComponent(question.question)}
                </Text>
                </View>
        ))}
    </ScrollView>

        <TouchableOpacity style={styles.playAgainButton} onPress={() => navigation.navigate('StartScreen')}>
            <Text style={styles.playAgainText}>PLAY AGAIN?</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      flex: 1,
      padding: 20,
      paddingTop: 0,
      backgroundColor: '#FCF6F5FF', 
    },
    scrollView: {
      flex: 3,
      padding: 20,
      paddingTop: 50, 
      backgroundColor: '#FCF6F5FF', 
    },
    score: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
      color: '#333333FF',
    },
    scoreDetail: {
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20,
      color: '#333333FF', 
    },
    questionItem: {
      marginVertical: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#5B84B1FF', 
      borderRadius: 5,
      backgroundColor: '#FCF6F5FF', 
    },
    questionText: {
      fontSize: 18,
      color: '#333333FF', 
    },
    playAgainButton: {
      backgroundColor: '#FC766AFF',
      padding: 15,
      marginTop: 20,
      borderRadius: 8,
      alignItems: 'center',
    },
    playAgainText: {
      color: '#FCF6F5FF',
      fontSize: 18,
    },

    questionItem: {
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#FCF6F5FF', 
      },
      correctAnswer: {
        borderColor: '#198754FF',
      },
      incorrectAnswer: {
        borderColor: '#DC3545FF', 
      },

  });
  

export default ResultsScreen;