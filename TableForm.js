import React,{Component} from 'react'
class TableForm extends Component{
    constructor(props){
        super(props);
        this.state={
            studentdetails:[
                {sid:501,sname:'Madhu',technology:'Full Stack Developer'},
                {sid:502,sname:'Ram',technology:'Java Developer'},
                {sid:503,sname:'Subhash',technology:'Django Developer'},
            ]
        }

    }
    render(){
        const {studentdetails}=this.state;
        return(
            <div>
                <table>
                    <tr>
                        <th>StudentNo</th>
                        <th>StudentName</th>
                        <th>Technology</th>
                    </tr>
                    {studentdetails.length>0 && studentdetails.map((student)=>{
                        return <tr key={student.sid}>
                            <td>{student.sid}</td>
                            <td>{student.sname}</td>
                            <td>{student.technology}</td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}
export default TableForm;
