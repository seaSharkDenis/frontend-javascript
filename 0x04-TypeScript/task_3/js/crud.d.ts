import {RowId, RowElement} from './interface';

export function insertRow(row: RowElement):RowID;
export function deleteRow(rowId: RowId):void;
export function updateRow(rowId: RowId, row: RowElement): RowId;