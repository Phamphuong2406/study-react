import { Button } from "@react-navigation/elements";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import { api } from "../../../../scripts/api";

export default function Update() {
    const { id } = useLocalSearchParams();
    const [userItem, userI] = useState<User>();
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
            userI(response);
        } catch (error) {
            console.error('Fetch users error:', error);
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <View>
            {
                userItem && (
                    <Item
                        user={userItem} />
                )
            }

        </View>
    )

}

type User = {
    id: string;
    name: string;
    avatar: string;
    street: string;
    city: string;
    country: string;
};
type ItemProps = {
    user: User;
}
const Item = ({ user }: ItemProps) => {

    const [name, setName] = useState(user.name);
    const [street, setStreet] = useState(user.street);
    const [avatar, setAvatar] = useState(user.avatar);
    const [city, setCity] = useState(user.city);
    const [country, setCountry] = useState(user.country);
    const handleSave = async () => {
        if ((name === '' || street === '' || avatar === '' || city === '' || country === '')) {
            Alert.alert('Vui long dien day du thong tin')
            return;
        }
        try {
            console.log(name, avatar, city, country, street);
            const userUpdate = { name, avatar, city, country }
            const response = await api.put(`/user/${user.id}`, userUpdate)
            router.back();
        }
        catch (error) {
            console.error('Thêm thất bại:', error);
        }

    }
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="ten"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="avatar"
                value={avatar}
                onChangeText={setAvatar}
            />
            <TextInput
                style={styles.input}
                placeholder="duong"
                value={street}
                onChangeText={setStreet}
            />
            <TextInput
                style={styles.input}
                placeholder="city"
                value={city}
                onChangeText={setCity}
            />
            <TextInput
                style={styles.input}
                placeholder="que quan"
                value={country}
                onChangeText={setCountry}
            />
            <Button onPress={handleSave}>Luuw</Button>

        </View>
    )

}
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderWidth: 1,
        borderColor: 'gray',
        width: '100%'
    },
    form: {
        flexDirection: 'column',
        gap: 20
    }
})