import Task from './Task';

const Tasks = ({ tasks, onDelete, onLikeIncrement, onLaughIncrement }) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onDelete={onDelete}
                    onLikeIncrement={onLikeIncrement}
                    onLaughIncrement={onLaughIncrement}
                />
            ))}
        </>
    );
};

export default Tasks;
