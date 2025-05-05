import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import SaventiveButton from './ReusableComponents/SaveEntiveButton';

// If using Expo, place your logo in the assets folder and adjust the path below
const logo = require('../assets/Saventive_logo.png');

export default function LoginComponent() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-blue-200 justify-center items-center px-4">
      {/* Logo */}
      <Image
        source={logo}
        className="w-48 h-20 mb-6"
        resizeMode="contain"
      />

      {/* Card */}
      <View className="w-[330px] bg-gray-200 rounded-2xl p-6 shadow-md">
        <Text className="text-xl font-bold text-center mb-6">Login</Text>
        <TextInput
          placeholder="User Name"
          value={userName}
          onChangeText={setUserName}
          className="bg-zinc-200 rounded-xl py-3 px-5 mb-3 text-base text-gray-700"
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="bg-zinc-200 rounded-xl py-3 px-5 mb-4 text-base text-gray-700"
          placeholderTextColor="#888"
        />

        {/* Button Row */}
        <View className="flex flex-row mb-4 items-center justify-center p-4 gap-x-10">
          <SaventiveButton title='Login'/>
          <SaventiveButton title='Sign up' />
        </View>

        <Text className="text-center text-gray-500 mb-2">
          Forgot your password?{' '}
          <Text className="text-blue-600 underline">Reset it here.</Text>
        </Text>
        <Text className="text-center text-gray-500 text-sm">
          By logging in, you agree to our{' '}
          <Text className="text-blue-600 underline">Terms of Service</Text> and{' '}
          <Text className="text-blue-600 underline">Privacy Policy</Text>.
        </Text>
      </View>
    </View>
  );
}
  