import "./Form.css"



function Form (){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsListItmes = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form submitted!")
        const formData = new FormData(event.currentTarget)
        const newIngrediant = formData.get("ingredient")
        ingredients.push(newIngrediant)
        console.log(newIngrediant)
    }

    return(
        <main>
            <form onSubmit={handleSubmit} className="add-ingrediant-form">
                <input
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add Ingredient"
                name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItmes}
            </ul>
        </main>
    )
}

export default Form