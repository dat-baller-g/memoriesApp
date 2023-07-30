import React, { useEffect, useState } from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"
import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memory from "./images/desk.jpg";
import useStyles from "./styles";
import {getPosts} from "./actions/posts"

const App = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();

    const [id, setDataId] = useState(null)

    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch]);


    return(
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memory} alt="memories" height="60" />
               
                                 
               
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer}   justify="space-between" align-items="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts id={id} setDataId={setDataId}/>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form id={id} setDataId={setDataId} /> 
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
     
       
    )
}

export default App; 