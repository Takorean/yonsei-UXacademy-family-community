import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

export default ChatStack;
