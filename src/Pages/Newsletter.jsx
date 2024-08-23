import { useState, useEffect } from 'react';
import { projectFirestore } from '../Firebase/database';
import { format, isValid } from 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Newsletter.css";
import Ninja from "../Images/Ninja2.webp";
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import Menu from "../Components/Menu"
import '../Styles/Logo.css';

const Newsletter = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const q = query(collection(projectFirestore, "newsletter"), orderBy("dateTitle", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (snapshot.empty) {
          setError("Žádná novinka není k zobrazení");
          setData([]);
        } else {
          const result = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setData(result);
          setError("");
        }
      },
      (err) => {
        setError(err.message);
      }
    );

    return () => unsubscribe();
  }, []);

  const formatDate = (date) => {
    if (isValid(new Date(date))) {
      return format(new Date(date), 'dd-MM-yyyy');
    } else {
      return '';
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
    <div className="new-body">
      <Menu />
      <img src={Ninja} alt="logo" className="logo" loading="lazy" />
      <div className="conteiner">
        {error && <p>{error}</p>}
        {selectedItems.map((oneLetter) => (
          <div key={oneLetter.id} className="container">
            <p className="text"><strong>Datum:</strong><br/>{formatDate(oneLetter.dateTitle)}</p>
            <p className="text"><strong>Popis novinky:</strong><br/>{oneLetter.title}</p>
            <p className="text"><strong>Název novinky:</strong><br/>{oneLetter.text}</p>
          </div>
        ))}
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Předchozí
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Další
          </button>
        </div>
      </div>
      <footer>
        <p className="footer-style">©Copyright 2024 by JustOnlySho</p>
      </footer>
      </div>
    </>
  );
};

export default Newsletter;
