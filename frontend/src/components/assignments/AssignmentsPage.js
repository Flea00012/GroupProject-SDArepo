import React, {useState,useEffect} from "react";
import AssignmentsApi from '../../api/AssignmentsApi';



function AssignmentsPage({match}) {
    
    const [assignmentTitle, setAssignmentTitle] = useState("");
    const [assignmentDescription, setAssignmentDescription] = useState("");
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");
    const [question4, setQuestion4] = useState("");
    const [question5, setQuestion5] = useState("");
    const [question6, setQuestion6] = useState("");
    const [question7, setQuestion7] = useState("");
    const [question8, setQuestion8] = useState("");
    const [question9, setQuestion9] = useState("");
    const [question10, setQuestion10] = useState("");
    const [assignId, setAssignId] = useState("");
   
    
    const getAssignmentById = (id) => {
        console.log("Calling getAssignmentById " + id )
        AssignmentsApi.getAssignmentById(id)
            .then(response => {
                console.log("Title value" +response.data.assignmentTitle);
                setAssignId(response.data.id);
                setAssignmentTitle(response.data.assignmentTitle);
                setAssignmentDescription(response.data.assignmentDescription);
                setQuestion1(response.data.question1);
                setQuestion2(response.data.question2);
                setQuestion3(response.data.question3);
                setQuestion4(response.data.question4);
                setQuestion5(response.data.question5);
                setQuestion6(response.data.question6);
                setQuestion7(response.data.question7);
                setQuestion8(response.data.question8);
                setQuestion9(response.data.question9);
                setQuestion10(response.data.question10);
                
                console.log(response.data);
            })
    }
    useEffect(() => {
        if(typeof match !== 'undefined' || assignId !== '')
        {
            console.log("Inside useEffect , going to call getAssignmentById " + match.params.assignId);
            getAssignmentById(match.params.assignId);

        }
        },[] );


    function handleSubmit()
    {
        console.log("Inside Submit")
        AssignmentsApi.postAssignment(
            {assignmentTitle,
            assignmentDescription,
            question1,
            question2,
            question3,
            question4,
            question5,
            question6,
            question7,
            question8,
            question9,
            question10})
            .then((response) => {
                setAssignId(response.data.id)
                alert("Successfully added the assignment")
            } )
    }
    
    function handleUpdate()
    {
        console.log("Inside Update"+ assignId)
        // Creating a local variable 
        const id = assignId;
        AssignmentsApi.updateAssignment(
            {
            id,
            assignmentTitle,
            assignmentDescription,
            question1,
            question2,
            question3,
            question4,
            question5,
            question6,
            question7,
            question8,
            question9,
            question10})
            .then((response) => alert("Updation of Assignment Successful") )
    }
    




    return (
        <div className="container-assignment">


             <div className="form-group">
             
             <label>Assignment Title:</label>
             
            
            <input type="text" 
            value={assignmentTitle} 
            className="form-control"
            onChange={e => setAssignmentTitle(e.target.value)} />
            </div>

            
            <div className="form-group text-dark">
            
             <label>Assignment Description:</label>

             <input
                            type="text"
                            value={assignmentDescription}
                            className="form-control"
                            onChange={e => setAssignmentDescription(e.target.value)} />
            </div>

           
           

            <div className="card-body text-dark border">
            <div className="question">
             <div>
            
            
            <textarea 
                            type="text"
                            value={question1}
                            className="form-control"
                            placeholder="Question 1"
                            onChange={e => setQuestion1(e.target.value)} />
            
            </div>

            <div>
            
            <textarea
                            type="text"
                            value={question2}
                            className="form-control"
                            placeholder="Question 2"
                            onChange={e => setQuestion2(e.target.value)} />
            
            </div>

            <div>
            
            <textarea
                            type="text"
                            value={question3}
                            className="form-control"
                            placeholder="Question 3"
                            onChange={e => setQuestion3(e.target.value)} />
            
            </div>

            <div>
           
            <textarea
                            type="text"
                            value={question4}
                            className="form-control"
                            placeholder="Question 4"
                            onChange={e => setQuestion4(e.target.value)} />
            
            </div>

            <div>
            
            <textarea
                            type="text"
                            value={question5}
                            className="form-control"
                            placeholder="Question 5"
                            onChange={e => setQuestion5(e.target.value)} />
            
            
            </div>

            <div>
            
            <textarea
                            type="text"
                            value={question6}
                            className="form-control"
                            placeholder="Question 6"
                            onChange={e => setQuestion6(e.target.value)} />
            
            
            </div>

            <div>
            
            <textarea
                            type="text"
                            value={question7}
                            className="form-control"
                            placeholder="Question 7"
                            onChange={e => setQuestion7(e.target.value)} />
            
            
            </div>

            <div>
            
            <textarea
                            type="text"
                            value={question8}
                            className="form-control"
                            placeholder="Question 8"
                            onChange={e => setQuestion8(e.target.value)} />
            
            
            </div>

            <div>
            
            <textarea
                            type="text"
                            value={question9}
                            className="form-control"
                            placeholder="Question 9"
                            onChange={e => setQuestion9(e.target.value)} />
            
            
            </div>

            <div>

            <textarea
                            type="text"
                            value={question10}
                            className="form-control"
                            placeholder="Question 10"
                            onChange={e => setQuestion10(e.target.value)} />
            
            
            </div>
            </div>
            </div>
            <div className="card-header">
                {assignId === '' ?
                <button
                    className=" btn btn-info btn-sm"
                    onClick={() => handleSubmit()}>
                    Submit
                </button>
                :
                <button
                    className=" btn btn-info btn-sm"
                    onClick={() => handleUpdate()}>
                    Update
                </button>}

               
                    
            </div>
            
        </div>
    );
}

export default AssignmentsPage;