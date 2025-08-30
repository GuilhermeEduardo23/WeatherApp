import "./ModalError.scss";
import { useState } from "react";

const ModalError = ({ city }) => {
  const [closeModal, setCloseModal] = useState(false);

  return (
    <div id="errorModal" className={`${!closeModal ? "modalOverlay" : "hidden"}`}>
      <div className="modalContent">
        <div className="modalHeader">
          <div className="errorIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="modalTitle">Cidade não encontrada</h2>
          <button className="closeButton"
          onClick={() => setCloseModal(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="modalBody">
          <p className="errorMessage">
            Não foi possível encontrar informações meteorológicas para
            <span className="searchedCity"> {city}</span>. Verifique se o nome
            está correto e tente novamente.
          </p>

          <div className="suggestions">
            <h4 className="suggestionsTitle">💡 Dicas:</h4>
            <ul className="suggestionsList">
              <li>Verifique a ortografia da cidade</li>
              <li>Evite usar acentos ou caracteres especiais</li>
            </ul>
          </div>

          <div className="modalFooter">
            <button className="tryAgainButton" onClick={() => setCloseModal(true)}>Tentar novamente</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalError;
