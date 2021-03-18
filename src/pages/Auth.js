import './Auth.css';

export default function() {

    let submitHandler = (e) => {
        e.preventDefault();
        console.log(e);

        let data = {};

        data.email = e.target[0].value;
        data.pass = e.target[1].value;

        let url = 'https://auth404.herokuapp.com/api/auth/register';
        let options = {
            method:'POST', 
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(data)
        }

        if (e.nativeEvent.submitter.id == "register"){
            //alert('register')
            //console.log(data)
            fetch(url, options).then(result=>result.json().then(output=>console.log(output)));
        } else {
            alert('else')
            //fetch('https://auth404.herokuapp.com/api/auth/login');
        }
    }

    return (
        <div className = "wrapper">
            <form onSubmit = {submitHandler}>
                <input name = "email" type = "email" />
                <input  name = "pass" type = "password" />
                <section>
                    <input id = "register" type = "submit" value = "Register"/>
                    <input id = "login" type = "submit" value = "Login"/>
                </section>
            </form>
        </div>
    )
}
