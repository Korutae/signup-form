import { useState } from 'react';


export default function SignUpForm(){

        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState(null);

        async function handleSubmit(event) {
            event.preventDefault();
            console.log(username);
        }


        return <h2>
            Sign Up!
            <form method ="post" onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username"
                    value={username}
                    onChange={(e) => { 
                        setUsername(e.target.value)
                        console.log(username)
                    }}/>

                </label>
                <label>
                    Password: <input name="password" 
                    value={password} 
                    onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(password)
                    }}/>
                </label>
                <button>Submit</button>
            </form>
        </h2>;
    }





