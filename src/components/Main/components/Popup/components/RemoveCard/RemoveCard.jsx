export default function RemoveCard(props){
       const cardId = props.cardId;
       function handleDelete(e){
              e.preventDefault();
              props.onDeleteCard(cardId);
       }

       return(
        <div id="confirm-popup">
        <div className="popup__content">
        <h3 className="popup__title">Tem certeza?</h3>
         <button className="button popup__button" type="button" onClick={handleDelete}>
          Sim
         </button>
         </div>
      </div>
       )
}