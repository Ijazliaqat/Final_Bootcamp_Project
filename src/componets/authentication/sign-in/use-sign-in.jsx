import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { signInThunk } from '../../../store/siginSlice/signinThunk';

const useSignIn = () => {

    const dispatch = useDispatch()

    const initialValuesSignIn = {
        email: '',
        password: ''
    }

    const signInSchema = Yup.object().shape({
        email: Yup.string().required('Enter your Email'),
        password: Yup.string().required('Enter your Password')
    })

    const signInHandler = (values) =>{
        // console.log(values);

        dispatch(signInThunk(values))

    }
    return {
        initialValuesSignIn, signInSchema ,signInHandler
    }
}

export default useSignIn