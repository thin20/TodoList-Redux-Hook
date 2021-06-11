import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeForm } from '../../slices/isDisplayFormSlice';
import { addTask, updateTask } from '../../slices/tasksSlice';
var uniqid = require('uniqid');

function createId() {
    return uniqid();
}

TaskForm.propTypes = {

};

function TaskForm(props) {
    const [taskEdit, setTaskEdit] = useState({ id: null, name: '', status: true });
    const dispatch = useDispatch();
    const task = useSelector(state => state.itemEdit);

    useEffect(() => {
        console.log(task);
        setTaskEdit(task);
    }, [task]);

    const handleCloseForm = () => {
        const action = closeForm();
        dispatch(action);
    }

    const onChangeName = (event) => {
        const name = event.target.value;
        setTaskEdit({ ...taskEdit, name: name });
    }

    const onChangeStatus = (event) => {
        const status = event.target.value === '1' ? true : false;
        setTaskEdit({ ...taskEdit, status: status });
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        let action;

        if (!taskEdit.id) {
            const id = createId();
            action = addTask({ ...taskEdit, id: id });
        } else {
            action = updateTask(taskEdit);
        }
        dispatch(action);
        setTaskEdit({ id: null, name: '', status: true });
        action = closeForm();
        dispatch(action);
    }

    return (
        <div>
            <div className="card">
                <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{!taskEdit.id ? 'Thêm Công việc' : 'Xửa Công Việc'}</span>
                    <i className="fas fa-times-circle btn-toggle-form" style={{ cursor: 'pointer' }} onClick={handleCloseForm}></i>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Tên: </label>
                            <input onInput={(event) => onChangeName(event)} type="text" className="form-control" id="name" value={`${taskEdit.name}`}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Trạng thái: </label>
                            <select onChange={(event) => onChangeStatus(event)} value={taskEdit.status ? '1' : '2'} className="form-control" id="status">
                                <option value="1">Kích hoạt</option>
                                <option value="2">Ẩn</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className={!taskEdit.id ? "btn btn-primary btn-save" : "btn btn-success btn-save"}
                            onClick={(e) => onSubmitForm(e)}
                        >
                            <i className={!taskEdit.id ? "fas fa-plus" : "fas fa-save"}></i> <span>{!taskEdit.id ? "Thêm mới" : "Lưu lại"}</span>
                        </button>&nbsp;
                        {/* <button type="submit" className="btn btn-danger btn-cancel"><i className="fas fa-times"></i> <span> Hủy bỏ</span></button> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TaskForm;