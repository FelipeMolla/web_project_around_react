import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";
import RemoveCard from "../Popup/components/RemoveCard/RemoveCard";
import {useContext} from 'react';
import CurrentUserContext from '../../../../context/CurrentUserContext.js';

export default function Card(props){
    const {name, link, isLiked} = props.card;
    const {card, handleOpenPopup, onCardLike, onDeleteCard} = props;
    const imageComponent = {children:<ImagePopup card={card} />};
    const removeCardComponent = {children:<RemoveCard cardId={card._id} onDeleteCard={onDeleteCard}/>}
    const cardLikeButtonClassName = `card__like-button ${
           isLiked ? 'card__like-button_is-active' : ''
          }`;
    const handleLikeClick = () =>{onCardLike(card);}
    const {currentUser} = useContext(CurrentUserContext);
        return(
        <li className="card" >
                <img className="card__image" src={link} alt="" onClick={() => {
                    handleOpenPopup(imageComponent);
                }}/>
                <button
                  aria-label="Excluir cartão"
                  className="card__delete-button"
                  type="button"
                  onClick={() => handleOpenPopup(removeCardComponent)}
                ></button>
                <div className="card__description">
                  <h2 className="card__title">{name}</h2>
                  <button
                    aria-label="Botão de curtir"
                    className={cardLikeButtonClassName}
                    type="button"
                    onClick={handleLikeClick}
                  ></button>
                </div>
              </li>

    )
}