import React, {useState} from 'react';

import './feedback.styles.scss';

import {apiCall} from '../../utils/request/request.utils.js';

const FeedbackForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [failed, setFailed] = useState(false);

  function handleChange(e) {
    setState((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(state.name === '' || state.email === '' || state.password === ''){
      setFailed(true)
      console.log('failed')
    }else {
      apiCall('POST', '/feedback', state)
        .then((response)=>{
          console.log(response);
          setFailed(false)
          setState({
            name:'',
            email: '',
            message: ''
          })
        })
    }
  }

  return <>
    <div className="feedback-form">
      <h2>Feedback</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="group">
          <input
            name="name"
            type="name"
            id="name"
            className="form-input"
            onChange={(e)=> handleChange(e)}
            value={state.name}
            label="Name"
            autoComplete="off"
          />
          <label
            className={`${
              state.name.length ? 'shrink' : ''
            } form-input-label`}
          >
            Name
          </label>
        </div>
        <div className="group">
          <input
            name="email"
            type="email"
            id="email"
            className="form-input"
            onChange={(e)=> handleChange(e)}
            value={state.email}
            label="Email"
            autoComplete="off"
          />
          <label
            className={`${
              state.email.length ? 'shrink' : ''
            } form-input-label`}
          >
            Email
          </label>
        </div>
        <textarea
          name="message"
          type="message"
          id="message"
          className="form-input"
          onChange={(e)=> handleChange(e)}
          value={state.message}
          label="Message"
          resize="off"
          placeholder="Message"
        ></textarea>
        {failed ? <div className="error-message">*Please fill all the fields!</div> : ''}
        <input type="submit" id="submit" value="send" />
      </form>
    </div>
  </>
}

export default FeedbackForm;
