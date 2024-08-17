import Todo from '@/models/Todo';
import CreateTodoForm from './partials/CreateTodoForm';
import TodoCard from './partials/TodoCard';

type IndexProps = {
	todos: Todo[];
};

const Index = ({ todos }: IndexProps) => {
	return (
		<div>
			<header className="p-4 bg-indigo-500 flex justify-center">
				<h1 className="font-semibold text-2xl text-white">Lista de tareas</h1>
			</header>

			<main className="p-8">
				<div className="max-w-2xl mx-auto flex flex-col gap-8">
					<CreateTodoForm />

					<section>
						<h2 className="mb-4 text-xl">Tareas pendientes</h2>

						<div className="flex flex-col gap-2">
							{todos.map(todo => (
								<TodoCard key={todo.id} todo={todo} />
							))}
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};

export default Index;
