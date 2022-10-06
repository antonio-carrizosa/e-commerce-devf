import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import defaultImg from '../../assets/img/default.png';
import AxiosClient from '../../core/api/axiosClient';
import { useForm } from '../../core/hooks/useForm';
import { ProductContext } from '../context/ProductContextProvider';
import categories from './Constants';
import { Select } from './Select';

export const CreateProduct = () => {
	const initialValues = {
		product_name: '',
		description: '',
		price: '',
		category: '',
		brand: '',
		image: '',
	};

	const { addProduct } = useContext(ProductContext);

	const { formValues, handleOnChange, reset } = useForm({ initialValues });

	const [loading, setLoading] = useState(false);

	const { product_name, description, price, category, brand, image } =
		formValues;

	console.log(formValues);

	const handleSubmit = async e => {
		e.preventDefault();
		if (loading) return;
		setLoading(true);

		const axiosClient = new AxiosClient();

		try {
			const product = await axiosClient.post({
				path: '/item',
				data: { ...formValues, sku: new Date().getTime() },
			});

			addProduct(product);
			setLoading(false);
			reset();

			await Swal.fire({
				title: 'Done!',
				text: 'Product Created!',
				icon: 'success',
				confirmButtonText: 'OK',
				confirmButtonColor: '#256d85',
			});
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
				<h2>Add Product</h2>

				<img src={image || defaultImg} alt='' />

				<input
					onChange={handleOnChange}
					name='image'
					placeholder='Image Url'
					type='text'
					value={image}
					required
				/>

				<input
					onChange={handleOnChange}
					name='product_name'
					placeholder='Product Name'
					type='text'
					value={product_name}
					required
				/>
				<textarea
					onChange={handleOnChange}
					name='description'
					placeholder='Description'
					type='text'
					rows={3}
					value={description}
					required
				/>
				<input
					onChange={handleOnChange}
					name='price'
					placeholder='Price'
					type='number'
					value={price}
					required
				/>
				<Select
					categories={categories}
					name='category'
					handleOnChange={handleOnChange}
					value={category}
				/>
				{/* <input
					onChange={handleOnChange}
					name='category'
					placeholder='Category'
					type='text'
					value={category}
					required
				/> */}
				<input
					onChange={handleOnChange}
					name='brand'
					placeholder='Brand'
					type='text'
					value={brand}
					required
				/>

				<button type='submit'> {loading ? loader : 'Add'} </button>
			</form>
		</div>
	);
};
