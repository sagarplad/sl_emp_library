import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addEmployee, deleteEmployee, getEmployee, updateEmployee } from '../store/employee.action';
import { Subscription } from 'rxjs';
import { selectAddEmployee, selectGetEmployee } from '../store/employee.selector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  subs: Subscription[] = [];
  employeeData :any = [];
  employeeForm!: FormGroup;
  mode = 'add';
  empId!: number;
  constructor(private store: Store,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      designation: ['', [Validators.required]]
    });
    this.store.dispatch(getEmployee());
    this.subs.push(
      this.store
      .select(selectAddEmployee)
      .subscribe(res => {
        console.log("PPPP", res);
       this.employeeData.push({name: res.name, age: res.age, designation:res.designation});
      }),
      this.store
      .select(selectGetEmployee)
      .subscribe(res => {
       this.employeeData = res;
      }),
    )
  }

   // Getter for easy access to form controls
   get f() { return this.employeeForm.controls; }

   onSubmit() {
     // Process form submission
     if (this.employeeForm.invalid) {
       return;
     }
     if (this.mode === 'add') {
       // Form is valid, proceed with submission
       this.store.dispatch(addEmployee({payload:this.employeeForm.value}));
      } else {
        this.store.dispatch(updateEmployee({empId:+this.empId + 1, payload:this.employeeForm.value}));
        this.mode = 'add';
        this.empId = 0;
      }
      this.store.dispatch(getEmployee());
   }

   updateDetails(index: string | number) {
    this.mode = 'edit';
    this.empId = +index;
    const editValue = this.employeeData[index];
    this.employeeForm.patchValue({name:editValue.name, age:editValue.age, designation:editValue.designation}); 
   }
   deleteDetails(index: any) {
    this.empId = +index;
   }
   deleteDetails1() {
    console.log(this.empId);
    this.store.dispatch(deleteEmployee({empId:+this.empId + 1,}));
    this.store.dispatch(getEmployee());
   }
}
