   var example_array = [
    'Fatih',
    'Mehmet',
    'Ergin'
];

var select = document.getElementById("select_option");
for(index in example_array) {
    select.options[select.options.length] = new Option(example_array[index]);
}

    function onFunction()
    {
        var print=document.getElementById("select_option").value
        console.log(print)
        document.getElementById("h1").innerHTML=print
    }   