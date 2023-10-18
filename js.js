function add(){
    let num1=Number(document.getElementById("saran").value);
    var num2=Number(document.getElementById("sunil").value);
    var add = num1+num2;
    
    document.getElementById("somename").innerHTML=add;
    
}

function sub(){
    let num1=Number(document.getElementById("saran").value);
    var num2=Number(document.getElementById("sunil").value);
    var sub = num1-num2;
    
    document.getElementById("somename").innerHTML=sub;
}

    function mul(){
        let num1=Number(document.getElementById("saran").value);
        var num2=Number(document.getElementById("sunil").value);
        var mul = num1*num2;
        
        document.getElementById("somename").innerHTML=mul;
    }

        function div(){
            let num1=Number(document.getElementById("saran").value);
            var num2=Number(document.getElementById("sunil").value);
            var div = num1/num2;
            
            document.getElementById("somename").innerHTML=div;
        }

            function aaa() {
                let num1=Number(document.getElementById("16").value);
                var num2=Number(document.getElementById("12").value);
                if(num1>num2){
                    document.getElementById("if").innerHTML="true";
                }
                else{
                    document.getElementById("if").innerHTML="false";
                     }
            }