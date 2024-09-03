import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedServiceService } from '../shared-service.service';
import { Router } from '@angular/router';
FormsModule
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent{
headers:any=[]
Labels:any=[]
opacity2:any="mt-3 mb-1 opacity-0";
values:any=[]
inputtitle:any=[]
value1:any;
value2:any;
modalclose:any=""
btndisable:any=""
errmsg:any="Note: Table creation is restricted to a maximum of 9 rows and 9 columns."
errmsg2:any="Note : Piechart creation is restricted to a maximum of 9 Labels."
createtablebtn:any="Create Table"
createpiechart:any="Create Piechart"
createbargraph:any="Create Bargraph"
rows:any=[]
inputh:any=[]
rowlen:any;
collen:any;
opacity:any="mt-3 mb-1 opacity-0"
value:string=""
inputr:any=[]
constructor(private service:SharedServiceService,private routes:Router){
}
ngOnInit(){
  document.querySelectorAll("button[name='action']").forEach(button => {
    (button as HTMLButtonElement).addEventListener('click', (event: Event) => {
      const btnele = event.target as HTMLButtonElement;
      console.log(btnele.innerHTML);
      if (btnele.innerHTML === "Create Table" || btnele.innerText === "Create Table") {
        this.tablecreation();
      } else {
        this.piechartcreation();
      }
    });
  });
//   document.querySelector("input[name='rows*colums']")?.addEventListener('input',() =>{
//     console.log(this.value[2]!=undefined);
//     if(this.value.match(/^\d,\d$/)&&this.value[2]!=undefined&&this.value[0]!=undefined){
//     this.rowlen=this.value[0];
//     this.collen=this.value[2];
//     let hvalue='';
//     let count=1
//     let sum=0
//     this.opacity="mt-3 text-center"
//     for(let i=0;i+''<this.collen;i++){
//       hvalue=i+1+'';
//     this.inputh.push(
//       {
//         placeholder:"Header"+hvalue
//       }
//     )
//    }
//   for(let i=0;i+''<this.rowlen;i++){
//     hvalue=i+1+'';
//    this.inputr.push(
//     {
//       rowlabel:"Enter values of Row "+hvalue,
//     }
//   )
//   for(let j=0;j+''<this.collen;j++){
//     this.inputr.push(
//       {
//         placeholder:"Data"+count,
//       }
//     )
//     count++;
//   }
//  }
//   }
//   else{
//     this.inputh=[];
//     this.inputr=[];
//     this.opacity="mt-2 opacity-0"
//   }
// }
// );
// document.querySelector("button[name='createbtn']")?.addEventListener('click',() =>{
//   for(let i=0;i<this.collen;i++){
//     let temp="Header"+Number(i+1);
//     const inputElement = document.querySelector(`input[placeholder="${temp}"]`) as HTMLInputElement;
//     console.log();
//     if(inputElement?.value!=""){
//       inputElement.style.borderBottom="2px solid black"
//       this.headers[i]=inputElement?.value;
//       }
//       else{
//         inputElement.style.borderBottom="2px solid red";
//         this.errmsg="!! All Fields are Required !!";
//         break;
//       }
//   }
//   console.log(this.headers);
//   for(let i=0;i<Number(this.collen*this.rowlen);i++){
//     let temp="Data"+Number(i+1);
//     const inputElement = document.querySelector(`input[placeholder="${temp}"]`) as HTMLInputElement;
//     if(inputElement.value!=""){
//     inputElement.style.borderBottom="2px solid black"
//     this.rows[i]=inputElement?.value;
//     if(i==Number(this.collen*this.rowlen)-1){
//        this.modalclose="modal"
//        let a=document.querySelector('a') as HTMLAnchorElement;
//        a.href="#j";
//        let btnname=document.querySelector("button[name='createbtn']") as HTMLButtonElement;
//        btnname.innerHTML="Create"
//        this.createtablebtn="Loading ..."
//        this.btndisable="true";
//         const element = document.querySelectorAll('.maindiv h2 .animate1');
//         console.log(element);
//         element.forEach((element) => {
//           (element as HTMLElement).classList.add('animate');
//         });
//        this.transferdata();
//     }
//     }
//     else{
//       inputElement.style.borderBottom="2px solid red";
//       this.errmsg="!! All Fields are Required !!";
//       break;
//     }
//   }
//   console.log(this.rows);  
// });
}
tablecreation(){
  document.querySelector("input[name='rows*colums']")?.addEventListener('input',() =>{
    console.log(this.value[2]!=undefined);
    if(this.value.match(/^\d,\d$/)&&this.value[2]!=undefined&&this.value[0]!=undefined){
    this.rowlen=this.value[0];
    this.collen=this.value[2];
    let hvalue='';
    let count=1
    let sum=0
    this.opacity="mt-3 text-center"
    for(let i=0;i+''<this.collen;i++){
      hvalue=i+1+'';
    this.inputh.push(
      {
        placeholder:"Header"+hvalue
      }
    )
   }
  for(let i=0;i+''<this.rowlen;i++){
    hvalue=i+1+'';
   this.inputr.push(
    {
      rowlabel:"Enter values of Row "+hvalue,
    }
  )
  for(let j=0;j+''<this.collen;j++){
    this.inputr.push(
      {
        placeholder:"Data"+count,
      }
    )
    count++;
  }
 }
  }
  else{
    this.inputh=[];
    this.inputr=[];
    this.opacity="mt-2 opacity-0"
  }
}
);
document.querySelector("button[name='createbtn']")?.addEventListener('click',() =>{
  for(let i=0;i<this.collen;i++){
    let temp="Header"+Number(i+1);
    const inputElement = document.querySelector(`input[placeholder="${temp}"]`) as HTMLInputElement;
    console.log();
    if(inputElement?.value!=""){
      inputElement.style.borderBottom="2px solid black"
      this.headers[i]=inputElement?.value;
      }
      else{
        inputElement.style.borderBottom="2px solid red";
        this.errmsg="!! All Fields are Required !!";
        break;
      }
  }
  console.log(this.headers);
  for(let i=0;i<Number(this.collen*this.rowlen);i++){
    let temp="Data"+Number(i+1);
    const inputElement = document.querySelector(`input[placeholder="${temp}"]`) as HTMLInputElement;
    if(inputElement.value!=""){
    inputElement.style.borderBottom="2px solid black"
    this.rows[i]=inputElement?.value;
    if(i==Number(this.collen*this.rowlen)-1){
       this.modalclose="modal"
       let a=document.querySelector('a') as HTMLAnchorElement;
       a.href="#j";
       this.errmsg="No Errors !"
       let btnname=document.querySelector("button[name='createbtn']") as HTMLButtonElement;
       btnname.innerHTML="Create"
       document.querySelectorAll("input").forEach((ele:any)=>{
        let inputsall=ele as HTMLInputElement;
        inputsall.setAttribute("disabled","true");
       });
       this.createtablebtn="Loading ..."
       this.btndisable="true";
        const element = document.querySelectorAll('.maindiv h2 .animate1');
        console.log(element);
        element.forEach((element) => {
          (element as HTMLElement).classList.add('animate');
        });
        btnname.addEventListener('click',()=>{
          this.transfertabledata();
        })
    }
    }
    else{
      inputElement.style.borderBottom="2px solid red";
      this.errmsg="!! All Fields are Required !!";
      break;
    }
  }
  console.log(this.rows);  
});
}
piechartcreation(){
  if(this.value2<=9 && this.value2!=null){
    this.opacity2="mt-3 mb-1 opacity-1"
    for(let i=0;i+''<this.value2;i++){
      this.inputtitle.push({
        placeholder1:"Label "+Number(i+1),
        placeholder2:"Value "+Number(i+1)
      });
    }
    document.querySelector("button[name='donebtn']")?.addEventListener('click',() =>{
      console.log("Create btnfun");
      for(let i=0;i<this.value2;i++){
        let temp1="Label "+Number(i+1);
        const inputElement = document.querySelector(`input[placeholder="${temp1}"]`) as HTMLInputElement;
        let temp2="Value "+Number(i+1);
        const inputElement2 = document.querySelector(`input[placeholder="${temp2}"]`) as HTMLInputElement;
        console.log(inputElement,inputElement2,temp1,temp2);
        if(inputElement?.value!="" && inputElement.value!=null){
          inputElement.style.borderBottom="2px solid black"
          this.Labels[i]=inputElement?.value;
        }
          else{
            inputElement.style.borderBottom="2px solid red";
            this.errmsg2="!! All Fields are Required !!";
            break;
         }
         if(inputElement2.value!="" && inputElement2.value!=null){
           this.values[i]=inputElement2.value;
           let sum = 0;
           this.values.forEach((el:number) => sum +=Number(el));
           console.log(sum,Number(this.value2),i);
           inputElement2.style.borderBottom="2px solid black"
           if(sum==100 && i==Number(this.value2-1)){
           this.errmsg2="No Errors !"
            inputElement2.style.borderBottom="2px solid black";
           this.modalclose="modal"
           let a=document.querySelector("a[name='piea']") as HTMLAnchorElement;
           a.href="#k";
           let btnname=document.querySelector("button[name='donebtn']") as HTMLButtonElement;
           btnname.innerHTML="Create";
           document.querySelectorAll("input").forEach((ele:any)=>{
            let inputsall=ele as HTMLInputElement;
            inputsall.setAttribute("disabled","true");
           });
           this.createpiechart="Loading ..."
           this.btndisable="true";
            const element = document.querySelectorAll('.maindiv h2 .animate1');
            console.log(element);
            element.forEach((element) => {
              (element as HTMLElement).classList.add('animate');
            });
            btnname.addEventListener('click',()=>{
              this.transferpiechartdata();
            })
           }
           else{
            this.errmsg2="Sum of Values needs to be 100 !"
           }
         }
         else{
          inputElement2.style.borderBottom="2px solid red";
          this.errmsg2="!! All Fields are Required !!";
          break;
         }
      }
  });
  }
else{
  this.value2=null;
  this.opacity2="mt-3 mb-1 opacity-0";
  this.inputtitle=[];
}
}
transfertabledata(){
  console.log(this.rowlen,this.collen,this.headers,this.rows)
  this.service.initialize(this.rowlen,this.collen,this.headers,this.rows);
  setTimeout(()=>this.routes.navigateByUrl('table'),5000);
}
transferpiechartdata(){
  console.log(this.Labels,this.values);
  this.service.initialize2(this.value1,this.Labels,this.values);
  setTimeout(()=>this.routes.navigateByUrl('piechart'),5000);
}
reload(){
  location.reload();
}
}
