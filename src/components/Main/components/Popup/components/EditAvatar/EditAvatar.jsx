import {useRef} from 'react';


export default function EditAvatar(props){
    const ref = useRef(null);
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onUpdateAvatar({avatar: ref.current.value});

    }
    return (
        <form className="popup__form" id="update-avatar-form" name="avatar-form" noValidate onSubmit={handleSubmit}>
        <label className="popup__field">
        <input
              className="popup__input popup__input_type_url"
              name="link"
              placeholder="Link de Imagem"
              required
              type="url"
              ref={ref}
            />
            <span id="input-link-error" className="popup__error-message"></span>
            </label>
         <button className="button popup__button" type="submit">
          Salvar
         </button>
         </form>
    )
}