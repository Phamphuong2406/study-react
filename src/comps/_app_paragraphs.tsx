import React, { createContext, useContext } from "react";

import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
};
export const ThemeContext =
    createContext<ThemeContextType>({
        theme: 'light',
        toggleTheme: () => {},
    });

export default function Paragraph() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const isDark = theme === 'dark';

    return (

        <View
            style={[
                styles.container,
                {
                    backgroundColor: isDark ? '#000' : '#fff'
                }
            ]}
        >

            <Text
                style={[
                    styles.text,
                    {
                        color: isDark ? '#fff' : '#000'
                    }
                ]}
            >
                Theme hiện tại: {theme}
            </Text>

            <Button
                title="Đổi theme"
                color ={isDark ? '#fff' : '#000'}
                onPress={toggleTheme}
            />

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 24,
        marginBottom: 20,
    },

});