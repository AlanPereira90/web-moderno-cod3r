{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera) //declaração com var transcende o escopo das {}

function teste(){
    var local = 123
}

teste()
//console.log(local) //var declarada dentro da function, se limita ao escopo da function