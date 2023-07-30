import React from "react";
import { Grid, CircularProgress } from '@material-ui/core';
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";



 const Posts = ({id, setDataId})=>{
     const posts = useSelector((state)=> state.posts)
    const classes = useStyles();
  return(
      <>
         <h1>Posts</h1>
         {!posts.length ? <CircularProgress /> : 
               <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                 { posts.map((post)=>{
                     return(
                        <Grid item xs={12} sm={6} md={6}>
                           <Post post={post} setDataId={setDataId} id={id}/>

                        </Grid>
                     )
                  })}
               </Grid>
            
         }
      </>
      
       )
}

export default Posts;