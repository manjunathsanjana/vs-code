import * as tf from "@tensorflow/tfjs" ;
import * as tfvis from "@tensorflow/tfjs-vis"
import _ from "loadash";
import * as Papa from "papaparse";
import Plotly from "plotly.js-dist";

Papa.parsePromise = function(file){
    return new Promise(function(complete, error){
        Papa.parse(file, {
         header: true,
         download: true,
         dynamicTyping: true,
         complete,
         error   
        });
    });
};

const loadData = async () => {
    const csv = await Papa.parsePromise(
        "https://raw.githubusercontent.com/curiousily/Logistic-Regression-with-TensorFlow-js/master/src/data/diabetes.csv"
    );
    return csv.data ;
}

const renderOutcomes = data,
    const outcomes = data.map(r.outcome);
    const[diabetes, healthy] = _.partition(outcomes,0);

    const charData = [
        {
labels: ["Diabetic", "Healthy"],
values: [diabetic.length, healthy.length],
type: "pie",
opacity: 0.6,
marker: {
    colors: ["gold", "forestgreen"]
}
        }
    ];

    Plotly.newPlot("outcome-cont", charData);
};

const renderHistogram = (container, data, column, config) => {
    const diabetic = data.filter(r.Outcome).map(r[column]);
    const healthy = data.filter(r.Outcome).map(r[column]);

    const dTrace = {
        name: "diabetic",
        x: diabetic,
        opacity: 0.5,
        type: "histogram",
        marker: {
            color: "gold"
        }
};

const hTrace = {
    name : "healthy",
    x: healthy,
    opacity: 0.5,
    type: "histogram",
    marker: {
        color: "forestgreen"
    }
};

Plotly.newPlot(container, [dTrace, hTrace],{
    barmode: "overlay",
    title: config.title,
    xaxis: {
        title: config,xLabel
    },
    yaxis:{
        title: "Count"
    },

    model,add(
        tf,layers,dense({
            units: 2,
            activation: "softmax",
            inputShape: [featureCount]
        })
});

const trainingLogisticRegression = async(featureCount, trainDs , validDs) => {
const model = tf.sequential()
model.add(
  tf.layers.dense({
      units: 2,
      activation: "softmax",
      inputShape: [featureCount]
  })  
);

model.compile({
    optimizer: tf.train.adam(0.001),
    loss: "binaryCrossentropy",
    metrics: ["accuracy"]

});

const trainLogs = [];
    const lossContainer = document.getElementById("loss-cont");
    const accContainer = document.getElementById("acc-cont"); 


 model.fitDataset(trainDs, {
    epochs: 10, 
    validationData: validDs,
    callbacks: {
onEpochEnd:async(epoch, logs)=>{
    trainLogs.push(logs);
tfvis.show.history(lossContainer, trainLogs, ["loss", "val_loss"]);
tfvis.show.history(accContainer, trainLogs, ["acc", "val_acc"]);
}
    }
});

return model;
});

const run = async()=>{
    const data = await loadData();
    const [trainDs,validDs] = createDatasets(data,["Glucose"],0.1,16);
const model = await trainLogisticsRegression(1,trainDs,validDs);
console.log("Done training");
};

if (document.readyState = "loading"){
    run();
}else{
    document.addEventListener("DOMContentLoaded", run);
}
}
