import {useRef, useState} from 'react';

export default function NewCard(props){
    const nameRef = useRef()
    const linkRef = useRef()
    const [nameError, setNameError] = useState('')
    const [linkError, setLinkError] = useState('')
    const [validity, setValidity] = useState(false)
    function handleChangeName(){
        if(!nameRef.current.validity.valid){
            setNameError(nameRef.current.validationMessage);
        } else {
            setNameError('');
        }
        setValidity(nameRef.current.validity.valid && linkRef.current.validity.valid);
    }
    function handleChangeLink(e){
        if(!linkRef.current.validity.valid){
            setLinkError(linkRef.current.validationMessage);
        } else {
          setLinkError('');
        }
        setValidity(nameRef.current.validity.valid && linkRef.current.validity.valid);
    }
    function handleSubmit(e){
        e.preventDefault();
        props.onNewCardSubmit({name: nameRef.current.value, link: linkRef.current.value})
    }

    return (
          <form className="popup__form" id="new-card-form" name="card-form" noValidate onSubmit={handleSubmit}>
            <label className="popup__field">
            <input
              className="popup__input popup__input_type_card-name"
              name="card-name"
              placeholder="Título"
              required
              type="text"
              minLength="2"
              maxLength="30"
              ref={nameRef}
              onChange={handleChangeName}
            />
            <span
              id="input-place-name-error"
              className="popup__error-message"
            >{nameError}</span>
            </label>
            <label className="popup__field">
            <input
              className="popup__input popup__input_type_url"
              name="link"
              placeholder="Link de Imagem"
              required
              type="url"
              ref={linkRef}
              onChange={handleChangeLink}
            />
            <span id="input-link-error" className="popup__error-message">{linkError}</span>
            </label>
            <button className="button popup__button" type="submit" disabled={!validity}>
              Criar
            </button>
          </form>
    )
}