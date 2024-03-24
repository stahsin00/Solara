import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import { characterList } from '../utils/character';

function ShopMain() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect( () => {
    fetchCharacterList();
  }, []);

  async function fetchCharacterList() {
    setLoading(true);

    try {
      const result = await characterList();
      setCharacters(result.characters)
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="shop-main">
        <CharacterList shop={true} isLoading={loading} characters={characters}/>
    </div>
  );
}

export default ShopMain;