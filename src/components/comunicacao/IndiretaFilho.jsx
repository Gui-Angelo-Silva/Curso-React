import React from 'react'

export default props => {
    const cb = props.quandoClicar
    
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('João', 53, true)}>
                Fornecer Infomações
            </button>
        </div>
    )
}