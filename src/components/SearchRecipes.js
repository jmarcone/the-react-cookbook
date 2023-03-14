import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default ({ setTitle, setCategory, categories }) => {
    let [searchParams, setSearchParams] = useSearchParams();
    
    

    const titleRef = useRef();
    const categoryRef = useRef();

    const handlesubmit = (e) => {
        e.preventDefault();
        setTitle(titleRef.current.value);
        setCategory(categoryRef.current.value);
        
        setSearchParams({
            title: titleRef.current.value,
            category: categoryRef.current.value,
        });
    }
    
    

    return (
        <>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label form="title" className="form-label">Title:</label>
                    <input className="form-control" ref={titleRef} type="text" name="title" defaultValue={searchParams.get("title")}
                        id="title" placeholder="Enter your Title" />
                </div>
                <div className="mb-3">
                <label form="category" className="form-label" name="category" id="category">Category:</label>
                    <select aria-label="Category:" ref={categoryRef}>
                        <option value="">All</option>
                        {
                            categories && categories.map(category => <option key={category.id} value={category.id}>{category.name}</option> )

                        }
                    </select>

                    {/* <label form="category" className="form-label">Category:</label>
                    <input className="form-control" type="text" ref={categoryRef}
                        name="category" id="category" defaultValue={searchParams.get("category")}
                        placeholder="Enter your Category" /> */}
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </>
    );
}