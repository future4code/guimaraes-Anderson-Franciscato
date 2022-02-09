import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


function Final() {
    return (
        <MainContainer>
            <h1>O FORMULÁRIO ACABOU</h1>
            <p>Obrigado pela sua participação! Entraremos em contato em breve ^_^ </p>
        </MainContainer>
    );
}
export default Final;