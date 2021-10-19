var personnage = document.getElementsByClassName('personnage')[0]

$(function() {
    var test_data = []
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data, statuts, response) {
            afficherlist(data)
            $('.form').submit(function(e) {
                e.preventDefault()
                var input = document.getElementById('search').value
                var tab_search = []
                // var searchFullName = data.filter(function(element){
                //     return element.fullName === input
                // })
                data.forEach(element => {
                    if (element.fullName.includes(input)) {
                        tab_search.push(element)
                    }
                })
                afficherlist(tab_search);
            })
        }
    })
    
    function afficherlist(list) {
        personnage.innerHTML = ""
        list.forEach(element => {
            personnage.innerHTML = personnage.innerHTML + `
                <div class="col-lg-4 col-md-4 char">
                    <img src="${element.imageUrl}" alt="">
                    <p>${element.fullName}</p>
                    <p>${element.title}</p>
                </div>
            
            `
        })
    }
})


