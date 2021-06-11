import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from '../TaskItem';
import { filterTableWorks } from '../../slices/filterTableSlice';

TaskList.propTypes = {

};

function TaskList(props) {
    const [keyword, setKeyword] = useState('');
    const [sortValue, setSortValue] = useState(-1);

    const typingTimeoutRef = useRef();
    const dispatch = useDispatch();

    let tasks = [...useSelector(state => state.tasks)];

    const search = useSelector(state => state.search);
    const sort = useSelector(state => state.sort);
    const filterTable = useSelector(state => state.filterTable);

    const handleSortTasks = (event) => {
        const value = Number.parseInt(event.target.value);
        setSortValue(value);
        const action = filterTableWorks({ name: keyword, value: value });
        dispatch(action);
    }

    const handleSearchTasks = (event) => {
        const nameValue = event.target.value;
        setKeyword(nameValue);

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const filterTable = {
                name: nameValue,
                value: sortValue
            };
            const action = filterTableWorks(filterTable);
            dispatch(action);
        }, 300);
    }

    if (search !== '') {
        tasks = tasks.filter(task => {
            return task.name.toUpperCase().indexOf(search.toUpperCase()) !== -1;
        })
    }

    if (sort.by !== '') {
        if (sort.by === 'name') {
            tasks.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return sort.value;
                else if (a.name.toLowerCase() < b.name.toLowerCase()) return -sort.value;
                else return 0;
            })
        } else if (sort.by === 'status') {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            })
        }
    }

    if (filterTable.name !== '' || filterTable.value !== -1) {
        if (filterTable.name !== '') {
            tasks = tasks.filter(task => {
                return task.name.toUpperCase().indexOf(filterTable.name.toUpperCase()) !== -1;
            })
        }

        if (filterTable.value !== -1) {
            tasks = tasks.filter(task => task.status === !!filterTable.value);
        }
    }


    return (
        <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" className="form-control" onChange={handleSearchTasks} value={keyword} />
                            </td>
                            <td>
                                <select className="form-control" onChange={handleSortTasks} value={`${sortValue}`}>
                                    <option value="-1">Tất Cả</option>
                                    <option value="0">Ẩn</option>
                                    <option value="1">Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {
                            tasks.map((task, index) => {
                                return <TaskItem task={task} index={index} key={index} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TaskList;