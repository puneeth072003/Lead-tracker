const btnEl=document.getElementById("btn-el")
const ipEl=document.getElementById("input-el");
let txtEl=document.getElementById("txt-el")
let myLeads=[]

btnEl.addEventListener("click",function(){
   myLeads.push(ipEl.value)
   ipEl.value=""
   renderlst()
})


function renderlst(){
    let list=""
    for(let i=0;i<myLeads.length;i++){
        list  +=`
        <li>
            <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]} </a>
        </li>`
        
    }
    txtEl.innerHTML= list
}