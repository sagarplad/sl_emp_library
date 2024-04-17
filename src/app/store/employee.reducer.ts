import { Action, createReducer, on } from "@ngrx/store";
import { EmployeeAction } from "./employee.action";

export interface EmployeeState {
  employeeDetails: any[];
  addData: any[];
  getData: any[];
  updateData: any[];
  loading: boolean;
  error: any; // Add error property to the state interface
}

export const EmployeeInitialState: EmployeeState = {
  employeeDetails: [],
  addData: [],
  getData: [],
  updateData: [],
  loading: false, // Initialize loading and error properties
  error: null,
};

const employeeReducer = createReducer(
  EmployeeInitialState,
  on(EmployeeAction.addEmployee, (state) => ({
    ...state,
    loading: true,
    error: null, // Reset error when starting the operation
  })),
  on(EmployeeAction.addEmployeeSuccess, (state, { addData }) => ({
    ...state,
    addData,
    loading: false,
  })),
  on(EmployeeAction.addEmployeeError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(EmployeeAction.getEmployee, (state) => ({
    ...state,
    loading: true,
    error: null, // Reset error when starting the operation
  })),
  on(EmployeeAction.getEmployeeSuccess, (state, { getData }) => ({
    ...state,
    getData,
    loading: false,
  })),
  on(EmployeeAction.getEmployeeError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(EmployeeAction.updateEmployee, (state) => ({
    ...state,
    loading: true,
    error: null, // Reset error when starting the operation
  })),
  on(EmployeeAction.updateEmployeeSuccess, (state, { updateData }) => ({
    ...state,
    updateData,
    loading: false,
  })),
  on(EmployeeAction.updateEmployeeError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(EmployeeAction.deleteEmployee, (state) => ({
    ...state,
    loading: true,
    error: null, // Reset error when starting the operation
  })),
  on(EmployeeAction.deleteEmployeeSuccess, (state, { updateData }) => ({
    ...state,
    updateData,
    loading: false,
  })),
  on(EmployeeAction.deleteEmployeeError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
);

export function EmployeeReducer(state: EmployeeState | undefined, action: Action) {
  return employeeReducer(state, action);
}
