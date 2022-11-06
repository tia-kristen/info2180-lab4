window.onload = () => {
    const searchBtn = document.querySelector('#search-btn');
    const input = document.querySelector('#superhero-search');
    const result = document.querySelector('#result');

    searchBtn.addEventListener('click', async (e)=>{
        e.preventDefault();
        let query = input.value;
        let response = await fetch(`superheroes.php?query=${query}`);

        if(response.status === 200){
            let data = await response.text();
            result.innerHTML = data;
        } else {
            alert("There was a problem processing your request.");
        }
    })
}