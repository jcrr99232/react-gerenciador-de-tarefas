import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';



function ConcluirTarefa(props) {

    const [exibirModal, setExibirModal] = useState(false);
    
    function handleAbrirModal(event) {
        event.preventDefault();
    }

    return (
        <span className={props.className}>
            <Button className="btn-sm" onclick={handleAbrirModal}
            data-testid="btn-abrir-modal">
            <FontAwesomeIcon icon={faClipboardCheck} />
            </Button>

        </span>
    );
}

ConcluirTarefa.PropTypes = {
    tarefa: PropTypes.object.isRequired,
    recarregarTarefas: PropTypes.func.isRequired,
    classNames: PropTypes.string.isRequired
}

export default ConcluirTarefa;