import React from 'react';
/* import './App.css'; */
import styled from 'styled-components'
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardGrande/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './images/eu.png';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;
const PageContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`;
const TituloGeral = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
/*  function Facebug() {
        href="https://www.facebook.com/anderson.franciscato"
    }
 */
function App() {
  return (
    <AppContainer>
      <PageContainer>
        <TituloGeral>Dados pessoais</TituloGeral>
        <CardGrande 
          imagem={perfil}
          nome="Anderson" 
          descricao="Oi, eu sou o Anderson. Sou aluno da Labenu. E estudante de Engenharia de software, não tenho muita paciencia pra front-end."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageContainer>

      <PageContainer>
        <CardPequeno
        imagem="https://img.olhardigital.com.br/uploads/acervo_imagens/2018/10/20181018233712.jpg"
        nome="Email"
        descricao="andersonwsf@gmail.com"
        />
         <CardPequeno
        imagem="https://i.pinimg.com/originals/88/bc/00/88bc005a6b728cafbf76668607205b25.jpg"
        nome="Endereço"
        descricao="Rua dos bobos, 0"
        />
        <TituloGeral>Experiências pessoais</TituloGeral>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante de desenvolvimento full stack" 
        />
        
        <CardGrande 
          imagem="https://ciaathletica.com.br/blog/wp-content/uploads/2020/05/Escola-de-nata%C3%A7%C3%A3o-conhe%C3%A7a-a-metodologia-dos-campe%C3%B5es-2.png" 
          nome="Natação" 
          descricao="Dois anos aprendendo natação e ainda não sei nado peito direito" 
        />
      </PageContainer>
      <PageContainer>
        <TituloGeral>Licenças e certificados</TituloGeral>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQE0iRUqSJueUw/company-logo_200_200/0/1519902704390?e=2159024400&v=beta&t=JtwpvhGvDM8aXPltRxUc7sAJgihKoCvdqw2HQapm1pg"
          nome="EF SET English Certificate 57/100 (B2 Proficient)"
          descricao="Certificado de proeficiência em inglês no nível B2"
        />
      </PageContainer>
      <PageContainer>
        <TituloGeral>Minhas redes sociais</TituloGeral>
        <ImagemButton
          href="https://www.facebook.com/anderson.franciscato"
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />
       
        <ImagemButton 
          href="https://twitter.com/t3lo5_awsf"
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
        <ImagemButton 
          href="https://www.linkedin.com/in/andersonwsf/"
          imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          texto="LinkedIn" 
        />     
      </PageContainer>
    </AppContainer>
  );
}

export default App;
