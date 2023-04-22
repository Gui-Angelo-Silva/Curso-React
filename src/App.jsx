import './App.css'
import React from 'react'

import Card from './components/layout/Card';
import NumAleatorio from './components/basicos/NumAleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default () => (
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className='Cards'>
            <Card
                titulo='#04 - Desafio Aleatório' color='#FA6900'>
                <NumAleatorio
                    min={1}
                />
            </Card>

            <Card
                titulo='#03 - Fragmento' color='#E94C6F'>
                <Fragmento />
            </Card>

            <Card
                titulo='#02 - Com Paramêtro' color='#E8B71A'>
                <ComParametro
                    titulo='Situação do Aluno'
                    aluno='Guilherme Silva'
                    nota={9.3}
                />
            </Card>

            <Card
                titulo='#01 - Primeiro Componente' color='#588C73'>
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);