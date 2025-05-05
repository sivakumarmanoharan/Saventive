import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import { View } from 'react-native';
import SaventiveButton from 'components/ReusableComponents/SaveEntiveButton';
import LoginComponent from 'components/LoginComponent';

export default function App() {
  return (
    <>
      <View className="flex-1 bg-blue-200 justify-center items-end-safe px-6" />
      <LoginComponent />
    </>
  );
}
