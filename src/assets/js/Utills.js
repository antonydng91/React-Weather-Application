



export  const Utilities ={
    deepCopy:function(obj){
        return (JSON.parse(JSON.stringify(obj))) //date obkect and function not allowed
    }
}
