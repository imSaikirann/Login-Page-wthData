document.querySelector('.button').onclick = function()
{
    var inputEmail = document.querySelector('.Email').value;
    var inputPassword = document.querySelector('.Password').value;

    let email = "abc@gmail.com";
    let password = "12345"

    if(inputEmail == '' && inputPassword == '')
    {
        var wp = document.querySelector('.wp')
        wp.style.color = "red"
    }

    if(inputEmail == email && inputPassword == password)
    {
        setTimeout(function()
        {
            window.open("s.html")
        },3000);
        
    }
    else
    {
        var em = document.querySelector('.Email')
        em.style.border = "1px solid red"
        var pass = document.querySelector('.Password')
        pass.style.border = '1px solid red'

        var wd = document.querySelector('.wd')
        wd.style.color = "red"
    }
}