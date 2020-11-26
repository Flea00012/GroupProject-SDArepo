import React from 'react';

import Students from './Students.jsx';

function StudentsPage() {
    return (
        <div className="row ">
	        <div className="medium-12 columns">
                <header id="main-header">
		            <div class="container">
			            <h1>Educational Support Environment</h1>
		            </div>
	            </header>
            <div class="container">
		        <section id="main">
			        <h2>List of Students</h2>
			            <p>Student1 <br/> Student2 <br/> 
                                Student3 <br/> Student4 <br/> Student5 <br/> </p>
		        </section>
	        </div>
            <div class="container">
                <section id="button">
                <button class="btn btn1"> Create Student</button>
                <button class="btn btn1"> Update Student</button>
                <button class="btn btn1"> Delete Student</button>
                </section>
            </div>
        </div>
    </div>
    );
}

export default StudentsPage;
