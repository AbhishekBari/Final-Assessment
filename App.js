import {View, StyleSheet, Animated, PanResponder} from 'react-native';
import React, {useRef} from 'react';

import Paragraph from './Components/Paragraph';
import Animate from './Components/Animate';

const App = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panTwo = useRef(new Animated.ValueXY()).current;
  const panThree = useRef(new Animated.ValueXY()).current;
  const panFour = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  const panResponderTwo = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        panTwo.setOffset({
          x: panTwo.x._value,
          y: panTwo.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: panTwo.x, dy: panTwo.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        panTwo.flattenOffset();
      },
    }),
  ).current;

  const panResponderThree = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        panThree.setOffset({
          x: panThree.x._value,
          y: panThree.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [null, {dx: panThree.x, dy: panThree.y}],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: () => {
        panThree.flattenOffset();
      },
    }),
  ).current;

  const panResponderFour = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        panThree.setOffset({
          x: panFour.x._value,
          y: panFour.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [null, {dx: panFour.x, dy: panFour.y}],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: () => {
        panFour.flattenOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Paragraph />
      <View style={styles.container2}>
        <View style={{flexDirection: 'row'}}>
          <Animate panValue={pan} Responder={panResponder} title="software" />
          <Animate
            panValue={panTwo}
            Responder={panResponderTwo}
            title="gallery"
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Animate
            panValue={panThree}
            Responder={panResponderThree}
            title="desktop"
          />
          <Animate
            panValue={panFour}
            Responder={panResponderFour}
            title="Lorem"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  container2: {
    width: '95%',
    height: '35%',
    marginTop: 75,
    alignItem: 'center',
    backgroundColor: 'grey',
    borderRadius: 20,
  },
});

export default App;
