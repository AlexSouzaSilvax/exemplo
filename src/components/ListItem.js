import React from 'react';
import { View, Text } from 'react-native';

export default function ListItem({ data }) {
    return (
        <View style={{ padding: 10 }}>
            <Text>{data.tarefa}</Text>
        </View>
    );
}