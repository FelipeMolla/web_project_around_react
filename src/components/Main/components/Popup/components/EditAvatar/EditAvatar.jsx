export default function EditAvatar(){
    return (
        <form className="popup__form" id="update-avatar-form" name="avatar-form" noValidate>
        <label className="popup__field">
        <input
              className="popup__input popup__input_type_url"
              name="link"
              placeholder="Link de Imagem"
              required
              type="url"
            />
            <span id="input-link-error" className="popup__error-message"></span>
            </label>
         <button className="button popup__button" type="submit" disabled>
          Salvar
         </button>
         </form>
    )
}