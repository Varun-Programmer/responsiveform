	function aa()
		{
			var msg="";
			var x=document.getElementById("A").value;
			var y=document.getElementById("B").value;
			var z=document.getElementById("C").value;
			var p=document.getElementById("D").value;
			var q=document.getElementById("E").value;
			if(x=="")
			{
				msg="Please enter your name\n";
			}
			if(y=="")
			{
				msg=msg+"Please enter your company\n";
			}
			if(z=="")
			{
				msg=msg+"Please enter your e-mail\n";
			}
			if(p=="")
			{
				msg=msg+"Please enter your phone\n";
			}
			if(q=="")
			{
				msg=msg+"Please enter your message\n";
			}
			if(msg!="")
			{
				alert(msg);
			}
			if(p.length<10 && p!="")
			{
				alert("Please enter correct phone no.");
			}
			if(p.length>10 && p!="")
			{
				alert("Please enter correct phone no.");
			}
			if(msg=="" && p.length==10)
			{
				alert("Thanks for submission");
			}
		}
			function cc()
			{
				document.getElementById("A").style.border="5px solid red";
			}
			function dd()
			{
				document.getElementById("A").style.border="2px solid black";
			}
			function ee()
			{
				document.getElementById("B").style.border="5px solid red";
			}
			function ff()
			{
				document.getElementById("B").style.border="2px solid black";
			}
			function gg()
			{
				document.getElementById("C").style.border="5px solid red";
			}
			function hh()
			{
				document.getElementById("C").style.border="2px solid black";
			}
			function ii()
			{
				document.getElementById("D").style.border="5px solid red";
			}
			function jj()
			{
				document.getElementById("D").style.border="2px solid black";
			}
			function kk()
			{
				document.getElementById("E").style.border="5px solid red";
			}
			function ll()
			{
				document.getElementById("E").style.border="2px solid black";
			}