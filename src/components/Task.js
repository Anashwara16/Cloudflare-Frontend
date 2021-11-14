import { FaThumbsUp, FaAt, FaTrash, FaLaugh } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const Task = ({ task, onDelete, onLikeIncrement, onLaughIncrement }) => {
    return (
        <div>
            <div className="post-header">
                <span style={{ color: 'blue' }}>
                    <FaAt></FaAt>&nbsp;&nbsp;{task.username}{' '}
                </span>
                <h3>{task.title} </h3>
                <div className="emoji-container">
                    <div className="like-container">
                        <p style={{ color: 'grey' }}>
                            {task.likes}&nbsp;&nbsp;
                        </p>
                        <FaThumbsUp
                            style={{ color: 'green', cursor: 'pointer' }}
                            onClick={() => onLikeIncrement(task.id)}
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}></div>
                    <div className="laugh-container">
                        <p style={{ color: 'grey' }}>
                            {task.laughs}&nbsp;&nbsp;
                        </p>
                        <FaLaugh
                            style={{ color: 'green', cursor: 'pointer' }}
                            onClick={() => onLaughIncrement(task.id)}
                        />
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="post-body">
                <p className="post-body-item">{task.content}</p>
                <div style={{ marginBottom: '10px' }}></div>
                <img
                    className="post-body-item-image"
                    src={task.selectedImage}
                    alt=""
                />
                <div>
                    {task.youtubeUrl !== '' && (
                        <div className="post-body-item">
                            <ReactPlayer url={task.youtubeUrl} />
                        </div>
                    )}
                </div>
            </div>
            <div className="divider"></div>
            <div className="post-footer">
                <FaTrash
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </div>
        </div>
    );
};

export default Task;
