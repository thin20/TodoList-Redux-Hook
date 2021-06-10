import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortTasks } from '../../slices/sortSlice';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

Sort.propTypes = {

};

function Sort() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dispatch = useDispatch();

    const onToggle = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const onSort = (by, value) => {
        const action = sortTasks({ by, value });
        dispatch(action);
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={() => onToggle()}>
            <DropdownToggle caret>
                Sắp xếp
                    </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => onSort('name', 1)}>
                    <span>Tên A-Z</span>&nbsp;
                        <i className="fas fa-sort-alpha-down"></i>
                </DropdownItem>
                <DropdownItem onClick={() => onSort('name', -1)}>
                    <span>Tên Z-A</span>&nbsp;
                        <i className="fas fa-sort-alpha-down-alt"></i>
                </DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem onClick={() => onSort('status', 1)}>
                    <span>Trạng Thái Kích Hoạt</span>
                </DropdownItem>
                <DropdownItem onClick={() => onSort('status', -1)}>
                    <span>Trạng thái ẩn</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default Sort;