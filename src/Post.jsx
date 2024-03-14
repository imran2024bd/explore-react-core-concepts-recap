import './Post.css'
export default function Post({post}){
    // console.log(post);
    const {title , userId , id , body } = post;
    return(
        <div className='post'>
            <h5>Title : {title}</h5>
            <p><small>userId : {userId} </small></p>
            <p><small>postId: {id} </small></p>
            <p><small>Body : {body}</small></p>

        </div>
    )
}

/**
 * 39-8 Thinking In React Way
 */