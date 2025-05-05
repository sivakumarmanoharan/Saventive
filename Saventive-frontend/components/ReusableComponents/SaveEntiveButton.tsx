import react from 'react';
import {TouchableOpacity, Pressable, Text, View} from 'react-native';



interface SaventiveButtonProps {
    title :string;
}

const SaventiveButton: React.FC<SaventiveButtonProps> = ({title}) => {
    return (
                <Pressable className="bg-blue-600 rounded-lg p-4">
                    <Text className="text-white text-lg font-bold">{title}</Text>
                </Pressable>
    );
}

export default SaventiveButton;