import React, { useState } from "react";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import './App.css';

export default ({ categories }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handlesubmit = () => {

    };

    return (
        <>
            <form  onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label form="title" className="form-label">Title:</label>
                    <input className="form-control" type="text" name="title"
                        id="title" placeholder="Enter your Title" />
                </div>
                <div className="mb-3">
                    <label form="category" className="form-label" name="category" id="category">Category:</label>
                    <select aria-label="Category:" >
                        <option value="">All</option>
                        {
                            categories && categories.map(category => <option value={category.id}>{category.name}</option>)
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={setEditorState}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>);
}