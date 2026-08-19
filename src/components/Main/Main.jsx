import avatar from '../../../images/avatar.jpg';
import profileEditIcon from '../../../images/profile-edit-icon.svg';
import {useState} from "react";
import Popup from './components/Popup/Popup';
import NewCard from './components/Popup/components/NewCard/NewCard';
import EditProfile from './components/Popup/components/EditProfile/EditProfile';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar';
import Card from "./components/Card/Card";

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];


export default function Main(){
  const [popup, setPopup] = useState(null);
  const newCardPopup = {title: "Novo Cartão", children: <NewCard />}
  const editProfilePopup = {title: "Editar Perfil", children: <EditProfile />}
  const editAvatarPopup = {title: "Editar Avatar", children: <EditAvatar />}

  function handleOpenPopup(popup){
    setPopup(popup);
  }
  function handlePopupClose(){
    setPopup(null);
  }
    return(
    <main className="content">
        <section className="profile page__section">
          <div className="profile__image-container">
            <img className="profile__image" src={avatar} alt="Avatar" />
            <img className="profile__image-edit" src={profileEditIcon} 
             alt="Editar avatar" 
             onClick={()=> handleOpenPopup(editAvatarPopup)} />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={()=> handleOpenPopup(editProfilePopup)}
            ></button>
            <p className="profile__description">Explorador</p>
          </div>
          <button
            aria-label="Adicionar cartão"
            className="profile__add-button"
            type="button"
            onClick={()=> handleOpenPopup(newCardPopup)}
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
            {cards.map((card) => (
              <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
            ))}
          </ul>
        </section>
        {popup && (<Popup onClose={handlePopupClose}title={popup.title}>
          {popup.children}
          </Popup>
      )}
      </main>
      )
}