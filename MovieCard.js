import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieCard = ({ movie }) => {
  const { name, imdb_rating, genre, duration, img_link } = movie;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImgContainer}>
        <Image style={styles.cardImg} source={{ uri: img_link }} />
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.genre}>Genre: {genre}</Text>
        <View style={styles.ratings}>
          <Text>Rating: {imdb_rating}</Text>
          <Text>{duration} mins</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 270, // Adjusted from rem to pixels
    backgroundColor: '#0e2e53',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderRadius: 4,
    elevation: 3,
    marginBottom: 10, // For spacing between cards
  },
  cardImgContainer: {
    width: '100%',
    height: 300, // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardDetails: {
    padding: 15, // Adjust as needed
    backgroundColor: '#0e2e53',
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF', // Assuming white text
  },
  genre: {
    fontSize: 16,
    color: '#FFFFFF', // Assuming white text
  },
  ratings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});

export default MovieCard;
