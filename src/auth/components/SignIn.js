import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AxiosClient from '../../core/api/axiosClient';

import { useForm } from '../../core/hooks/useForm';
import { UserContext } from '../context/UserContextProvider';

// Admin User admin@mail.com : 12345678
// Customer User jhon_doe@mail.com : 12345678

export const SignIn = () => {
	const navigate = useNavigate();

	const { signIn } = useContext(UserContext);

	const initialValues = { email: '', password: '' };
	const { handleOnChange, formValues } = useForm({ initialValues });
	const { email, password } = formValues;

	const [loading, setLoading] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		if (loading) return;
		setLoading(true);

		const axiosClient = new AxiosClient();
		try {
			await axiosClient.post({ path: '/login', data: formValues });
			// authRequest interceptor adds token to header
			const { user } = await axiosClient.get({ path: '/user/me' });
			signIn(user);
			setLoading(false);
			navigate('/', { replace: true });
		} catch (error) {
			setLoading(false);
			Swal.fire({
				title: 'Error!',
				text: JSON.stringify(error),
				icon: 'error',
				confirmButtonText: 'OK',
				confirmButtonColor: '#256d85',
			});
		}
	};

	const loader = <div className='loader'> </div>;

	return (
		<div className='form-wrapper'>
			<form onSubmit={handleSubmit}>
				<h2>Sign In</h2>
				<input
					onChange={handleOnChange}
					name='email'
					placeholder='E-mail'
					type='email'
					value={email}
					required
				/>
				<input
					onChange={handleOnChange}
					name='password'
					placeholder='Password'
					type='password'
					value={password}
					required
				/>
				<button type='submit'> {loading ? loader : 'Sign In'} </button>
			</form>
		</div>
	);
};
