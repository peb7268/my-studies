<!DOCTYPE html>
<html>
<!--

  Created using /
  Source can be edited via /okover/edit

-->
<head>
<meta charset=utf-8 />
<title>JS Bin</title>
<!--[if IE]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<style>
  article, aside, figure, footer, header, hgroup, 
  menu, nav, section { display: block; }
</style>
</head>
<body>
  
<script>

this.name = 'Paul';
var sayHello = function()
{
  
  if(this.name) {
    alert(this.name + " says hello");  
  } else {  
    alert('this.name is undefined in this scope');
  }
}
 
sayHello();
    
var rufus = {
    name: "Rufus"
}
rufus.sayHello = sayHello;
 
var sabby = {
    name: "Sabby"
}
sabby.sayHello = sayHello;
 
// invoke sayHello from the objects
rufus.sayHello();
sabby.sayHello();
</script>
</body>
</html>