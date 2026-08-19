export default function ImagePopup(props){
    const {name, link} = props.card;
    return(
    <div className="popup__image" id="image-popup">
        <div className="popup__content popup__content_content_image">
          <img alt={name} className="popup__image" src={link} />
          <p className="popup__caption">{name}</p>
        </div>
    </div> 
    )
}