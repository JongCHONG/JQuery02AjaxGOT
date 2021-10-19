var personnage = document.getElementsByClassName('personnage')[0]

$(function() {
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data, statuts, response) {
            afficherlist(data)
            $(".search input").keyup(function() {
                var input = $("#search").val()
                // $('.form').submit(function(e) {
                //     e.preventDefault()
                    // var input = $("#search").val()
                    var tab_search = []
                    // var searchFullName = data.filter(function(element){
                    //     return element.fullName === input
                    // })
                    data.forEach(element => {
                        if (element.fullName.includes(input)) {
                            tab_search.push(element)
                        }
                    })
                    afficherlist(tab_search)
                // })
            })
            $("#random").click(function(){
                var random = Math.floor(Math.random() * (data.length - 0 + 1) + 0)
                console.log(random)
            })
            $("#trier").click(function(){
                var arrayTri = data.sort(SortArray)
                afficherlist(arrayTri)
            })
        }
    })

    function SortArray(x, y){
        if (x.fullName < y.fullName) {return -1;}
        if (x.fullName > y.fullName) {return 1;}
        return 0;
    }

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


