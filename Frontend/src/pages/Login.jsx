import * as React from "react";
import { Alert } from '@mui/material';
import { Link } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from "react-router-dom";
import headerLogo from '../content/images/logo.png'
import { useDispatch,useSelector } from 'react-redux';
import { SaveLoginDetails } from "../Redux/EcommerceReducer";

function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [AlertMessage, setAlertMessage] = React.useState("")
    const [AlertMessageBg, setAlertMessageBg] = React.useState("")
    const gettingUserDetails = useSelector(state => state.UserDetail)
    const [gettingLoginEmail, setGettingLoginEmail] = React.useState("");
    const [gettingLoginPassword, setGettingLoginPassword] = React.useState("");
    
    {
        React.useEffect(() => {
            if (gettingUserDetails.length !== 0) {
                navigate("/")
            }
        })
    }

    const handleClick = () => {
        setOpen(true);
    };

    const handleClickSuccess = () => {
        setOpen(true);
        setTimeout(() => (navigate('/')), 2000);
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    async function submitLoginForm(e) {
        e.preventDefault()
        let email = gettingLoginEmail
        let password = gettingLoginPassword
        let data = { email, password }
        let result = await fetch(`http://127.0.0.1:5000/auth/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        let output = ""
        output = await result.json()
        if (output.email === gettingLoginEmail) {
            setAlertMessageBg("success")
            setAlertMessage("Login successfully!!!")
            setGettingLoginEmail("")
            setGettingLoginPassword("")
            dispatch(SaveLoginDetails(output.userId, output.email, output.address, output.name))
            handleClickSuccess()
        } else {
            setAlertMessageBg("danger")
            setAlertMessage(output.message)
            handleClick()
        }
    }

    return (
        <>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} className={`text-white bg-${AlertMessageBg}`}>
                    {AlertMessage}
                </Alert>
            </Snackbar>
            <div className="login-screen">
                <div>
                    <div className="text-center">
                        <img src={headerLogo} alt="#ImgNotFound" width="100px" height="70px" />
                    </div>
                    <div>
                        <h2 className="fw-semibold mb-5 text-center mt-2">
                            <u>Log In</u>
                        </h2>
                        <form onSubmit={(e) => submitLoginForm(e)}>
                            <label for="email_address" className="form-label">Email address</label>
                            <input type="email" className="form-control mb-3" id="email_address" autoFocus style={{ width: "100%", fontSize: "18px" }} value={gettingLoginEmail} onChange={(e) => setGettingLoginEmail(e.target.value)} required autoComplete='off' />
                            <label for="new_password" className="form-label">Password</label>
                            <input type="password" className="form-control mb-3" id="new_password" style={{ width: "100%", fontSize: "18px" }} value={gettingLoginPassword} onChange={(e) => setGettingLoginPassword(e.target.value)} required autoComplete='off' />
                            <button type="submit" class="btn btn-primary w-100 mt-3">Continue</button>
                        </form>
                        <div className="text-center mt-3">
                            <Link to="/signup" className="ms-auto">Signup</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;