import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

const CreateTodoForm = () => {
	const { data, setData, post, processing, errors } = useForm({
		title: '',
		content: '',
	});

	const createTodo = (event: FormEvent) => {
		event.preventDefault();

		post(route('todos.store'));
	};

	return (
		<div className="w-full p-4 border border-slate-200 rounded-lg">
			<form onSubmit={createTodo}>
				<legend className="mb-4 text-xl">Crear tarea</legend>

				<div className="w-full grid grid-cols-1 gap-4">
					<div>
						<InputLabel htmlFor="title" value="Título" />
						<TextInput
							id="title"
							className="w-full"
							value={data.title}
							onChange={e => setData('title', e.target.value)}
							required
						/>

						<InputError className="mt-2" message={errors.title} />
					</div>

					<div>
						<InputLabel htmlFor="content" value="Descripción" />
						<TextInput
							id="content"
							className="w-full"
							value={data.content}
							onChange={e => setData('content', e.target.value)}
							required
						/>

						<InputError className="mt-2" message={errors.content} />
					</div>
				</div>

				<div className="mt-4 flex justify-end">
					<PrimaryButton type="submit" disabled={processing}>
						Agregar
					</PrimaryButton>
				</div>
			</form>
		</div>
	);
};

export default CreateTodoForm;
