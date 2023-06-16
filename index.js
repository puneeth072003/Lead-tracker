const btnEl=document.getElementById("btn-el")
const ipEl=document.getElementById("input-el")
let txtEl=document.getElementById("txt-el")
let delEl=document.getElementById("del-el")
let savEl=document.getElementById("sav-el")
let myLeads=[]

const lls=(JSON.parse(localStorage.getItem("lead")))
if(lls){
    myLeads=lls
    renderlst(myLeads)
}

savEl.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow: true}, function(){
        let lnk=tabs[0].url
        myLeads.push(lnk)
        myL= JSON.stringify(myLeads)
        localStorage.setItem("lead",myL)
        renderlst(myLeads)
        
    })
})

delEl.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    renderlst(myLeads)
})

btnEl.addEventListener("click",function(){
   myLeads.push(ipEl.value)
   ipEl.value=""
   myL= JSON.stringify(myLeads)
   localStorage.setItem("lead",myL)
   renderlst(myLeads)
})


function renderlst(arr){
    let list=""
    for(let i=0;i<arr.length;i++){
        list  +=`
            <li>
                <a target='_blank' href='${arr[i]}'> ${arr[i]} </a>
            </li>`
        
    }
    txtEl.innerHTML= list
}