import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import MovieCard from './MovieCard.js'; 

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(new Set());
  const [isLoggedIn, setIsLoggedIn] = useState(false); //False

  //Gets the movies from the API
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

  const toggleFavorite = (movieId) => {
    const newFavorites = new Set(favorites);
    if (favorites.has(movieId)) {
      newFavorites.delete(movieId);
    } else {
      newFavorites.add(movieId);
    }
    setFavorites(newFavorites);
  };


  const handleLoginLogoutPress = () => {
    if (isLoggedIn) {
      // Logout
      setIsLoggedIn(false); // Update login state
      // Navigate to the LoginScreen 
      navigation.replace('Login');
    } else {
      // Navigate to the LoginScreen for the user to log in
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Scrpted</Text>
        <TouchableOpacity onPress={handleLoginLogoutPress} style={styles.loginLogoutButton}>
          <Text style={styles.loginLogoutButtonText}>{isLoggedIn ? 'Logout' : 'Login'}</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.main}>
        {movies && movies.length > 0 && movies.map((movie) => (
          <MovieCard 
          key={movie.id} 
          movie={movie} 
          isFavorite={favorites.has(movie.id)}
          onToggleFavorite={toggleFavorite}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  header: {
    height: 60, 
    backgroundColor: '#000', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  heading: {
    color: '#fff', 
    fontSize: 24, 
  },
  main: {
    flex: 1,
  },

  loginLogoutButton: {
    padding: 10, 
    backgroundColor: 'black', 
    borderRadius: 5, 
  },
  loginLogoutButtonText: {
    color: '#fff', 
    fontSize: 16, 
  },
});

export default HomeScreen;
