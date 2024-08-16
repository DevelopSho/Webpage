import { useState, useEffect } from "react";
import Menu from "../Components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ninja from "../Images/Ninja2.webp";
import '../Styles/Character.css'; // Nový CSS soubor pro specifické styly
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { projectFirestore } from '../Firebase/database';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Characters = () => {
    const [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const charactersRef = collection(projectFirestore, "characters");

                // Získání dat z Firestore jednorázově
                const snapshot = await getDocs(charactersRef);
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setCharacterData(data);

                // Přihlášení k odběru změn v reálném čase
                const unsubscribe = onSnapshot(charactersRef, (querySnapshot) => {
                    const updatedData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    setCharacterData(updatedData);
                });

                return unsubscribe; // Zajistí, že se odhlásíme z odběru při unmountu komponenty
            } catch (error) {
                console.error("Chyba při načítání dat z Firebase:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Menu />
            <img src={Ninja} alt="logo" className="logo" loading="lazy" />
            <div className="characters-page">
             
               
                <Container>
                    <Row className="justify-content-center">
                        {characterData.length > 0 ? (
                            characterData.map((character) => (
                                <Col key={character.id} xs={12} sm={6} md={4} lg={4} className="mb-3 d-flex justify-content-center">
                                    <Card className="character-card">
                                        {character.image && <Card.Img variant="top" src={character.image} alt={character.name + " " + character.surname} />}
                                        <Card.Body>
                                            <Card.Title>{character.name + " " + character.surname}</Card.Title>
                                            <Button variant="primary" className="button-characters">Detail postavy</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <p className="change-color-font">Žádné postavy k zobrazení!</p>
                        )}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Characters;
