import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ReportUserForm{
    user_id !: number;
    report_type_id !: number;
    is_block: boolean = false;
    comment: string = '';
}