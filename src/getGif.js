const requestGiffer = async function (keyword) {
    try {
        let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=208qKMS0uAmKiV0yBzDRGcw4XfZqSNjT&s=${keyword}`, {mode: "cors"});
        let json = await response.json();
        return json.data.images["original"].url;
    } catch(err) {
        console.log(err);
    }

}

export {requestGiffer};