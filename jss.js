var oldNumber
var newNumber
var results
var a
function clearScreen(){
    document.getElementById('screen').value=""
}
function lastClear(){
    current = document.getElementById('screen').value/10
    document.getElementById('screen').value=parseInt(current)
}
function buttonClicked(col){

    if(col=='*'){
        oldNumber = document.getElementById('screen').value
        clearScreen()
        a=1
    }else if(col=='/'){
        oldNumber = document.getElementById('screen').value
        clearScreen()
        a=2
    }else if(col=='+'){
        oldNumber = document.getElementById('screen').value
        clearScreen()
        a=3
    }else if(col=='-'){
        oldNumber = document.getElementById('screen').value
        clearScreen()
        a=4
    }
    else{
        document.getElementById('screen').value=document.getElementById('screen').value+col
    }
    
}
function equalsA(){
    newNumber = document.getElementById('screen').value
    if(a==1){
        results= oldNumber*newNumber
        document.getElementById('screen').value=results
    }else if(a==2){
        results= oldNumber/newNumber
        document.getElementById('screen').value=results
    }else if(a==3){
        results= parseFloat(oldNumber) + parseFloat(newNumber)
        document.getElementById('screen').value=results
    }else if(a==4){
        results= oldNumber-newNumber
        document.getElementById('screen').value=results
    }else{
        document.getElementById('screen').value=newNumber
    }
}