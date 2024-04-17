// export class EmployeeEffects {
// }
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../service/api.service';
import { EmployeeAction } from './employee.action';

@Injectable()
export class EmployeeEffects {
  constructor(private actions$: Actions, private apiService: ApiService, private store: Store) {}


  addEmployeeDetails = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeAction.addEmployee),
      switchMap(action =>
        this.apiService.addEmployee(action.payload).pipe(
          map((response) => {
            return {
              addData:response
            };
          }),
          map((data:any) => EmployeeAction.addEmployeeSuccess(data)),
          catchError(err => of(EmployeeAction.addEmployeeError({ error: err })))
        )
      )
    )
  );
  getEmployeeDetails = createEffect(() =>
  this.actions$.pipe(
    ofType(EmployeeAction.getEmployee),
    switchMap(action =>
      this.apiService.getEmployee().pipe(
        map((response) => {
          return {
            getData:response
          };
        }),
        map((data:any) => EmployeeAction.getEmployeeSuccess(data)),
        catchError(err => of(EmployeeAction.getEmployeeError({ error: err })))
      )
    )
  )
);

UpdateEmployeeDetails = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeAction.updateEmployee),
      switchMap(action =>
        this.apiService.updateEmployee(action.empId,action.payload).pipe(
          map((response) => {
            return {
              updateData:response
            };
          }),
          map((data:any) => EmployeeAction.updateEmployeeSuccess(data)),
          catchError(err => of(EmployeeAction.updateEmployeeError({ error: err })))
        )
      )
    )
  );

  DeleteEmployeeDetails = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeAction.deleteEmployee),
      switchMap(action =>
        this.apiService.deleteEmployee(action.empId).pipe(
          map((response) => {
            return {
              updateData:response
            };
          }),
          map((data:any) => EmployeeAction.deleteEmployeeSuccess(data)),
          catchError(err => of(EmployeeAction.deleteEmployeeError({ error: err })))
        )
      )
    )
  );
}

