const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')


const api = {
    apiUrl : 'https://www.themealdb.com/api/json/v1/1/filter.php?i='
}

recipeApi()

async function recipeApi(search){
    const res = await fetch(api.apiUrl+search)
    const resData = await res.json()

    console.log(resData)
    recipeSpecification(resData)
}

function recipeSpecification(data){

    main.innerHTML = "";

     for(let i in data.meals){
        const recData = data.meals[i]

        const recipe = document.createElement('div')
        recipe.classList.add('recipe')

        recipe.innerHTML += 
        `
        <img src="${recData.strMealThumb}">
        <h1>${recData.strMeal}</h1>
        
        `;

        main.appendChild(recipe)
     }
}



form.addEventListener('submit', (e)=>{

  if(search.value){
      recipeApi(search.value)
  }

    e.preventDefault()
})