import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  // Fetch movies data from API
  const fetchMovies = async () => {
    try {
      const response = await fetch('[API_URL]', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': '[YOUR_RAPIDAPI_HOST]',
          'X-RapidAPI-Key': '[YOUR_RAPIDAPI_KEY]'
        }
      });
      const data = await response.json();
      setMovies(data.results); // Assuming the API returns an object with a 'results' array
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Render movie item
  const renderMovieItem = ({ item }) => (
    <View style={styles.movieItem}>
      <Text style={styles.title}>{item.title}</Text>
      {/* Add more movie details here */}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id.toString()} // Assuming each movie has a unique 'id'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  movieItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Add more styles as needed
});

export default HomePage;
