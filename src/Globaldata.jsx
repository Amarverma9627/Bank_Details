export let Maindata = [

];

export function deposit(input, input2) {
    let submitData = Maindata.map((item)=>{
        if(item.AcNo===input){
            return{...item, InitialAm:Number(item.InitialAm) + Number(input2)}
        }
       return item
    });  
    Maindata = submitData;
}


export function Widthdraw2(input, input2) {
    let submitData = Maindata.map((item)=>{
        if(item.AcNo===input){
            return{...item, InitialAm:Number(item.InitialAm) - Number(input2)}
        }
       return item
    });  
    Maindata = submitData;
}
