import {useState, useContext} from 'react';
import CurrentUserContext from '../../../../../../context/CurrentUserContext.js';

export default function EditProfile(props){
    const {currentUser} = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [description, setDescription] = useState(currentUser.about);
    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onUpdateUser({name, about: description});
    }
    return (
        <form className="popup__form" id="edit-profile-form" name="profile-form" noValidate onSubmit={handleSubmit}>
            <label className="popup__field">
            <input
              className="popup__input popup__input_type_name"
              name="name"
              placeholder="Nome"
              type="text"
              required
              minLength="2"
              maxLength="40"
              value={name}
              onChange={handleChangeName}
            />
            <span id="input-name-error" className="popup__error-message"></span>
            </label>
            <label className="popup__field">
            <input
              className="popup__input popup__input_type_description"
              name="description"
              placeholder="Sobre mim"
              type="text"
              required
              minLength="2"
              maxLength="200"
              value={description}
              onChange={handleChangeDescription}
            />
            <span
              id="input-description-error"
              className="popup__error-message"
            ></span>
            </label>
            <button className="button popup__button" type="submit">
              Salvar
            </button>
          </form>
    )
}