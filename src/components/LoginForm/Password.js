import { useSelector, useDispatch } from 'react-redux'
import { SET_PASSWORD } from '../../data/actions/login'

export default function Password() {
    const password = useSelector((state) => state.password)
    const dispatch = useDispatch()

    return (
        <>
            <input
                type="text"
                value={password}
                onChange={(e) => {
                    dispatch({
                        type: 'SET_PASSWORD',
                        value: e.target.value,
                    })
                }}
            />
            <div>目前password:{password}</div>
        </>
    )
}
