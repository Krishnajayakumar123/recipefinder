import React from 'react'
import { Container,Header,Grid } from 'semantic-ui-react'
import RecipeListItem from './RecipeListItem'
const RecipeList = ({recipes,searchedquery}) => {
  return (
    <div>
       <Container>
        <Header
        size='huge'
        content={`RECIPE LIST FOR ${searchedquery}`}
        textAlign='center'
        />
        <Grid columns={4} doubling>
          {
            recipes && recipes.map(recipe=>(
              <Grid.Column>
                <RecipeListItem recipe={recipe}/>
              </Grid.Column>
            ))
          }
        </Grid>
        </Container> 
    </div>
  )
}

export default RecipeList