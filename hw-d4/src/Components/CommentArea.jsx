import {Component} from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

class CommentArea extends Component {
    
    state = {
        comments: [] // empty array for comments
    }

    componentDidMount = async () => {

        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
                headers: {
                    Authorizaion: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjM4NzA5MmYyYzZhZTAwMTVjN2M3ZjciLCJpYXQiOjE2NDc4NjYwMDIsImV4cCI6MTY0OTA3NTYwMn0.ix-UrGRi3HOKMqnzODX_75qvHwY4r0OeSiwRrjRnpQw'
                }
            })
            console.log(response)
            let comments = await response.json()
            this.setState({comments: comments}) //can also just write comments instead of comments: comments
        } catch (error) {
            console.log(error)
        }

    }



    render() {
        return (
        <div>
            <AddComment asin={this.props.asin} />
            <CommentList commentsToDisplay={this.state.comments} /> 
        </div>
        )
    }
}

export default CommentArea

