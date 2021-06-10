import React, { useState } from 'react';
import { searchTasks } from '../../slices/searchSlice';
import { useDispatch } from 'react-redux';

Search.propTypes = {

};

function Search() {
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();

    const onInput = (event) => {
        const value = event.target.value;
        setKeyword(value);
    }

    const onSearch = () => {
        const action = searchTasks(keyword);
        dispatch(action);
        setKeyword('');
    }

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nhập từ khóa..." aria-label="Nhập từ khóa..." onInput={onInput} value={keyword}></input>
                <button className="btn btn-primary" type="button" id="search" onClick={onSearch}>
                    <i className="fas fa-search"></i>&nbsp;
                <span>Tìm</span>
                </button>
            </div>
        </div>
    );
}

export default Search;