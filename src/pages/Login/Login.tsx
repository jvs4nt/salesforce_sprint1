import React, { useState } from 'react';
import { FormBox, MainBox, MainSection } from './Login.style';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic here
        console.log(`Username: ${username}, Password: ${password}`);
    };

    return (
        <>
        <MainSection>
            <MainBox>
                <h2>Login</h2>
                <FormBox onSubmit={handleLogin}>
                    <label>
                        Nome de usuário:
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Senha:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Fazer Login</button>
                </FormBox>
                <div>
                    <p>Não é um cliente?</p>
                    <button>Teste gratuitamente</button>
                </div>
            </MainBox>
        </MainSection>
        </>
    );
};

export default Login;