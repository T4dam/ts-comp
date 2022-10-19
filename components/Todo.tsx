import { useState, ChangeEvent } from 'react';
import { DataList } from './interface';
import TodoListItem from './TodoListItem';

const Data: DataList[] = [
	{
		id: 1,
		task: 'Learn React',
	},
	{
		id: 2,
		task: 'Learn Next.js',
	},
];

const TODO = () => {
	const [todo, setTodo] = useState<string>('');
	const [tasks, setTasks] = useState<DataList[]>([]);
	const [edit, setEdit] = useState<string>('');

	const addTask = (): void => {
		const newTask = {
			id: tasks.length + 1,
			task: todo,
		};
		if (todo !== '') {
			setTasks([...tasks, newTask]);
		}
		console.log(tasks);
		setTodo('');
	};
	const deleteTask = (id: number): void => {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	};

	const editTask = ({ task }: DataList): void => {
		setEdit(task);
	};

	return (
		<div>
			<div>
				<input
					className="todo"
					type="text"
					value={todo}
					onChange={(e: ChangeEvent<HTMLInputElement>): void =>
						setTodo(e.target.value)
					}
				/>
				<button className="todo_add_button" onClick={addTask}>
					ADD
				</button>
			</div>
			<div>
				{tasks.map((task: DataList, key: number) => {
					return (
						<TodoListItem
							key={task.id}
							task={task}
							removeTask={deleteTask}
							updateTask={editTask}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default TODO;
