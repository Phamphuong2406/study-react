import { Store } from "../store"
import { useSelector } from "react-redux";

const CouterExValue = () => {
    const count = useSelector((state: Store) => state.counter.value)

}
export default CouterExValue;