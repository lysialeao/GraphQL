import { gql, useQuery } from "@apollo/client"
import { Grid, List, ListItem, ListItemText } from "@mui/material";
import { NewUserForm } from "./components/NewUseForm";

type User = {
  id: string;
  name: string;
}

export const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }

`

function App() {

  const { data, loading } = useQuery<{ users: User[] }>(GET_USER)

  if(loading){
    return <p>Carregando...</p>
  }

  console.log(data)

  return(
      <Grid container direction="column" justifyContent="center"alignItems="center">
        <Grid item xs={12}>
          <NewUserForm/> 
        </Grid>
        <Grid item xs={12}>
          <List>
            {data?.users.map(user => <ListItem> <ListItemText key={user.id}> {user.name} </ListItemText> </ListItem> )}
          </List>
        </Grid>
      </Grid>

  )
}

export default App
