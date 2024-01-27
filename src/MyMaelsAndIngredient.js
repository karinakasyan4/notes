const MyMealsAndIngredient = ({selectedDay, updateDay})=> {
    const editMyMeal = (myInput, value) => {
        updateDay({
            ...selectedDay,
            [myInput]: value
        })
    }
    
    if(!selectedDay) return <p>Plan your week ahead of time!</p>

    return(
        <div className="whole-plan">
            <div className="meal-editing">

                <input
                type="text"
                className="myInput"
                placeholder="Today is ..."
                id="title"
                value={selectedDay.title}
                onChange = {(e) => editMyMeal("title", e.target.value)}
                />


                <textarea
                placeholder="Wrire your meal plan here"
                id="mealForADay"
                value={selectedDay.mealForADay}
                onChange = {(e) => editMyMeal("mealForADay", e.target.value)}
                />



                <textarea
                placeholder="List of ingredient"
                id="ingredient"
                value={selectedDay.ingredient}
                onChange = {(e) => editMyMeal("ingredient", e.target.value)}
                />
            </div>
        </div>
    )
}

export default MyMealsAndIngredient;