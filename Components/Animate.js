import {Text, StyleSheet, Animated} from 'react-native';
import React from 'react';

const Animate = ({panValue, Responder, title}) => {
  return (
    <Animated.View
      style={{
        transform: [
          {translateX: {...panValue}.x},
          {translateY: {...panValue}.y},
        ],
      }}
      {...Responder.panHandlers}>
      <Text style={styles.txt}>{title}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 60,
    marginTop: 55,
  },
});

export default Animate;
