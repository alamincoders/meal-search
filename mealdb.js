 document.getElementById('errorMessage').style.display = 'none';

const searchFood = () =>{
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    // clear data
    searchInput.value = '';
    // error msg
    document.getElementById('errorMessage').style.display = 'none';

    if(searchText == ''){
        // please write something to display


// home work

}

    else{
// load data

    // dynamic url making
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
        .catch(error => displayError(error));
        
}
    };

// error handle for this function declare
const displayError = error => {
document.getElementById('errorMessage').style.display = 'block';
}

    const displaySearchResult = meals => {
 const searchResult =document.getElementById('searchResult');
searchResult.textContent = '';
if(meals.length == 0){
    // show no result found
    

// home work

}
 meals.forEach(meal => {
    //  console.log(meal);
     const div = document.createElement('div');
     div.classList.add('col');
     div.innerHTML = `
     <div onclick = "mealDetails(${meal.idMeal})" class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top img-fluid d-block" alt="">
         <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
             <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
      </div>
    </div>
     
     `;
     searchResult.appendChild(div);
 })
}

const mealDetails = mealId => {
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
};

const displayMealDetail = meal => {
    const singleMeal = document.getElementById('mealDetails');
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('container');
    div.classList.add('mt-5');
    div.style.width = '18rem';
    div.innerHTML = `

     <img class ="img-fluid mt-2 rounded-3" src="${meal.strMealThumb}" alt="">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 50)}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary" target = "blank">Get Recipes</a>
  </div>  
  `;
  singleMeal.appendChild(div);
}

