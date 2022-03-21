import {ListGroup} from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({CommentsToDisplay}) => (
    <ListGroup>
        {
            CommentsToDisplay.map(comment => ( 
                    <SingleComment comment={comment} />  
            ))
        }
        
    </ListGroup>  
)

export default CommentList