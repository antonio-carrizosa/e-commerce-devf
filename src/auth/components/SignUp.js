import { useState } from 'react';
import AxiosClient from '../../core/api/axiosClient';
import Swal from 'sweetalert2';
import { useForm } from '../../core/hooks/useForm';
import { Radio } from './form/Radio';
import { useNavigate } from 'react-router-dom';

const genders = ['M', 'F'];

export const SignUp = () => {
	const initialValues = {
		first_name: '',
		last_name: '',
		birth_date: '',
		gender: genders[0],
		email: '',
		password: '',
	};

	const navigate = useNavigate();

	const { handleOnChange, formValues } = useForm({ initialValues });
	const { first_name, last_name, birth_date, gender, email, password } =
		formValues;

	const [loading, setLoading] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		if (loading) return;
		setLoading(true);

		const axiosClient = new AxiosClient();
		try {
			await axiosClient.post({
				path: '/signup',
				data: formValues,
			});

			setLoading(false);

			await Swal.fire({
				title: 'Done!',
				text: 'User registered',
				icon: 'success',
				confirmButtonText: 'OK',
			});

			navigate('/signIn', { replace: true });
		} catch (error) {
			setLoading(false);
			Swal.fire({
				title: 'Error!',
				text: JSON.stringify(error),
				icon: 'error',
				confirmButtonText: 'OK',
			});
		}
	};

	const loader = <div className='loader'> </div>;

	return (
		<div className='form-wrapper'>
			<form onSubmit={handleSubmit}>
				<h2>SignUp</h2>
				<input
					required
					type='text'
					name='first_name'
					value={first_name}
					onChange={handleOnChange}
					placeholder='First Name'
				/>
				<input
					required
					type='text'
					name='last_name'
					value={last_name}
					onChange={handleOnChange}
					placeholder='Last Name'
				/>
				<input
					required
					type='email'
					name='email'
					value={email}
					onChange={handleOnChange}
					placeholder='E-mail'
				/>
				<input
					required
					type='password'
					name='password'
					value={password}
					onChange={handleOnChange}
					placeholder='Password'
				/>
				<div className='date-input'>
					<p>Birthday</p>
					<input
						required
						name='birth_date'
						value={birth_date}
						onChange={handleOnChange}
						type='date'
					/>
				</div>

				{/* could be a component */}
				<div className='radio-group'>
					<div className='radio-group'>
						<h4>Gender</h4>
						<div className='items'>
							{genders.map((g, idx) => (
								<Radio
									key={idx}
									label={g}
									value={g}
									groupValue='gender'
									handleOnChange={handleOnChange}
									current={gender}
								/>
							))}
						</div>
					</div>
				</div>

				<button type='submit'> {loading ? loader : 'Sign Up'} </button>
			</form>
		</div>
	);
};
