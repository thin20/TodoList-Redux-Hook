import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

TaskForm.propTypes = {

};

function TaskForm(props) {
    const [taskEdit, setTaskEdit] = useState({ id: null, name: '', status: true });

    // useEffect(() => {
    //     const task = useSelector(state => state.itemEdit);
    //     setTaskEdit(task);
    // }, taskEdit)

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
        console.log(taskEdit);
    }

    return (
        <div>
            <div className="card">
                <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{!taskEdit.id ? 'Thêm Công việc' : 'Xửa Công Việc'}</span>
                    <i className="fas fa-times-circle btn-toggle-form" style={{ cursor: 'pointer' }}></i>
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
                        <button type="submit" className="btn btn-primary btn-save" onClick={(e) => onSubmitForm(e)}><i className="fas fa-plus"></i> <span> Lưu lại</span></button>&nbsp;
                        {/* <button type="submit" className="btn btn-danger btn-cancel"><i className="fas fa-times"></i> <span> Hủy bỏ</span></button> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TaskForm;