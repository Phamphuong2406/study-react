import { useDispatch, useSelector } from "react-redux"
import { Store } from "../store"
import { Text, Button, View } from "react-native"
import { decrement, increment } from "@/slices/counterSlice"

const CounterEx = () => {
    const count = useSelector((state: Store) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>

            <Button
                title="+"
                onPress={() => dispatch(increment())} />
            <View>
                <Text style={{ fontSize: 30 }}>{count}</Text>
            </View>


            <Button
                title="-"
                onPress={() => dispatch(decrement())}
            />

        </>
    )
}

export default CounterEx