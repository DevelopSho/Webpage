import  { useState, useEffect } from 'react';
import { projectFirestore } from '../Firebase/database';
import { format, isValid } from 'date-fns';
import Menu from "../Components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Main.css";
import Ninja from "../Images/Ninja.webp"

const Newsletter = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection("newsletter")
      .orderBy("dateTitle", "desc")
      .onSnapshot(
        (snapshot) => {
          if (snapshot.empty) {
            setError(`Žádná novinka není k zobrazení`);
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
      <Menu />
    <img src={Ninja} alt="logo" className="logo" />
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
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Další
          </button>
        </div>
      </div>

                        <footer>
                                <p className="text-5">© 2024 Copyright:  JustOnlySho</p>
                        </footer>
    </>
  );
};

export default Newsletter;