import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterInfo from './CharacterInfo';
import UserCharacterInfo from './UserCharacterInfo';

function CharacterList(props) {
    const { shop, characters, isLoading } = props;
    const [selectedCharacter, setSelectedCharacter] = useState();

    if (isLoading) {
        return <div>loading</div>
      }
  
    if (!characters || characters.length === 0) {
        return (<p>No characters.</p>)
    }

    const characterList = characters.map((character) => (
        <CharacterCard 
            shop={shop}
            key={character._id} 
            character={character}
            setSelectedCharacter={setSelectedCharacter}
        />
    ));

    return (
        <div className="character-list">
            {(selectedCharacter) ? (shop ? <CharacterInfo selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/> : <UserCharacterInfo selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/>) : characterList}
        </div>
    );
}

export default CharacterList;