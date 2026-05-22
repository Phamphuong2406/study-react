import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import Paragraph, { ThemeContext } from "../../comps/_app_paragraphs";

export default function Screen4() {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (

        <ThemeContext.Provider value={{theme, toggleTheme}}>

            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.container}>

                    <Paragraph />

                </View>

            </SafeAreaView>

        </ThemeContext.Provider>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});