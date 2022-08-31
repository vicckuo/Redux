import { useSelector, useDispatch } from 'react-redux'
import { SET_ACCOUNT } from '../../data/actions/login'


export default function Account() {
    const account = useSelector((state) => state.account)
    const dispatch = useDispatch()

    return (
        <>
            <input
                type="text"
                value={account}
                onChange={(e) => {
                    dispatch({
                        type: 'SET_ACCOUNT',
                        value: e.target.value,
                    })
                }}
            />
            <div>目前account:{account}</div>
        </>
    )
}
