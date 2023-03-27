document.addEventListener("DOMContentLoaded", function() {
    d3.tsv('../data/cincy_311_2022.cleaned.chunk.tsv')
    // d3.tsv('../data/Cincy311_2022_final.chunk.tsv')
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
            var leafletMap = new LeafletMap({ parentElement: '#my-map'}, data);

            document.querySelector('button.calltype').addEventListener("click", function (ev) {
                console.log("button clicked: ", ev);
                leafletMap.changeColorMapping("calltype");
            });

            document.querySelector('button.processingtype').addEventListener("click", function (ev) {
                console.log("button clicked: ", ev);
                leafletMap.changeColorMapping("calltype");
            });

            document.querySelector('button.calldate').addEventListener("click", function (ev) {
                console.log("button clicked: ", ev);
                leafletMap.changeColorMapping("calltype");
            });

            document.querySelector('button.agency').addEventListener("click", function (ev) {
                console.log("button clicked: ", ev);
                leafletMap.changeColorMapping("calltype");
            });

        })
        .catch(error => console.error(error));

});
