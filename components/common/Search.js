import React from 'react'
import { useState } from 'react';
import { Grid,Form,Input } from 'semantic-ui-react'

const Search = ({setSearchedquery}) => {
    const [value, setValue] = useState("");

    const onFormSubmit=()=>{
        setSearchedquery(value);
    }
  return (
    <Grid columns={2} textAlign='center' className='search-box'>
        <Grid.Column>
            <h2 className='search-heading'>Search Recipe With<span style={{color:"blue"}}> Our Recipes </span></h2>
         <Form onSubmit={onFormSubmit}>
            <Input
            placeholder="tomato,potato,pizza"
            action={{icon:'search', color:'blue'}}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            />
         </Form>
        </Grid.Column>
    </Grid>
  )
}

export default Search