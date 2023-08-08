fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(function(response){
    console.log(response)
    return response.json()
}).then(function(responseBody){
    console.log(responseBody)
}).catch(function(error){
    console.log(error)
})

let getTask = async function (id){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const responseBody = await response.json()
        console.log(responseBody)
    }catch(error){
        console.log(error)
    }
}