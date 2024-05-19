import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MainSection } from './Clients.style';
import Navbar from '../../components/Navbar/Navbar';

const Clients: React.FC = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('https://25ad82ed-2de0-4571-aadd-99894d48ca7c-00-3mmrabe63art8.spock.replit.dev/clientes')
            .then(response => {
                setClients(response.data);
            })
            .catch(error => {
                console.error("Houve um erro ao buscar os dados dos clientes:", error);
            });
            console.log (clients);
    }, []);

    return (
        <>
        <Navbar/>
        <MainSection>
            <h1>Clientes</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF/CNPJ</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client: any) => (
                        <tr key={client.ID_CLIE}>
                            <td>{client.ID_CLIE}</td>
                            <td>{client.NOME_CLIE}</td>
                            <td>{client.EMAIL_CLIE}</td>
                            <td>{client.CPF_CNPJ}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </MainSection>
        </>
    );
}

export default Clients;