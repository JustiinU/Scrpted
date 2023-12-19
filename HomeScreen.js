import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import MovieCard from './MovieCard.js'; // Ensure this is also converted to React Native

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const { data } = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Scrpted</Text>
      </View>
      
      <ScrollView style={styles.main}>
        {movies && movies.length > 0 && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Assuming white background
  },
  header: {
    // Your header styles
    height: 60, // Example height
    backgroundColor: '#000', // Example background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    // Your heading styles
    color: '#fff', // Example text color
    fontSize: 24, // Example font size
  },
  main: {
    // Your main content styles
    flex: 1,
  },
});

export default HomeScreen;
