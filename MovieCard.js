import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

// MovieCard component
const MovieCard = ({ movie, isFavorite, onToggleFavorite }) => {
  const { name, imdb_rating, genre, duration, img_link } = movie;

  return (
    // Card container
    <View style={styles.cardContainer}>
      <View style={styles.cardImgContainer}>
        <Image style={styles.cardImg} source={{ uri: img_link }} />
        <TouchableOpacity onPress={() => onToggleFavorite(movie.id)}>
            <Text style={styles.favoriteButton}>{isFavorite ? 'Unfavorite' : 'Favorite'}</Text>
        </TouchableOpacity>
      </View>
        {/* Card details */}
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
    //width: 270, // Adjusted from rem to pixels
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 5,
  },
  cardImgContainer: {
    width: '100%',
    height: 200, 
    backgroundColor: '#000',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardDetails: {
    padding: 10,
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF', 
  },
  genre: {
    fontSize: 16,
    color: '#FFFFFF', 
  },
  ratings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});

export default MovieCard;
