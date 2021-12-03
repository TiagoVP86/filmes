import AsyncStorage from '@react-native-async-storage/async-storage';

// Buscar os filmes salvos
export async function getMovieSave(key){
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave = JSON.parse(myMovies) || [];
    return moviesSave;
}

// Salvar um novo filme
export async function saveMovie(key, newMovie){
    let moviesStored = await getMovieSave(key)

    //Se tiver algum filme salvo com esse mesmo ID ou duplicado, precisamos ignorar. 
    const hasMovie = moviesStored.some( item => item.id === newMovie.id )

    if(hasMovie){
        console.log("Esse filme já foi salvo.")
        return;
    }

    moviesStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
    console.log("Filme salvo com sucesso!")
}

//Deletar algum filme
export async function deleteMovie(id){
    const moviesStored = await getMovieSave('@primereact');

    let myMovies = moviesStored.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies));
    console.log("Filme deletado com sucesso.");
    return myMovies;
}

//Filtrar algum filme já salvo
export async function hasMovie(movie){
    let moviesStored = await getMovieSave('@primereact');

    const hasMovie = moviesStored.find(item => item.id === movie.id);

    if(hasMovie){
        return true;
    }
    return false;
}