import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import * as courseActions from '../../actions/courseActions';


class CoursesPage extends React.Component {

  constructor (props, context) {
    super(props, context);
    }
  }

  courseRow(course, index) {
    return <div key={index}>
      {course.title}
        </div>
  }


  render () {
    return (
      <div>
        <h1> Courses </h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    // courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  }
  }

export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);




//  <h2> Add Course</h2>
{/*<input type="text" onChange={this.onTitleChange}*/}
       {/*value={this.state.course.title} />*/}
{/*<input type="submit" value="save " onClick={this.onClickSave}/>*/}

{/*onTitleChange (event) {*/}
  {/*const course = this.state.course*/}
  {/*course.title = event.target.value*/}
  {/*this.setState({ course: course })*/}
  {/*console.log(this.state.course.title)*/}
{/*}*/}

{/*onClickSave () {*/}
  {/*this.props.createCourse(this.state.course)*/}
{/*}*/}

{/*this.onTitleChange = this.onTitleChange.bind(this)*/}
{/*this.onClickSave = this.onClickSave.bind(this)*/}
