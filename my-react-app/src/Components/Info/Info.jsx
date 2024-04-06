import React from 'react'
import './Info.css'

function Info() {
  return (
    <div>
        <div className="panels">
            <div className="panel left">
                <h1>Pomagamy!</h1>
                <p>Nasza firma oferuje kompleksową pomoc w załatwianiu wszystkich formalności związanych z zamówieniem, dzięki czemu Ty możesz skupić się na tym, co naprawdę ważne.</p>
            </div>
            <div className="panel right">
                <h1>Współpraca!</h1>
                <p>Skontaktuj się z nami, aby dowiedzieć się więcej o naszych możliwościach pracy podwykonawczej i rozpocząć owocną współpracę!</p>
            </div>
        </div>
    </div>
  )
}

export default Info