import SecondaryButton from '@/Components/SecondaryButton';
import Todo from '@/models/Todo';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import EditTodoModal from './EditTodoModal';

type TodoCardProps = {
	todo: Todo;
};

const TodoCard = ({ todo }: TodoCardProps) => {
	const [showEdit, setShowEdit] = useState(false);

	const toggleCompleted = () => {
		router.patch(
			route('todos.update', todo.id),
			{
				completed: !todo.completed,
			},
			{
				onSuccess: () => router.reload({ only: ['todos'] }),
				preserveScroll: true,
			}
		);
	};

	const handleDelete = () => {
		router.delete(route('todos.destroy', todo.id), {
			onSuccess: () => router.reload({ only: ['todos'] }),
			preserveScroll: true,
		});
	};

	return (
		<article className="p-4 border border-slate-200 rounded-md">
			<h3 className={`font-semibold ${todo.completed ? 'line-through' : ''}`}>
				{todo.title}
			</h3>
			<p className={todo.completed ? 'line-through' : ''}>{todo.content}</p>

			<div className="mt-4 flex justify-between gap-4">
				<SecondaryButton className="self-start" onClick={toggleCompleted}>
					<i className="fa fa-check"></i>
				</SecondaryButton>
				<div className="flex gap-4">
					<SecondaryButton onClick={() => setShowEdit(true)}>
						<i className="fa fa-pencil"></i>
					</SecondaryButton>
					<SecondaryButton onClick={handleDelete}>
						<i className="fa fa-trash"></i>
					</SecondaryButton>
				</div>
			</div>

			<EditTodoModal
				open={showEdit}
				onClose={() => setShowEdit(false)}
				todo={todo}
			/>
		</article>
	);
};

export default TodoCard;
