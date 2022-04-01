import React, {useState} from 'react'
import axios from 'axios';
import GetMatches from './components/getMatchs';
import RenderPage from './components/renderPage';
import { ButtonPage } from './components/renderStyle';

const App = () => {
  const [exibition, setExibition] = useState('renderPage');

  const changeExebition = () => {
    switch (exibition) {
      case 'renderPage':
        return <RenderPage onChangeGetMatches = {onChangeGetMatches}/>
      case 'getMatches':
        return <GetMatches onChangeRenderPage = {onChangeRenderPage}/>
      default:
        <p>Acho que me perdi no caminho</p>
    }
  }

  const onChangeGetMatches = () => {
    setExibition('getMatches');
  }
  const onChangeRenderPage = () => {
    setExibition('renderPage');
  }


  const deletMatch = () => {
    axios
      .put (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anderson-franciscato/clear`)
      .then(res => {
        setExibition('renderPage');
      })
      .catch(err => {
        console.log(err);
      }
      )
  }
  return (
    <div>
      {changeExebition()}
      <br/>
      <ButtonPage onClick={deletMatch}>Deletar Matchs</ButtonPage>
    </div>
  )
}
export default App;

