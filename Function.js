console.log("-----------Function-------------")
/* To avoide repeational same code all over place
   We don't need to write a many line of code
------Function--------
  ---with arguments
  ---without arguments
  ---with return 
  ---without return */
  
  function add(){
  a=10;
  b=20;
  c=a+b;                           // without arguments
  console.log(c)
  };
  add()
  
  function sub(a,b){
	  c=a-b;                       // with arguments
	  console.log(c)
  };
  sub(10,5);
  
 
 function wrt(a,b){
	  return a-b                   //with return type
  };
  //let wrtn=wrt(5,10);
  console.log(wrt(13,9))
  
  
  function add(a,b){
	  let ad=a+b;
	  return{
		  sub:function(c){
			  let su=ad-c;
			  return{
				  mul:function(d){           // function with return type
				  let mu=su*d;
				  return mu
				  }
			  }
		  }
	  }
  };	  
  console.log(add(2,3).sub(2).mul(10));
  
    function subr(a,b){
	  c=a-b;
	  console.log(c)             //without return type
  };
  let subra= subr(25,5)
  console.log(subra);

  // Anonous function

  console.log("------Anonous function--------")

  let aj=function(a,b){
    return a*b
  }
  console.log(aj(10,2))
  
  //  Arrow_Function  
  console.log("-------arrow-------");  //  It's provide more accurate way to write function , Arrow funtion are anomus function
  
  let ad = (a,b)=>{
	  return a+b            // arrgument
  };
  console.log(ad(10,2))

