console.log('Hello World')

$.ajax({
    type: 'GET',
    url: '/bank-json/',
    success: function (response){
        console.log(response)
    },
    error: function (error){
        console.log(error)
    }
})