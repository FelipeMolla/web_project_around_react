import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";


export default function Card(props){
    const {name, link, isLiked} = props.card;
    const {card, handleOpenPopup}= props;
    const imageComponent = {children:<ImagePopup card={card} />};
        return(
        <li className="card" >
                <img className="card__image" src={link} alt="" onClick={() => {
                    handleOpenPopup(imageComponent);
                }}/>
                <button
                  aria-label="Excluir cartão"
                  className="card__delete-button"
                  type="button"
                ></button>
                <div className="card__description">
                  <h2 className="card__title">{name}</h2>
                  <button
                    aria-label="Botão de curtir"
                    className="card__like-button"
                    type="button"
                  ></button>
                </div>
              </li>

    )
}