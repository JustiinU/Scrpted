import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import MovieCard from './MovieCard'; // Make sure this is the correct path to your MovieCard component


const fetchFavoritesFromBackend = async () => {

    // Simulate fetching favorites from a backend
  return new Set(); // Return an empty set to start
};

const toggleFavoriteOnBackend = async (movieId) => {
    // Simulate toggling favorite status on the backend
  console.log(`Toggling favorite status for movieId: ${movieId}`);
   
};

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [movies, setMovies] = useState([]); // Replace with movie data

  useEffect(() => {
    // Simulate loading favorites from a backend
    fetchFavoritesFromBackend().then(favs => {
      setFavorites(favs);
    });
  }, []);

  const handleToggleFavorite = (movieId) => {
    toggleFavoriteOnBackend(movieId).then(() => {
      // update local state
      const newFavorites = new Set(favorites);
      if (newFavorites.has(movieId)) {
        newFavorites.delete(movieId);
      } else {
        newFavorites.add(movieId);
      }
      setFavorites(newFavorites);
    });
  };

  if (movies.length === 0) {
    // Placeholder until movies are fetched from the backend
    return <Text>Loading movies...</Text>;
  }

  return (
    <ScrollView style={styles.scrollView}>
      {movies.filter(movie => favorites.has(movie.id)).map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.has(movie.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },

});

export default FavoritesScreen;
