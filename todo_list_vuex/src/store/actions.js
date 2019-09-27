export default {
    changeTasks({ commit }, newTasks) {
        // console.log('Actions: changeTasks', newTasks);
        commit('changeTasks', newTasks);
    },
    toggleForm({ commit }) {
        // console.log('Action toggleForm');
        commit('toggleForm');
    },
    handleSearch({ commit }, strSearch) {
        // console.log('Action handleSearch', strSearch);
        commit('handleSearch', strSearch);
    },
    handleSort({ commit }, data) {
        // console.log('Action handleSort', data);
        commit('handleSort', data);
    },
    handleDelete({ commit, state }, taskDelete) {
        console.log('Action handleDelete', taskDelete);
        let newListTask = state.listTask.filter(item => item.id !== taskDelete.id);
        commit('changeTasks', newListTask);
    },
    handleAddNewTask({ commit }, task) {
        commit('handleAddNewTask', task);
    }
}