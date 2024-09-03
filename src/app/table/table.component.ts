import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
headers:any=[];
btnstyle:any="mt-4 btn btn-success noPrint opacity-0";
rows:any=[];
save:any="";
constructor(private service:SharedServiceService,private route:Router){
}
ngOnInit(){
this.headers=this.service.tableheaders;
console.log(this.headers)
this.rows=this.service.tablerows;
console.log(this.rows)
if(this.rows.length>1){
this.btnstyle="mt-4 btn btn-success noPrint opacity-1"
this.save="Save Table"
}
}
}
