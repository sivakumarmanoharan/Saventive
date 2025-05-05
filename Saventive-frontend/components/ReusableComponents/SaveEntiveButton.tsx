import React, { useRef } from 'react';
import { Animated, Pressable, Text } from 'react-native';

const SaventiveButton = ({ title }: { title: string }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.50,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        style={{
          transform: [{ scale }],
          backgroundColor: '#2563eb', // blue-600
          borderRadius: 12,
          padding: 16,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          {title}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default SaventiveButton;