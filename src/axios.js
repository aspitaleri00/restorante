



axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1d9875b09e09ab16632e29f44badc9a0')
    .then((respuesta) => {
        console.log(respuesta.data)
         })
        .catch((error)=>{
            console.log(error)

        })


    