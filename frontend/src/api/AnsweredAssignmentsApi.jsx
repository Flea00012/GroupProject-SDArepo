import Api from "./Api";

class AnsweredAssignmentsApi
{
    getAllAnsweredAssignments() {
        return Api.get('/assignments/answered');
    }

    getAnsweredAssignmenttById(id) {
        return Api.get('/assignments/answered/'+id);
    }
    
    createAnsweredAssignment(answeredAssignment) {
        return Api.post('/assignments/answered', answeredAssignment);  
    }

    updateAnsweredAssignment(updatedAssignment) {
        return Api.put('/assignments/answered', updatedAssignment);
    }

    deleteAnsweredAssignment(id) {
        return Api.delete('/assignments/answered/'+id);
    }

    getCurrentUser() {
        return Api.get('/currentUser');
    }

}

export default new AnsweredAssignmentsApi() ;