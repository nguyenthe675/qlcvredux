import { taskConst } from '../constants/task.constant';

export const taskActions = {
    getAll
}

function getAll() {
    return {
        type : taskConst.TASK_GET_ALL
    }
}