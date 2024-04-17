import { createAction, props } from "@ngrx/store";

export const addEmployee = createAction(
    '[Add][Employee][Details] Add Emplotee Details', props<{payload:{}}>());
export const addEmployeeSuccess = createAction(
    '[Add][Employee][Details] success] Add Emplotee Details success',
    props<{ addData:[] }>()
);
export const addEmployeeError = createAction('[[Add][Employee][Details][Error] Add Emplotee Details Error', props<{ error: string }>());

export const getEmployee = createAction(
    '[Get][Employee][Details] Get Emplotee Details');
export const getEmployeeSuccess = createAction(
    '[Get][Employee][Details][success] Get Emplotee Details success',
    props<{ getData:[] }>()
);
export const getEmployeeError = createAction('[Get][Employee][Details] Get Emplotee Details Error', props<{ error: string }>());

export const updateEmployee = createAction(
    '[Update][Employee][Details] Get Emplotee Details', props<{empId:number, payload:{}}>());
export const updateEmployeeSuccess = createAction(
    '[Update][Employee][Details][success] Get Emplotee Details success',
    props<{ updateData:[] }>()
);
export const updateEmployeeError = createAction('[Update][Employee][Details] Get Emplotee Details Error', props<{ error: string }>());

export const deleteEmployee = createAction(
    '[Delete][Employee][Details] Get Emplotee Details', props<{empId:number}>());
export const deleteEmployeeSuccess = createAction(
    '[Delete][Employee][Details][success] Get Emplotee Details success',
    props<{ updateData:[] }>()
);
export const deleteEmployeeError = createAction('[Delete][Employee][Details] Get Emplotee Details Error', props<{ error: string }>());

export const EmployeeAction = {
    addEmployee,
    addEmployeeSuccess,
    addEmployeeError,
    getEmployee,
    getEmployeeSuccess,
    getEmployeeError,
    updateEmployee,
    updateEmployeeSuccess,
    updateEmployeeError,
    deleteEmployee,
    deleteEmployeeSuccess,
    deleteEmployeeError,
};
