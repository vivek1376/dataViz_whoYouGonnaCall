document.addEventListener("DOMContentLoaded", function() {
    d3.tsv('../data/Cincy311_2022_final.test.tsv')
        .then(data => {
            console.log(data[0]);
            console.log(data.length);
            data.forEach(d => {
                // console.log(d);
                d.latitude = +d.LATITUDE;  // make sure these are not strings
                d.longitude = +d.LONGITUDE;  // make sure these are not strings
            });

            // Initialize chart and then show it
            // leafletMap = new LeafletMap({ parentElement: '#my-map'}, data);

            // Initialize chart and then show it
            let leafletMap = new LeafletMap({ parentElement: '#my-map'}, data);
        })
        .catch(error => console.error(error));
});
