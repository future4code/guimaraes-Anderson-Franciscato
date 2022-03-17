import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div `
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`


const SecaoComentario = (props) => {
	const [comentario, setComentario] = useState('')

	const enviarComentario = () => {
		props.enviarComentario(comentario)
		setComentario('')
	}

	return (
		<CommentContainer>
			<InputComment
				type="text"
				placeholder="Adicione um comentário..."
				value={comentario}
				onChange={(e) => setComentario(e.target.value)}
			/>
			<button onClick={enviarComentario}>Comentar</button>
		</CommentContainer>
	)
}

export default SecaoComentario