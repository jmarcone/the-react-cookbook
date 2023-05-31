import React, { useRef, useState } from "react";
import { Editor,EditorState, convertToRaw  } from 'draft-js';
import 'draft-js/dist/Draft.css';
// import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';

// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import manageContentful from "../manageContentful";
// import './App.css';

export default ({ categories }) => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
    const {createEntry} = manageContentful();
    const titleRef = useRef();

    const handlesubmit = (e) => {
        e.preventDefault();
        
        const rawContentState = convertToRaw(editorState.getCurrentContent());
        const markup = draftToMarkdown(rawContentState);

        const entry = {
            fields: {
                title: {
                    'en-US':  titleRef.current.value
                },
                content: {
                    'en-US': markup
                }
            }
        }

        createEntry(entry).then(data => console.log(data));
    };

    return (
        <>
            <form  onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label form="title" className="form-label">Title:</label>
                    <input className="form-control" type="text" name="title" ref={titleRef}
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
                        onChange={setEditorState}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>);
}