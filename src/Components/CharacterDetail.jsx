import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import "../Styles/About-me.css";
import "../Styles/CharacterDetail.css";
import Menu from "../Components/Menu";
import Ninja from "../Images/Ninja2.webp";

const CharacterDetail = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState(null);

  const loadImageUrl = async (imageName) => {
    try {
      const storage = getStorage(); // Získání instance Firebase Storage
      const imageUrlRef = ref(storage, `images/${imageName}`); // Vytvoření reference na obrázek
      const imageUrl = await getDownloadURL(imageUrlRef); // Získání URL obrázku
      return imageUrl;
    } catch (error) {
      console.error("Chyba při načítání URL obrázku:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(); // Získání instance Firestore
        const charactersRef = doc(db, 'characters', id); // Vytvoření reference na dokument
        const docSnapshot = await getDoc(charactersRef); // Načtení dokumentu

        if (docSnapshot.exists()) {
          const character = docSnapshot.data();

          // Získání názvu obrázku z načtených dat o postavě
          const imageName = character.imageUrl;

          // Odstranění případné přebytečné cesty ve jménu obrázku
          const imageNameWithoutPath = imageName.replace('images/', '');

          // Načti URL obrázku a aktualizuj state
          const imageUrl = await loadImageUrl(imageNameWithoutPath);
          setCharacterData({ ...character, imageUrl });
        } else {
          console.log('Dokument nenalezen.');
        }
      } catch (error) {
        console.error('Chyba při načítání dat:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!characterData) {
    return <p>Načítání...</p>;
  }

  return (
    <>
    <Menu />
    <img src={Ninja} alt="logo" className="logo" loading="lazy" />
    <div className="character-detail-container">
      <h2 className="detail-heading">Detail postavy</h2>
      
      <div className="character-image-container">
        {characterData.imageUrl && (
          <img src={characterData.imageUrl} alt="Postava" className="character-image" />
        )}
      </div>

      <div className="character-info">
        <div className="character-content">
          <p><strong className="zmena">Jméno:</strong> {characterData.name}</p>
          <p><strong className="zmena">Příjmení:</strong> {characterData.surname}</p>
          <p><strong className="zmena">Datum narození:</strong> {characterData.birthday}</p>
          <p><strong className="zmena">Místo bydliště:</strong> {characterData.city}</p>
          <p><strong className="zmena">Pohlaví:</strong> {characterData.gender}</p>
          <p><strong className="zmena">Národnost:</strong> {characterData.nationality}</p>
        </div>
        
        <p className="character-lore">Lore:</p>
        <div className="character-description" dangerouslySetInnerHTML={{ __html: characterData.description }}></div>
      </div>
    </div>
    </>
  );
};

export default CharacterDetail;