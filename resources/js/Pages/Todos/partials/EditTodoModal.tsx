import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import Todo from '@/models/Todo';
import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

type EditTodoModalProps = {
	open: boolean;
	onClose: () => void;
	todo: Todo;
};

const EditTodoModal = ({ open, onClose, todo }: EditTodoModalProps) => {
	const { data, setData, patch, errors, processing } = useForm({
		title: todo.title,
		content: todo.content,
	});

	const handleUpdate = (event: FormEvent) => {
		event.preventDefault();

		patch(route('todos.update', todo.id), {
			onSuccess: () => onClose(),
		});
	};

	return (
		<Modal show={open} onClose={onClose}>
			<form className="p-6">
				<legend className="mb-4 text-lg">Editar tarea</legend>

				<div className="grid gap-4">
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

				<div className="mt-4 flex justify-end gap-4">
					<SecondaryButton type="button" onClick={onClose}>
						Cancelar
					</SecondaryButton>
					<PrimaryButton type="submit" onClick={handleUpdate}>
						Guardar
					</PrimaryButton>
				</div>
			</form>
		</Modal>
	);
};

export default EditTodoModal;
