import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack >
            <Stack.Screen
                name="PhotoScreen"
                options={{
                    title: '',
                }}
            />
            <Stack.Screen
                name="(bottom-tabs)"
                options={{
                    headerShown: false,
                }}
            />

        </Stack>
    );
}