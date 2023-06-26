
        function calc(){
            var a=parseInt(document.getElementById("math").value);
            var b=parseInt(document.getElementById("ds").value);
            var c=parseInt(document.getElementById("ade").value);
            var d=parseInt(document.getElementById("co").value);
            var e=parseInt(document.getElementById("java").value);
            var f=parseInt(document.getElementById("c++").value);
            var g=parseInt(document.getElementById("kan").value);
            var h=parseInt(document.getElementById("uh").value);

            var a1=3*marks(a);
            var b1=4*marks(b);
            var c1=4*marks(c);
            var d1=3*marks(d);
            var e1=1*marks(e);
            var f1=1*marks(f);
            var g1=1*marks(g);
            var h1=1*marks(h);

            var z=(a1+b1+c1+d1+e1+f1+g1+h1)/18;
            var result=z.toFixed(2);
            document.getElementById("res").value=parseFloat(result);
        }
        function marks(y)
        {
            if(y>=90)
            return 10;
            else if (y<=89&&y>=80)
            return 9;
            else if (y<=79&&y>=70)
            return 8;
            else if (y<=69&&y>=60)
            return 7;
            else if (y<=59&&y>=50)
            return 6;
            else if (y<=49&&y>=45)
            return 5;
            else if (y<=44&&y>=40)
            return 4;
            else
            return 0; 
        }