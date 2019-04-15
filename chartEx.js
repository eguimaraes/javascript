 <div class="grafico" id="grafico">
          <div style="text-align:center"><span>Selecione um tipo de Grafico:</span><br/>
         <span> <input type="radio" id="tipoGraf"  name="tipoGraf" value="bar" onclick="grafico(this.value)"> Gráfico de Barras</input></span>
         <span> <input type="radio" id="tipoGraf" name="tipoGraf" value="pie" onclick="grafico(this.value)"> Gráfico de Pizza</input></span>
         <span> <input type="radio" id="tipoGraf" name="tipoGraf" value="doughnut" onclick="grafico(this.value)"> Gráfico de Doughnut</input></span>

          </div>
          
          <div>
          <canvas id="myChartbar" style="display:none"></canvas>
          <canvas id="myChartpie" style="display:none"></canvas>
          <canvas id="myChartdoughnut" style="display:none"></canvas>



<script>
function geraGrafico(tipo){
mychartName='myChart'+tipo;
var ctx = document.getElementById(mychartName).getContext('2d');
ctx.innerHTML='';
var myChart='';
myChart = new Chart(ctx, {
    type: tipo,
    data: {
        labels: ['Assigned', 'Open', 'In-Progress', 'Pending', 'Canceled', 'Closed'],
        datasets: [{
            label: '',
            data: [46,23,12,8,9,368],
            backgroundColor: [
                'rgba(255, 255, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: [
                'rgba(255, 255, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
        options: {
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }, 
        position:'bottom'
    },
    
    
     title: {
            display: false,
            text: 'Custom Chart Title'
        }
    
    }
   
});
}

    function grafico(tipo) {
        tipos = ["bar", "pie", "doughnut"]
        geraGrafico('bar');
        geraGrafico('pie');
        geraGrafico('doughnut');
        mychartName = 'myChart' + tipo;

        for (i = 0; i < tipos.length; i++) {

            if (tipos[i] == tipo) {
            

                document.getElementById(mychartName).style.display = "block";
            }

            else {

                document.getElementById( 'myChart'+tipos[i]).style.display = "none";
            }


        }
    }


grafico("bar")

</script>
        </div>

</div>

