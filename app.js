window.onload = () => {
    const searchBtn = document.querySelector('#search-btn');

    searchBtn.addEventListener('click', async ()=>{
        let response = await fetch('superheroes.php');

        if(response.status === 200){
            let data = await response.text();
            alert(data);
        } else {
            alert("There was a problem processing your request.");
        }
    })
}