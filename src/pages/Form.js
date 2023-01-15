import '../App.css';
import QuestionsData from './ques.json';
import React, { useState } from 'react';
import axios from 'axios';

export default function Form() {
    const len = QuestionsData.length - 1;

    const [idx, setIdx] = useState(0)
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault()
        const url = 'http://localhost:3000/uploadFile';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });

    }

    function next() {
        if (idx < len) {
            setIdx(idx + 1)
        }
        else {
            return (
                window.location.href = '/Submitted'
            )
        }
    }

    function prev() {
        if (idx !== 0) {
            setIdx(idx - 1)
        }
    }

    //main
    if (QuestionsData && QuestionsData[idx].question_text === "radio-button question") {
        return (
            <div >
                <h4>Question: {idx + 1}</h4>
                <h2>{QuestionsData && QuestionsData[idx].question_text}</h2>
                <div>
                    {QuestionsData && QuestionsData[idx].choices.map(data => {
                        return (
                            <div>
                                <label class="control control--radio">{data.choice_text}
                                    <input type="radio" name="radio" />
                                    <div class="control__indicator"></div>
                                </label>
                            </div>
                        )
                    })}


                </div>

                <div>
                    <a className='button anch' onClick={next}>Next</a>
                    <a className='button anch' onClick={prev}>Back</a>
                </div>
            </div>
        )
    }

    else if (QuestionsData && QuestionsData[idx].question_text === "drop-down question") {
        return (
            <div >
                <h4>Question: {idx + 1}</h4>
                <h2>{QuestionsData && QuestionsData[idx].question_text}</h2>
                <div class="select ">
                    <select name="cars" id="cars">
                        {QuestionsData && QuestionsData[idx].choices.map(data => {
                            return (
                                <option value={data.choice_text}>{data.choice_text}</option>
                            )
                        })}
                    </select>
                    <div class="select__arrow"></div>
                </div>
                <div>
                    <a className='button anch' onClick={next}>Next</a>
                    <a className='button anch' onClick={prev}>Back</a>
                </div>
            </div>
        )
    }

    else if (QuestionsData && QuestionsData[idx].question_text === "checkbox question") {
        return (
            <div>
                <h4>Question: {idx + 1}</h4>
                <h2>{QuestionsData && QuestionsData[idx].question_text}</h2>

                <div>
                    {QuestionsData && QuestionsData[idx].choices.map(data => {
                        return (
                            <div>
                                <label class="control control--checkbox">{data.choice_text}
                                    <input type="checkbox" name="gender" />
                                    <div class="control__indicator"></div>
                                </label>

                            </div>
                        )
                    })}
                </div>
                <div>
                    <a className='button anch' onClick={next}>Next</a>
                    <a className='button anch' onClick={prev}>Back</a>
                </div>
            </div>
        )
    }

    else if (QuestionsData && QuestionsData[idx].question_text === "input question") {
        return (
            <div>
                <h4>Question: {idx + 1}</h4>
                <h2>{QuestionsData && QuestionsData[idx].question_text}</h2>

                <div class="form__group field">
                    <form action="/action_page.php">
                        <input class="form__field" type="text" id="input" name="input"
                            placeholder="Input" required />
                        <label for="name" class="form__label">Input</label>
                    </form>
                </div>
                <div>
                    <a className='button anch' onClick={next}>Next</a>
                    <a className='button anch' onClick={prev}>Back</a>
                </div>
            </div>
        )
    }

    else if (QuestionsData && QuestionsData[idx].question_text === "file question") {
        return (<>
            <div>
                <h4>Question: {idx + 1}</h4>
                <h2>{QuestionsData && QuestionsData[idx].question_text}</h2>

                <form id="file-upload-form" class="uploader" onSubmit={handleSubmit}>
                    <input id="file-upload" type="file" name="fileUpload" onChange={handleChange} />

                    <label for="file-upload" id="file-drag">
                        <img id="file-image" src="#" alt="Preview" class="hidden" />
                        <div id="start">
                            <i class="fa fa-download" aria-hidden="true"></i>
                            <div>Select a file or drag here</div>
                            <div id="notimage" class="hidden">Please select</div>
                            <span id="file-upload-btn" class="btn btn-primary">Select a file</span>
                        </div>
                        <div id="response" class="hidden">
                            <div id="messages"></div>
                            <progress class="progress" id="file-progress" value="0">
                                <span>0</span>%
                            </progress>
                        </div>
                    </label>
                </form>
            </div>

            <div>
                <a className='button anch' onClick={next}>Next</a>
                <a className='button anch' onClick={prev}>Back</a>
            </div>
        </>
        )
    }
}
