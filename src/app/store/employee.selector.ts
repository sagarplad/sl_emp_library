import { createSelector } from "@ngrx/store";

export const selectEmployee = (state: any) => state.employee;

export const selectAddEmployee = createSelector(selectEmployee, state => state.addData);
export const selectGetEmployee = createSelector(selectEmployee, state => state.getData);
export const selectUpdateEmployee = createSelector(selectEmployee, state => state.updateData);

export class EmployeeSelector {
}
