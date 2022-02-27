class UI {
    newCol(list){
        const imagePath = 'https://image.tmdb.org/t/p/w1280';
        const main      = document.getElementById('main')

        if(list != undefined){
                list.forEach((movie)=>{

                    const {title,poster_path,vote_average,overview} = movie;
                    const div = document.createElement('div')
                    div.classList.add('col-3')
                    div.innerHTML = `
                    <img class="image col-4" src="${imagePath + poster_path}" alt="${title}" />
                    <div class="movie-info">
                        <h3>${title}</h3>
                        <span class="test">${vote_average}</span>
                    </div>
                    <div class="overview">
                        <h3>Overview</h3>
                        ${overview}
                    </div>`
                    main.appendChild(div)

                })
        }
    }
}