class UI {
    newCol(list){
        const imagePath = 'https://image.tmdb.org/t/p/w1280';
        const main      = document.getElementById('main')

        if(list != undefined){
                list.map((movie)=>{

                    const {title,poster_path,vote_average,overview} = movie;
                    const div = document.createElement('div')
                    div.classList.add('col-4','post')
                    div.innerHTML = `
                    <img class="image" src="${imagePath + poster_path}" alt="${title}" />
                    <h1>${vote_average}</h1>
                    <h2>${title}</h2>

                   `
                    main.appendChild(div)

                })
        }
    }
}