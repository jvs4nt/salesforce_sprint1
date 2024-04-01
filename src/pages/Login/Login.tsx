import React, { useState } from 'react';
import { Button, ButtonLink, Checkbox, DivLink, FormBox, Img, Input, Linha, Link, MainBox, MainSection } from './Login.style';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic here
        console.log(`Username: ${username}, Password: ${password}`);
    };

    const navigate = useNavigate();

    function handleNavigate() {
        navigate('/home');
    }

    return (
        <>
        <MainSection>


            <MainBox>
                <Img src="https://login.salesforce.com/img/logo214.svg" alt="Logo da empresa" />

                <FormBox onSubmit={handleLogin}>

                <label>Nome de usuário</label>
                <Input type="text" value={username} onChange={e => setUsername(e.target.value)} />

                <label>Senha</label>
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                <Button type="submit" onClick={handleNavigate}>Fazer Login</Button>

                <div>
                <Checkbox type="checkbox" />
                <label htmlFor="">Lembrar-me</label>
                </div>

                <Linha/>

                <DivLink>
                    <Link>Esqueceu sua senha?</Link>
                    <Link>Usar domínio personalizado</Link>
                </DivLink>

                </FormBox>

                <div>
                <p>Não é um cliente? <ButtonLink>Teste gratuitamente</ButtonLink></p>
                </div>
            </MainBox>
                
            
        </MainSection>
        </>
    );
};

export default Login;