import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpg", "image/jpeg"];
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(" ");
        } else {
            setFile(null);
            setError(
                "Please select an image file with jpg/jpeg/png extension."
            );
        }
    };
    return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div className = "addBtn">
            <span>+</span>
            </div>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="file">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
};

export default UploadForm;
