import React, {useRef, useState} from "react";

export default ({setTitle, setCategory}) => {
    const titleRef = useRef();
    const categoryRef = useRef();

    const handlesubmit = (e) => {
        e.preventDefault();
        setTitle(titleRef.current.value);
        setCategory(categoryRef.current.value);
    }

    return (
        <>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label form="title" className="form-label">Title:</label>
                    <input className="form-control" ref={titleRef} type="text" name="title"
                           id="title" placeholder="Enter your Title"/>
                </div>
                <div className="mb-3">
                    <label form="category" className="form-label">Category:</label>
                    <input className="form-control" type="text" ref={categoryRef}
                           name="category" id="category"
                           placeholder="Enter your Category"/>
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </>
    );
}