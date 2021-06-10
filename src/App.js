import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Control from './components/Control';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { openForm } from './slices/isDisplayFormSlice';
import { taskEdit } from './slices/itemEditSlice';

function App() {
    const isOpenForm = useSelector(state => state.isDisplayForm);
    const dispatch = useDispatch();

    const handleOpenFormAdd = () => {
        let action;
        action = openForm();
        dispatch(action);
        action = taskEdit({ id: null, name: '', status: true });
        dispatch(action);
    }

    return (
        <div className="App">
            <div className="container">
                <div className="app-title">
                    <h1>Quản Lý Công Việc</h1>
                </div>
                <div className="row">
                    <div className={isOpenForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                        {isOpenForm ? <TaskForm /> : ''}
                    </div>
                    <div className={isOpenForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : ""}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleOpenFormAdd}
                            style={{ marginBottom: 15 }}
                        >
                            <i className="fas fa-plus mr-4"></i>
                            <span> Thêm Công Việc</span>
                        </button>
                        <Control />
                        <TaskList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
