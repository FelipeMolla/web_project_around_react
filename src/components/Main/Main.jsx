import profileEditIcon from '../../../images/profile-edit-icon.svg';
import { useContext} from "react";
import Popup from './components/Popup/Popup';
import NewCard from './components/Popup/components/NewCard/NewCard';
import EditProfile from './components/Popup/components/EditProfile/EditProfile';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar';
import Card from "./components/Card/Card";
import RemoveCard from "./components/Popup/components/RemoveCard/RemoveCard"
import CurrentUserContext from '../../contexts/CurrentUserContext.js';


export default function Main(props){
  
  const {currentUser} = useContext(CurrentUserContext);
  const newCardPopup = {title: "Novo Cartão", children: <NewCard onNewCardSubmit={props.onNewCardSubmit}/>}
  const editProfilePopup = {title: "Editar Perfil", children: <EditProfile onUpdateUser={props.onUpdateUser} />}
  const editAvatarPopup = {title: "Editar Avatar", children: <EditAvatar onUpdateAvatar={props.onUpdateAvatar} />}
  const removeCardPopup = {title: "Tem Certeza?", children: <RemoveCard cardId={props.cardId} onDeleteCard={props.onDeleteCard}/>}
  
    return(
    <main className="content">
        <section className="profile page__section">
          <div className="profile__image-container">
            <img className="profile__image" src={currentUser.avatar} alt="Avatar" />
            <img className="profile__image-edit" src={profileEditIcon} 
             alt="Editar avatar" 
             onClick={()=> props.onOpenPopup(editAvatarPopup)} />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={()=> props.onOpenPopup(editProfilePopup)}
            ></button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <button
            aria-label="Adicionar cartão"
            className="profile__add-button"
            type="button"
            onClick={()=> props.onOpenPopup(newCardPopup)}
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
            {props.cards.map((card) => (
              <Card key={card._id} card={card} handleOpenPopup={props.onOpenPopup} onCardLike={props.onCardLike} onDeleteCard={props.onDeleteCard} />
            ))}
          </ul>
        </section>
        {props.popup && (<Popup onClose={props.onClosePopup}title={props.popup.title}>
          {props.popup.children}
          </Popup>
      )}
      </main>
      )
}