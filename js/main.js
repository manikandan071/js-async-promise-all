
function fun4(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let yes="condition pass";
            resolve(yes);
        },3000);
    })
}
function fun3(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let yes="condition pass";
            resolve(yes);
        },3000);
    })
}
function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let yes="condition pass";
            resolve(yes);
        },3000);
    })
}
function fun2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let yes="condition pass";
            resolve(yes);
        },3000);
    })
}

Promise.all([fun2(),fun1(),fun3(),fun4()])
    .then(function(data){
        console.log("success" +" "+ data);
    })
    .catch(function(){
        console.log("error");
    })