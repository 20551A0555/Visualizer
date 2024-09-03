import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  piechartlabels:any=[]
  title:any;
  piechartvalues:any=[]
  tableheaders:any=[]
  tablerows:any=[]
  constructor() { }
  initialize(rowlen:any,collen:any,headers:any,rows:any){
   this.tableheaders=headers;
   for (let i = 0; i < rowlen; i++) {
    let tabledata = []; 
    for (let j = 0; j < collen; j++) {
      let ind = (collen * i) + j;
      tabledata[j] = rows[ind];
    }
    this.tablerows.push(tabledata); 
   }
  }
  initialize2(title:any,labels:any,values:any){
    this.piechartvalues=values
    this.title=title
    for(let i=0;i<labels.length;i++){
      this.piechartlabels.push(labels[i]+"("+values[i]+"%)");
    }
  }
}
