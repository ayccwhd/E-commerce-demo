const unitPrice = (price,prefix="",postfix="")=>{
    return prefix+price.toString()+'.00'+postfix;
}
export default unitPrice