import './Auth.css';

export default function() {

    let submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className = "wrapper">
            <form onSubmit = {submitHandler}>
                <input type = "email" />
                <input type = "password" />
                <input type = "submit" value = "Register"/>
                <input type = "submit" value = "Login"/>
            </form>
        </div>
    )
}
