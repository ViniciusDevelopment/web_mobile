
    function updateValue(value) {
        document.getElementById('displayValue').textContent = value
    }

    function funcao1()
    {
        alert("Minha função");
        $("#mensagem").html("Area de mensagem");
        $(".btn-danger").html("Executar");
    }

    function funcao2()
    {
        $(".btn-danger").html("Executado");
        $("#mensagem").empty();
        var alunos = ['Aluno 01', 'Aluno 02', 'Aluno 03', 'Aluno 04', 'Aluno 05'];
        $.each(alunos, function(index, value){
            $("#mensagem").append(value + "<br>");
        });
        // $("#mensagem").html("Mensagem alterada");
    }