import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrl: './piechart.component.css'
})
export class PiechartComponent {
piechartstyle:any='';
btnstyle:any="btn btn-secondary mt-5 opacity-0 noPrint";
piecharttitle:any='';
piechartdata:any=[];
constructor(private service:SharedServiceService){
  this.initialise();
}
initialise(){
  let arr=this.service.piechartvalues;
  this.piecharttitle="Pie Chart About "+this.service.title;
  let angle:any=[0,0,0,0,0,0,0,0,0,0];
  let colors:any=['#1E90FF','#00FF7F','#BA55D3','yellow','#00CED1','#DAA520','#FF6347','#3CB371','#EE82EE','#DC143C'];
  let orgnames:any=this.service.piechartlabels;
  let initial=0;
  for(let i=0;i<arr.length;i++){
    this.piechartdata.push(
      {
        title:orgnames[i],
        color:"background-color:"+colors[i]+";padding: 1px 10px;margin-right:3px;"
      }
    )
    angle[i]=initial+Number(360)*(arr[i]/100);
    initial=angle[i];
  }
  if(this.piechartdata.length>1){
  this.piechartstyle=`display:block;overflow:hidden;width:30%;height:65%; border-radius: 50%;background-image: conic-gradient(at 50% 50%,#1E90FF 0deg,#1E90FF ${angle[0]}deg,#00FF7F ${angle[0]}deg,#00FF7F ${angle[1]}deg,#BA55D3 ${angle[1]}deg,#BA55D3 ${angle[2]}deg,yellow ${angle[2]}deg,yellow ${angle[3]}deg,#00CED1 ${angle[3]}deg,#00CED1 ${angle[4]}deg,#DAA520 ${angle[4]}deg,#DAA520 ${angle[5]}deg,#FF6347 ${angle[5]}deg,#FF6347 ${angle[6]}deg,#3CB371 ${angle[6]}deg,#3CB371 ${angle[7]}deg,#EE82EE ${angle[7]}deg,#EE82EE ${angle[8]}deg,#DC143C ${angle[8]}deg,#DC143C ${angle[9]}deg);`
  this.btnstyle="btn btn-secondary mt-5 opacity-1 noPrint";
  }
  console.log(angle);
  console.log(this.piechartdata);
}
}
