const restAPI = {

    fetchMD(url) {
        return fetch(url)
            .then(function (response) {
                return response.text();
            })
    }
}
export default restAPI;