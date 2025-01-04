function peopleWithAgeDrink(old) {
  //Setup else if statement to run through scenarios one by one until you find the right match
  if (old <= 13) {
    return "drink toddy" 
  } else if (old <= 17) {
    return "drink coke"
  } else if (old <= 20) {
    return "drink beer" 
  } else {
    return "drink whisky"
  }
};