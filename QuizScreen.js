import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const QuizScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean');
        const data = await response.json();
        setQuestions(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (selectedAnswer) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = selectedAnswer === 'True';

    setUserAnswers(newUserAnswers); 

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
        navigation.navigate('ResultsScreen', {
            questions: questions,
            userAnswers: newUserAnswers,
          }); 
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading questions...</Text>
      </SafeAreaView>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.categoryTitle}>{decodeURIComponent(currentQuestion.category)}</Text>
      <View style={styles.card}>
        <Text style={styles.questionText}>{decodeURIComponent(currentQuestion.question)}</Text>
        <Text style={styles.counter}>{currentQuestionIndex + 1} of {questions.length}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.color} onPress={() => handleAnswer('True')}>
          <Text style={styles.buttonText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer('False')}>
          <Text style={styles.buttonText}>False</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#FCF6F5FF', 
      padding: 20,
      alignItems: 'center',
    },
    categoryTitle: {
      paddingTop: 0,
      paddingHorizontal: 20,
      fontSize: 29,
      textAlign: 'center',
      fontWeight: 'bold',
      width: '100%',
      color: '#333333FF', 
    },
    card: {
      padding: 20,
      alignItems: 'center',
      width: '100%', 
    },
    questionText: {
      fontSize: 18,
      textAlign: 'center',
      paddingHorizontal: 28,
      paddingVertical: 60,
      color: '#FCF6F5FF',
      justifyContent: 'center',
      backgroundColor: '#5B84B1FF',
      borderColor: '#FCF6F5FF', 
      borderWidth: 1,
      borderRadius: 8, 
    },
    counter: {
      paddingTop:8,  
      fontSize: 18,
      color: '#333333FF',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    button: {
      backgroundColor: '#FC766AFF',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 5,
    },
    buttonText: {
      color: '#FCF6F5FF',
      fontSize: 18,
    },
    color:{
      color: '#2DF1BB',
      backgroundColor: '#2DF1BB',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 5,
    }
  });
  
export default QuizScreen;
