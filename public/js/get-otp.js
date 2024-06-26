fetch("/get_otp")
.then(response =>{
    if (!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
})
.then(html =>{
    document.body.innerHTML = html;
})
.catch(error =>{
    console.error('Error fetching /get_otp:', error);
});
