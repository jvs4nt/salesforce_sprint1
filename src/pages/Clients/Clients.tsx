import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MainSection, TableBox } from './Clients.style';
import Navbar from '../../components/Navbar/Navbar';
import DataTable from 'react-data-table-component';

const Clients: React.FC = () => {
    const [clients, setClients] = useState([]);

    //colunas da tabela
    const columns = [
        {
            name: 'ID',
            selector: (row: any) => row.ID_CLIE,
            sortable: true,
        },
        {
            name: 'Nome',
            selector: (row: any) => row.NOME_CLIE,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row: any) => row.EMAIL_CLIE,
            sortable: true,
        },
        {
            name: 'CPF/CNPJ',
            selector: (row: any) => row.CPF_CNPJ,
            sortable: true,
        }
    ];

    //estilização do datatable
    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            }
        },
        headCells: {
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                paddingLeft: '16px',
                paddingRight: '16px',
                backgroundColor: '#032D60',
                color: 'white',
            },
        },
        cells: {
            style: {
                fontSize: '16px',
                paddingLeft: '16px',
                paddingRight: '16px',
            },
        },
    };

    //para funcionamento da tabela, é necessário que a API esteja rodando, para testes utilizei
    //o replit como foi orientado, porém a API não está mais disponível. O código da API em python está no github :D
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
            <TableBox>
                <DataTable
                columns={columns}
                data={clients}
                pagination
                fixedHeader
                customStyles={customStyles}
                />
            </TableBox>
        </MainSection>
        </>
    );
}

export default Clients;