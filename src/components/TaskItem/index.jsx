import React from 'react';
import PropTypes from 'prop-types';

TaskItem.propTypes = {
    task: PropTypes.object,
    index: PropTypes.number
};

TaskItem.defaultProps = {
    task: {
        id: null,
        name: '',
        status: true
    },
    index: 0
}

function TaskItem(props) {
    const { task, index } = props;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td className="text-center">
                <span className={task.status ? "badge bg-success" : 'badge bg-danger'} style={{ cursor: 'pointer', transform: 'translateY(6px)' }}>
                    {task.status ? 'Kích hoạt' : 'Ẩn'}
                </span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning">
                    <i className="fas fa-tools"></i>&nbsp;
                        <span>Sửa</span>
                </button>&nbsp;
                    <button type="button" className="btn btn-danger">
                    <i className="fas fa-trash"></i>&nbsp;
                        <span>Xóa</span>
                </button>
            </td>
        </tr>
    );
}

export default TaskItem;