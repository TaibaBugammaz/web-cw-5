
function submit(){

    let A= parseInt(document.getElementById("Quizes").value) 
    let B= parseInt(document.getElementById("Midterm").value)
    let C= parseInt(document.getElementById("FinalTest").value)
    let D= parseInt(document.getElementById("Oral").value)

    let total= A+B+C+D

    // if (total){
    //     document.getElementById("total_grades").innerText=total
    //     document.getElementById("final_grade").innerText="A"

    //   }
     if (total>=90){
        document.getElementById("total_grades").innerText=total
        document.getElementById("final_grade").innerText="A"
     }
     else if (total>=80 && total<=89){
        document.getElementById("total_grades").innerText=total
        document.getElementById("final_grade").innerText="B"
     }
     else if (total>=70 && total<=79){
        document.getElementById("total_grades").innerText=total
        document.getElementById("final_grade").innerText="C"
     }
     else if (total>=60 && total<=69){
        document.getElementById("total_grades").innerText=total
        document.getElementById("final_grade").innerText="D"
     }
     else{
        document.getElementById("total_grades").innerText=total
        document.getElementById("final_grade").innerText="F"
     }




}
