import { useState, useEffect } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import CurrentUserContext from '../contexts/CurrentUserContext.js'
import api from '../utils/api.js'

function App() {
 const [popup, setPopup] = useState(null);
 const [currentUser, setCurrentUser] = useState({name: '', about: '', avatar:null});
 const [cards, setCards] = useState([]);
 const [cardId, setCardId] = useState(null);
 
   useEffect(()=>{
     api.getInitialCards().then((initialCards) => {
       setCards(initialCards);
     }).catch((err) => {
       console.log(err);
     });
   }, []);
   async function handleCardLike(card) {
     const isLiked = card.isLiked;
     
     await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
         setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
     }).catch((error) => console.error(error));
   }

  function handleNewCardSubmit(data){
    (async () =>{
      await api.newCard({cardName: data.name, cardLink: data.link}).then((newCard) =>{
        setCards([newCard, ...cards]);
        handlePopupClose();
      }).catch((err) =>{
        console.log(err);
      })
    })();
  }
  
 useEffect(()=>{
   (async () => {
    await api.getUserInfo().then((res)=> {
     setCurrentUser(res)
   }).catch((err) => {
      console.log(err);
    });
    })();
  },[])
const handleUpdateUser = (data) => {
  (async () => {
    await api.updateUserInfo(data).then((newData) =>{
      setCurrentUser(newData);
      handlePopupClose();
    }).catch((err) => {
      console.log(err);
    });
  })();
};
const handleUpdateAvatar = (data) =>{
  (async () =>{
    await api.updateAvatar(data).then((newData) =>{
      setCurrentUser(newData);
      handlePopupClose();
    }).catch((err) => {
      console.log(err);
    });
  })();
}
const handleDeleteCard = (cardId) =>{
  (async () =>{
     await api.deleteCard(cardId).then(() =>{
      setCards((state) => state.filter((card) => card._id !== cardId));
      handlePopupClose();
     })
  })();
}

function handleOpenPopup(popup){
    setPopup(popup);
}
function handlePopupClose(){
    setPopup(null);
}
  return (
    <>
    <CurrentUserContext.Provider value= {{ currentUser: currentUser }}>
     <div className="page__content">
      <Header />
      <Main 
       onUpdateAvatar={handleUpdateAvatar} 
       onUpdateUser={handleUpdateUser} 
       popup={popup} 
       onOpenPopup={handleOpenPopup} 
       onClosePopup={handlePopupClose}
       cards={cards}
       onCardLike={handleCardLike}
       onNewCardSubmit={handleNewCardSubmit}
       cardId={cardId}
       onDeleteCard={handleDeleteCard}
      />
      <Footer />
     </div>
     </CurrentUserContext.Provider>
    </>
  )
}

export default App
