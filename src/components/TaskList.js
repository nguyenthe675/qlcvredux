import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
class TaskList extends React.Component {
  render() {
    let { tasks } = this.props;
    let elmTask = tasks.map((task,index)=>{
      return <TaskItem key= {task.id} index = {index} task={task}></TaskItem>;
    });
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          { elmTask }
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks : state.taskReducer
  }
};
export default connect(mapStateToProps,null)(TaskList);