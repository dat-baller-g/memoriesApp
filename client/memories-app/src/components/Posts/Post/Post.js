import React, {useState, useEffect} from "react";
import useStyles from "./styles"
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, getPosts, likePost } from "../../../actions/posts";



 const Post = ({post, id, setDataId})=>{

    const [clicked, setClicked] = useState(false);
    

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = async() => {
      //  e.preventDefault();
       dispatch(deletePost(post._id));
       setClicked(true)       

    }

    useEffect(()=>{
     if(clicked){
        dispatch(getPosts())
       setClicked(false);
     }
   }, [clicked, dispatch]
   )


  return(
      <>
         <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={()=>{setDataId(post._id)}}><MoreHorizIcon fontSize="medium" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={()=>{dispatch(likePost(post._id));}}><ThumbUpAltIcon fontSize="small" name="likeButton" /> &nbsp; Like &nbsp; {post.likeCount} </Button>
        <Button size="small" color="primary"  onClick={handleClick} ><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>

         
        
      </>
      
       )
}

export default Post;