var personnage = document.getElementsByClassName('row')[0]

$(function() {
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data, statuts, response) {
            data.forEach(element => {
                personnage.innerHTML = personnage.innerHTML + `
                
                    <div class="col-lg-4 col-md-4">
                        <img src="${element.imageUrl}" alt="">
                        <p>${element.firstName} ${element.lastName}</p>
                        <p>${element.title}</p>
                    </div>
                
                `
            })
        }
    })
})
