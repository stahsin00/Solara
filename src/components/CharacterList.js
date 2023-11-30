import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterInfo from './CharacterInfo';

function CharacterList(props) {
    const { characters, isLoading } = props;
    const [selectedCharacter, setSelectedCharacter] = useState();

    if (isLoading) {
        return <div>loading</div>
      }

      console.log(characters);
  
    if (!characters || characters.length === 0) {
        return (<p>No characters.</p>)
    }

    const characterList = characters.map((character) => (
        <CharacterCard 
            key={character._id} 
            _id={character._id} 
            name={character.name} 
            description={character.description} 
            atk={character.atk} 
            def={character.def}
            hp={character.hp}
            spe={character.spe}
            art={character.art}
            face={character.face}
            price={character.price}
            setSelectedCharacter={setSelectedCharacter}
        />
    ));

    return (
        <div className="character-list">
            {(selectedCharacter) ? <CharacterInfo selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/> : characterList}
        </div>
    );
}

export default CharacterList;