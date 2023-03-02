import { use } from 'react';
import './App.css';

function App() {

  const getCharacters = () => {
    
      const data = use(fetch('https://rickandmortyapi.com/api/character')
        .then(results => results.json())
        //.then(res => console.log(res))
        //.catch(err => console.log(err.message))
      );
      
      return data;
  };

  //console.log(getCharacters());
 

  
  return (
      <div>
        {getCharacters().results?.map(char => <li>{char.name}</li>)}
      </div>
    
  );
}

export default App;
