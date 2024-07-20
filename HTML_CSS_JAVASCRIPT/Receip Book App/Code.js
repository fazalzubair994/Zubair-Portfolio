// ye function aik async function he, yaani ye mukammal taor per asynchronously run hooga.
async function getData() {
  // jab bhi function ke andar execution enter hoogi tab sabse phele data ko aik particular api se fetch kiya jayega.
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=275d58779ccf4e22af03e792e8819fff`
  );

  // fetch karne ke baad us data ko jason ki format me aik oor variable me store kiya jayega.
  const data = await response.json();

  // uske baad us data ke andar jo recipes ki category he usko aik allag varaible me store kiya jayega.
  const Recipes = data.recipes;

  // and after that us Recipes ke har index ke liye aik allag foreach loop run hoogi.
  Recipes.forEach((recipe) => {
    // or pher ham apna html define karenge or us html me jo required fields hain unko bhi ham define karenge.
    let recipeUI = `<div class="recipeList">
                <img src="${recipe.image}" alt="${recipe.image}">
                <h1>${recipe.title}</h1>
                <p>
                    <span>'Ingredients:'</span>
                    ${recipe.extendedIngredients
                      .map((ingredient) => ingredient.original)
                      .join(", ")}
                </p>
                <a href="${recipe.sourceUrl}">View Recipe</a>
            </div>`;

    // and at the end pher ham us html ko apne container waale element ke nadar insert kardenge.
    document
      .querySelector(".container")
      .insertAdjacentHTML("beforeend", recipeUI);
  });
}

// so jab bhi hamara js load hooga to getData() method load hooga.
getData();
