
  
  class Api {
    constructor(options){
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    _handleApiResponse(res){
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    }
    getInitialCards(){
        return fetch(`${this._baseUrl}/cards/`, 
            {
            headers: this._headers,
        })
        .then(this._handleApiResponse)
    }
    getUserInfo(){
        return fetch(`${this._baseUrl}/users/me`,
                {
                    headers: this._headers
                }
        ).then(this._handleApiResponse)
        }
    updateUserInfo(newData){
        return fetch(`${this._baseUrl}/users/me`,
                {
                    method: 'PATCH',
                    headers: this._headers,
                    body: JSON.stringify({
                        name: `${newData.name}`,
                        about: `${newData.about}`,
                    })
                }
            ).then(this._handleApiResponse)
    }
    updateAvatar(newAvatar){
        return fetch(`${this._baseUrl}/users/me/avatar`,
            {
                method: 'PATCH',
                headers: this._headers ,
                    body: JSON.stringify({
                        avatar: `${newAvatar.avatar}`
                    })
            }
        ).then(this._handleApiResponse)
    }
    newCard({cardName, cardLink}){
        return fetch(`${this._baseUrl}/cards`,
                {
                    method:'POST',
                    headers:this._headers,
                    body: JSON.stringify({
                        name: cardName,
                        link: cardLink,
                    })
                }).then(this._handleApiResponse)
    }

    deleteCard(cardId){
        return fetch(`${this._baseUrl}/cards/${cardId}`,
                {
                    method:'DELETE',
                    headers:this._headers 
                }).then(this._handleApiResponse)
    }
    putLike(cardId){
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`,
                {
                    method:'PUT',
                    headers:this._headers,
                    body: JSON.stringify({
                        isLiked: true
                    })
                }).then(this._handleApiResponse)
    }
    removeLike(cardId){
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`,
                {
                    method:'DELETE',
                    headers:this._headers
                }).then(this._handleApiResponse)
    }
    changeLikeCardStatus(cardId, isLiked){
        return isLiked ? this.putLike(cardId) : this.removeLike(cardId);
    }
    loadInitialData(){
    return Promise.all([this.getUserInfo(), this.getInitialCards()]).then((res)=>{
        return res;
     })
    }
    
    }
    const api = new Api({
    baseUrl:'https://around-api.pt-br.tripleten-services.com/v1',
    headers: {
        authorization: "e61c6696-d0b3-4bf9-8d70-f2eda4e25e18",
        "Content-Type": "application/json"
    }
  })
  export default api;

