import React from 'react';
import { DataList } from './interface';

interface Props {
	task: DataList;
	removeTask(id: number): void;
	updateTask(task: DataList): void;
}

const TodoListItem = ({ task, removeTask, updateTask }: Props) => {
	return (
		<div className="list_line">
			<span style={{ paddingLeft: '10px' }}>{task.task}</span>
			<div>
				<button className="todo_delete_button" onClick={() => updateTask(task)}>
					Edit
				</button>
				<button
					className="todo_delete_button"
					onClick={() => removeTask(task.id)}
				>
					X
				</button>
			</div>
		</div>
	);
};

export default TodoListItem;
