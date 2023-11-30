import { useState } from "react"
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState({
        username: '',
        message: '',
        isValid: false
    })
    const [password, setPassword] = useState({
        password: '',
        message: '',
        isValid: false
    })
    const [confirmPassword, setConfirmPassword] = useState({
        confirmPassword: '',
        message: '',
        isMatched: false
    })

    const handleValidatePassword = (value) => {
        if (value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,14}$/))
            setPassword({
                password: value,
                message: 'Password Valid',
                isValid: true
            })
        else
            setPassword({
                password: value,
                message: 'Password Inalid',
                isValid: false
            })
    }

    const handleUsername = (value) => {
        if (value.length > 3)
            setUsername({
                username: value,
                message: 'Username Valid',
                isValid: true
            })
        else
            setUsername({
                username: value,
                message: 'Username Inalid',
                isValid: false
            })
    }

    const handleConfirmPassword = (value) => {
        if (value == password.password)
            setConfirmPassword({
                confirmPassword: value,
                message: 'Password Matched',
                isMatched: true
            })
        else
            setConfirmPassword({
                confirmPassword: value,
                message: 'Password not Matched',
                isMatched: false
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username.isValid && password.isValid && confirmPassword.isMatched) {
            alert('Your Details Successfully Submitted...!')
            navigate('/home')
        } else {
            setUsername({
                username: '',
                message: 'Username Inalid',
                isValid: false
            })
            setPassword({
                password: '',
                message: 'Password Inalid',
                isValid: false
            })
            setConfirmPassword({
                confirmPassword: '',
                message: 'Password not Matched',
                isMatched: false
            })
        }
    }

    return (
        <div className="container signup d-flex justify-content-center align-items-center">
            <div className="template-image">
                <img src="./signup.svg" alt="image" />
            </div>
            <form className="rounded ps-3 pe-3 pb-3">
                <div className="title m-3 mt-4 mb-4 text-center">
                    <h4>Signup</h4>
                </div>
                <div className="username m-3">
                    <label htmlFor="username" className="mb-1">Username</label>
                    <input className={`form-control  ${username.isValid ? 'success-msg' : ''}`} type="text" id="username" onInput={(e) => handleUsername(e.target.value)} />
                    <small><span className={username.isValid ? 'span-scs-msg' : 'span-err-msg'} >{username.message}</span></small>
                </div>
                <div className="password m-3">
                    <label htmlFor="password" className="mb-1">Password</label>
                    <input className={`form-control  ${password.isValid ? 'success-msg' : ''}`} type="password" id="password" onInput={(e) => handleValidatePassword(e.target.value)} />
                    <small><span className={password.isValid ? 'span-scs-msg' : 'span-err-msg'}>{password.message}</span></small>
                </div>
                <div className="confirm-password m-3">
                    <label htmlFor="confirm-password" className="mb-1">Confirm Password</label>
                    <input className={`form-control  ${confirmPassword.isMatched ? 'success-msg' : ''}`} type="password" id="confirm-passeord" onInput={(e) => handleConfirmPassword(e.target.value)} />
                    <small><span className={confirmPassword.isMatched ? 'span-scs-msg' : 'span-err-msg'} >{confirmPassword.message}</span></small>
                </div>
                <div className="submit-btn m-3 mt-5">
                    <button className="btn btn-primary" onClick={handleSubmit}>Signup</button>
                </div>
            </form>
        </div>
    )
}

export { SignUp }