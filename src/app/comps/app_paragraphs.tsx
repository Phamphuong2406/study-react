import { createContext, useContext } from "react";
import { View, Text, Button } from "react-native";

export const ThemeContext = createContext('light');

export default function Paragraph() {

    const theme = useContext(ThemeContext);

    return (

        <View style={{
            backgroundColor: theme === 'light' ? 'white' :
                'gray', flex: 1
        }}>

            <Text>

                test cách sử dụng useContext    test cách sử dụng useContext    test cách sử dụng useContext

            </Text>

        </View>

    );

}