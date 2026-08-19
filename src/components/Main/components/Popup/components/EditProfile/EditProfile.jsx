export default function EditProfile(){
    return (
        <form className="popup__form" id="edit-profile-form" name="profile-form" noValidate>
            <label className="popup__field">
            <input
              className="popup__input popup__input_type_name"
              name="name"
              placeholder="Nome"
              type="text"
              required
              minLength="2"
              maxLength="40"
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
            />
            <span
              id="input-description-error"
              className="popup__error-message"
            ></span>
            </label>
            <button className="button popup__button" type="submit" disabled>
              Salvar
            </button>
          </form>
    )
}