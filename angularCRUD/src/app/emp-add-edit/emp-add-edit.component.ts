import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {
education :string[]=[

  'Matric',
  'Diploma',
  'Intermediate',
  'Gradute',
  'Post Gradute'

]

empForm :FormGroup;

  constructor(private _formbuilder:FormBuilder,private _empservice:EmployeeService) {

    this.empForm= this._formbuilder.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experince:'',
      package:''

    })
   }

  ngOnInit(): void {
  }


  addEmp(){
    if(this.empForm.valid){
      console.log(this.empForm.value)
    
      this._empservice.addEmp(this.empForm.value).subscribe(data=>{
        
      })
  
    }
  }
}
