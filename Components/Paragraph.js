import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Paragraph = () => {
  return (
      <View>
    <Text style={styles.textStyle}>
      Lorem Ipsum is simply text of the __________ and typesetting industry.
      Ipsum has been the indu__________ stry's standard dummy text ever since
      the __________ when an printer took a galley of type and it to make a type
      specimen book. It has __________ not only five
    </Text>
    <Text style={styles.textStyle}>========================</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 15,
  },
});

export default Paragraph;
