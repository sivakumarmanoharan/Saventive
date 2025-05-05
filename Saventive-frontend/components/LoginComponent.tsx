import React, { useState } from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import SaventiveButton from './ReusableComponents/SaveEntiveButton';


export default function LoginComponent(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
  
    return (
      <View className="flex-1 bg-green-200 justify-center items-center px-6">
        {/* Logo */}
        <Image
          source={require('../assets/Saventive_logo.png')}
          style={{ width: 200, height: 200, marginBottom: 16 }}
          resizeMode="contain"
        />
  
        {/* Login Form */}
        <View className="w-[300px] h-[300px] bg-white rounded-xl p-6 shadow-md">
          <Text className="text-xl font-bold text-center mb-4">Login</Text>
  
          {/* User ID Input */}
          <TextInput
            placeholder="User Name"
            value={userName}
            onChangeText={setUserName}
            className="bg-zinc-200 rounded-xl py-3 px-5 mb-3 text-base"
            placeholderTextColor="#888"
          />
  
          {/* Password Input */}
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="bg-zinc-200 rounded-xl py-3 px-5 mb-4 text-base"
            placeholderTextColor="#888"
          />
            <View className="flex-1 justify-center items-center">
                <View className="flex-row space-x-4">
                    <SaventiveButton title="Login" />
                    <SaventiveButton title="Sign Up" />
                </View>
            </View>
        </View>
      </View>
    );
  };
  