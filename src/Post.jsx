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
 * 39-9 Explore React Official Documentation
 * https://react.dev/learn
 * You will learn
How to create and nest components
How to add markup and styles
How to display data
How to render conditions and lists
How to respond to events and update the screen
How to share data between components
 */