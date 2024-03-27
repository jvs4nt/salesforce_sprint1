import React, { useState } from 'react';
import { Button, FormBox, Img, Input, Link, MainSection } from './Login.style';

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
            
                <FormBox onSubmit={handleLogin}>

                    <Img src="https://login.salesforce.com/img/logo214.svg" alt="Logo da empresa" />

                    <label>Nome de usuário:</label>
                    <Input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    
                    <label>Senha:</label>
                    <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    
                    <Button type="submit">Fazer Login</Button>

                    <div>
                        <p>Não é um cliente? <Link>Teste gratuitamente</Link></p>
                    </div>

                </FormBox>
            
        </MainSection>
        </>
    );
};

export default Login;