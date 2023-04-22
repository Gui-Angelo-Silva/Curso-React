import './index.css'
import ReactDOM from 'react-dom' //o nome para o import é algo que queira 
import React from 'react' //o import do react tem q ser chamado assim 

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

//const el = document.getElementById('root')

/*ReactDOM.render(
    <div>
        <strong>Olá React!</strong>
    </div>, 
    document.getElementById('root')
)*/

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo='Situação do Aluno' 
            aluno='Guilherme Silva' 
            nota ={9.3}/>
    </div>, 
    document.getElementById('root')
)