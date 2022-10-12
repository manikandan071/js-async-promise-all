
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

async function parent(){
    try{
        await fun2();
        await fun1();
        await fun3();
        await fun4();
        console.log("done");
    }
    catch{
        console.log("error");
    }
}

parent();