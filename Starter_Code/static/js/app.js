//use D3 fetch to read json file
d3.json("samples.json").then((importedData) {
    //console.log(bacteriaData);
    // let data = bacteriaData;
    ///use d3 to 
    //sort the data array using the 'sample_values' value; for descending order 'b-a'
    // data.sort(function(a, b) {
    //     return parseFloat(b.sample_values) - parseFloat(a.sample_values);
    // });
    
    ///create array 
    const sample_values = Object.values(data.sample_values);
    const otu_labels = Object.values(data.otu_labels);
    const otu_ids = Object.values(data.otu_ids);


    //slice first 10 objects for plotting
    importedData = sample_values.slice(0, 10);
    //Reverse the array due to Plotly's defaults
    data = data.reverse();

    //trace1 bar
    let trace1 = {
        x: data.map(row => row.otu_ids),
        y: data.map(row => row.sample_values),
        text: data.map(row => row.otu_labels),
        type: "bar",
        orientation: "h"
    };
    //horizontal bar
    let chartData = [trace1];
    //Apply the group bar mode to the layout
    let layout = {
        title: "title",
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }
    };
    //render plot to div tag w/id "plot"
    Plotly.newPlot("bar", data, layout);

    //pie 
    function init() {
        let pieChartData = [{
            values: sample_values,
            labels: Object.keys(data.otu_id),
            type: "pie"
        }];
        let pieLayout = {
            height: 600,
            width: 800
        };
        Plotly.newPlot('pie', pieChartData, pieLayout);
    }

});

    