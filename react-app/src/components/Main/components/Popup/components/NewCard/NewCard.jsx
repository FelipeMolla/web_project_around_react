export default function NewCard(){
    return (
          <form className="popup__form" id="new-card-form" name="card-form" noValidate>
            <label className="popup__field">
            <input
              className="popup__input popup__input_type_card-name"
              name="card-name"
              placeholder="Título"
              required
              type="text"
              minLength="2"
              maxLength="30"
            />
            <span
              id="input-place-name-error"
              className="popup__error-message"
            ></span>
            </label>
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
              Criar
            </button>
          </form>
    )
}