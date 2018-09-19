import { taskConst } from '../constants/task.constant';

var initialState = [
    
];
var taskReducer = (state = initialState,action) => {
    switch (action.type) {
        case taskConst.TASK_GET_ALL:
          return state;
        default:
          return state;
      }
};

export default taskReducer;