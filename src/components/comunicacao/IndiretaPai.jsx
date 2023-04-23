import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let nome = '?'
    let idade = 0
    let nerd = false
    //nome idade nerd

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam

        console.log(nomeParam, idadeParam, nerdParam)
    }

    return (
        <div>
            <div>
                <span>{ nome } </span>
                <span>{ idade } </span>
                <span>{ nerd ? 'Verdadeiro' : 'Falso'} </span>
            </div>
            <IndiretaFilho quandoClicar={ fornecerInformacoes }></IndiretaFilho>
        </div>
    )
}