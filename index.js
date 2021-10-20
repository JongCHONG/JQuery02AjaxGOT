
$(function() {
    var personnage = document.getElementsByClassName('personnage')[0]
    var dataGlobal =[]

    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data, statuts, response) {
            afficherlist(data)
            dataGlobal = data
        }
    })
    $(".search input").keyup(function() {
        var input = $("#search").val().toLowerCase()
        // $('.form').submit(function(e) {
        //     e.preventDefault()
            // var input = $("#search").val()
            var tab_search = []
            // var searchFullName = data.filter(function(element){
            //     return element.fullName === input
            // })
            dataGlobal.forEach(element => {
                if (element.fullName.toLowerCase().includes(input)) {
                    tab_search.push(element)
                }
            })
            afficherlist(tab_search)
        // })
    })
    $("#random").click(function(){
        var random = _.shuffle(dataGlobal)
        afficherlist(random)
    })
    $("#trier").click(function(){
        var arrayTri = dataGlobal.sort(SortArray)
        afficherlist(arrayTri)
    })

    function SortArray(x, y){
        if (x.fullName < y.fullName) {return -1;}
        if (x.fullName > y.fullName) {return 1;}
        return 0;
    }

    function afficherlist(list) {
        $('.personnage').empty()
        list.forEach(element => {
            $('.personnage').append(`
                <div class="col-lg-4 col-md-4 char">
                    <div class="border">
                        <img src="${element.imageUrl}" alt="">
                        <p>${element.fullName}</p>
                        <p>${element.title}</p>
                    </div>
                </div>
            
            `)
        })
    }
    // function afficherlist(list) {
    //     personnage.innerHTML = ""
    //     list.forEach(element => {
    //         personnage.innerHTML = personnage.innerHTML + `
    //             <div class="col-lg-4 col-md-4 char">
    //                 <div class="border">
    //                     <img src="${element.imageUrl}" alt="">
    //                     <p>${element.fullName}</p>
    //                     <p>${element.title}</p>
    //                 </div>
    //             </div>
            
    //         `
    //     })
    // }
})


