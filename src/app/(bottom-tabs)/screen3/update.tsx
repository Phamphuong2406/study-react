import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native"
import { api } from "../../../../scripts/api";
import { useEffect, useState } from "react";

type User = {
    id: string;
    name: string;
    avatar: string;
    street: string;
    city: string;
    country: string;
};
export default function Update() {
    const { id } = useLocalSearchParams();
    const [user, useChange] = useState<User[]>([])
    const updateUser = () => {

        console.log('update user', id);

        router.back();
    };

    const fetchUser = async () => {
        try {
            const response = await api.get(`/user/${id}`);
            //console.log(response)
            // Giả sử response trả về mảng người dùng
            console.log(response)
        } catch (error) {
            console.error('Fetch users error:', error);
        }
    }
    useEffect(() =>{
        fetchUser();
    },[])
    return (
        <View>
            <Text>{}</Text>
            <Button
                title="Lưu"
                onPress={updateUser}
            ></Button>
        </View>
    )
}