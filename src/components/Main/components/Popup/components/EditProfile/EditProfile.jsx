import {useState, useContext, useRef} from 'react';
import CurrentUserContext from '../../../../../../contexts/CurrentUserContext.js';

export default function EditProfile(props){
    const {currentUser} = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [description, setDescription] = useState(currentUser.about);
    const nameRef = useRef();
    const descriptionRef = useRef();
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [validity, setValidity] = useState(false);
    const handleChangeName = (e) => {
        setName(e.target.value);
        if(!nameRef.current.validity.valid){
            setNameError(nameRef.current.validationMessage);
        } else{
          setNameError('');
        }
        setValidity(nameRef.current.validity.valid && descriptionRef.current.validity.valid);
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
        if(!descriptionRef.current.validity.valid){
           setDescriptionError(descriptionRef.current.validationMessage);
        } else{
          setDescriptionError('');
        }
        setValidity(nameRef.current.validity.valid && descriptionRef.current.validity.valid);
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
              ref={nameRef}
            />
            <span id="input-name-error" className="popup__error-message">{nameError}</span>
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
              ref={descriptionRef}
            />
            <span
              id="input-description-error"
              className="popup__error-message"
            >{descriptionError}</span>
            </label>
            <button className="button popup__button" type="submit" disabled={!validity}>
              Salvar
            </button>
          </form>
    )
}