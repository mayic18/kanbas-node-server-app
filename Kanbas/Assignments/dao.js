
import model from "./model.js";
export function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId });
}

export function createAssignment(assignment) {
    delete assignment._id;
    return model.create(assignment);
    
}

export function deleteAssignment(assignmentID) {
    return model.deleteOne({ _id: assignmentID });
    //const { assignments } = Database;
    //Database.assignments = assignments.filter((a) => a._id !== assignmentID);
}

export function updateAssignment(assignmentID, assignmentUpdates) {
    return model.updateOne({ _id: assignmentID }, assignmentUpdates);
    //const assignment = assignments.find((a) => a._id === assignmentID);
    //Object.assign(assignment, assignmentUpdates);
    //return assignment;
}  