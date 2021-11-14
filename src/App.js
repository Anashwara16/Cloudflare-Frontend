import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddPost from './components/AddPost';
import Help from './components/Help';

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        };

        getTasks();
    }, []);

    // Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();

        return data;
    };

    const getJson = async (res) => {
        const data = await res.json();
        return data;
    };

    // Add Task
    const addTask = async (task) => {
        setShowAddTask(!showAddTask);
        if (task.username === '') {
            task.username = 'Anonymous Mouse';
            console.log(task.username);
        }
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        });

        const data = await res.json();

        setTasks([...tasks, data]);
    };

    // Fetch Task
    const fetchTask = async (id) => {
        let data = null;
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        if (res instanceof Error) {
            console.log(fetchTask);
        } else {
            data = await res.json();
        }
        return data;
    };

    // Increment the likes of a Post
    const incrementPostLike = async (id) => {
        const postToIncrement = await fetchTask(id);
        if (!postToIncrement) {
            return;
        }
        let likes = postToIncrement.likes;
        const updPost = { ...postToIncrement, likes: likes + 1 };

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updPost),
        });
        let data = null;
        if (res instanceof Error) {
            console.log(res);
        } else {
            data = await res.json();
        }

        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, likes: data.likes } : task
            )
        );
    };

    // Increment the likes of a Post
    const incrementPostLaugh = async (id) => {
        const postToIncrement = await fetchTask(id);
        if (!postToIncrement) {
            return;
        }
        let laughs = postToIncrement.likes;
        const updPost = { ...postToIncrement, laughs: laughs + 1 };

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updPost),
        });
        let data = null;
        if (res instanceof Error) {
            console.log(res);
        } else {
            data = await res.json();
        }

        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, laughs: data.laughs } : task
            )
        );
    };

    // Delete Task
    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        });
        //We should control the response status to decide if we will change the state or not.
        res.status === 200
            ? setTasks(tasks.filter((task) => task.id !== id))
            : alert('Error Deleting This Task');
    };

    return (
        <Router>
            <div className="container">
                <Header
                    onAdd={() => setShowAddTask(!showAddTask)}
                    showAdd={showAddTask}
                />
                <Route
                    path="/"
                    exact
                    render={(props) => (
                        <>
                            {showAddTask && <AddPost onAdd={addTask} />}
                            {tasks.length > 0 ? (
                                <Tasks
                                    tasks={tasks}
                                    onDelete={deleteTask}
                                    onLikeIncrement={incrementPostLike}
                                    onLaughIncrement={incrementPostLaugh}
                                />
                            ) : (
                                'No Posts To Show'
                            )}
                        </>
                    )}
                />
                <Route path="/help" component={Help} />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
