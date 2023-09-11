import { useState } from 'react';

const Form = ( ) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
}

export default function SignUpForm() {

    return <h2>
        Sign Up!
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input value={Form.username} onChange={(e) => Form.setUsername(e.target.value)}/>
            </label>
            <label>
                Password: <input value={Form.password} onChange={(e) => Form.setPassword(e.target.value)}/>
            </label>
            <button>Submit</button>
        </form>
    </h2>;
}

async function handleSubmit(event) {
    event.preventDefault();
    console.log("hi there");
}