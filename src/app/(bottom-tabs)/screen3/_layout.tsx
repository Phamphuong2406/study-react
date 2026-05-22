import { Stack } from "expo-router";

export default function Screen3Layout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Home',
                }}
            />

            <Stack.Screen
                name="update"
                options={{
                    title: 'Update',
                }}
            />
        </Stack>
    )
}