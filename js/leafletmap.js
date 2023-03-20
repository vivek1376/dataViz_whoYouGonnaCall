class LeafletMap {
    constructor(_config, _data) {
        this.config = {
            parentElement: _config.parentElement,
        }
        this.data = _data;
        this.initVis();
    }


    initVis() {
        let vis = this;

        vis.stUrl = 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}';
        vis.stAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

        vis.base_layer = L.tileLayer(vis.stUrl, {
            // id: 'esri-image',
            attribution: vis.stAttr,
            ext: 'png'
        });

        vis.theMap = L.map('my-map', {
            center: [39.1031, -84.5120],
            zoom: 7,
            layers: [vis.base_layer]
        });

        //initialize svg for d3 to add to map
        L.svg({clickable:true}).addTo(vis.theMap);  // we have to make the svg layer clickable
        vis.overlay = d3.select(vis.theMap.getPanes().overlayPane);
        vis.svg = vis.overlay.select('svg').attr("pointer-events", "auto");

        vis.Dots = vis.svg.selectAll('circle')
            .data(vis.data) 
            .join('circle')
            .attr("fill", "steelblue") 
            .attr("stroke", "black")
        //Leaflet has to take control of projecting points. Here we are feeding the latitude and longitude coordinates to
        //leaflet so that it can project them on the coordinates of the view. Notice, we have to reverse lat and lon.
        //Finally, the returned conversion produces an x and y point. We have to select the the desired one using .x or .y
        // .attr("cx", d => vis.theMap.latLngToLayerPoint([d.latitude, d.longitude]).x)
            .attr("cx", function(d) {
                let xVal = vis.theMap.latLngToLayerPoint([d.latitude, d.longitude]).x;
                console.log("xval:", xVal);

                return xVal;
            })
            .attr("cy", d => vis.theMap.latLngToLayerPoint([d.latitude, d.longitude]).y)
            .attr("r", 3)
            .on('mouseover', function(event,d) { //function to add mouseover event
                d3.select(this).transition() //D3 selects the object we have moused over in order to perform operations on it
                    .duration('150') //how long we are transitioning between the two states (works like keyframes)
                    .attr("fill", "red") //change the fill
                    .attr('r', 4); //change radius

                //create a tool tip
                d3.select('#tooltip')
                    .style('opacity', 1)
                    .style('z-index', 1000000)
                // Format number with million and thousand separator
                //         .html(`<div class="tooltip-label">City: ${d.city}, population ${d3.format(',')(d.population)}</div>`);
                    .html(`<div class="tooltip-label">Agency: ${d.AGENCY_RESPONSIBLE}, requested_date: ${d.REQUESTED_DATE}</div>`);

            })
            .on('mousemove', (event) => {
                //position the tooltip
                d3.select('#tooltip')
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY + 10) + 'px');
            })
            .on('mouseleave', function() { //function to add mouseover event
                d3.select(this).transition() //D3 selects the object we have moused over in order to perform operations on it
                    .duration('150') //how long we are transitioning between the two states (works like keyframes)
                    .attr("fill", "steelblue") //change the fill
                    .attr('r', 3) //change radius

                d3.select('#tooltip').style('opacity', 0);  // turn off the tooltip
            });


        //handler here for updating the map, as you zoom in and out
        vis.theMap.on("zoomend", function(){
            vis.updateVis();
        });
    }

    updateVis() {
        let vis = this;

        //want to see how zoomed in you are?
        // console.log(vis.map.getZoom()); //how zoomed am I

        //want to control the size of the radius to be a certain number of meters?
        vis.radiusSize = 3;

        // if ( vis.theMap.getZoom > 15 ) {
        //   metresPerPixel = 40075016.686 * Math.abs(Math.cos(map.getCenter().lat * Math.PI/180)) / Math.pow(2, map.getZoom()+8);
        //   desiredMetersForPoint = 100; //or the uncertainty measure... =)
        //   radiusSize = desiredMetersForPoint / metresPerPixel;
        // }

        //redraw based on new zoom- need to recalculate on-screen position
        vis.Dots
            .attr("cx", d => vis.theMap.latLngToLayerPoint([d.latitude,d.longitude]).x)
            .attr("cy", d => vis.theMap.latLngToLayerPoint([d.latitude,d.longitude]).y)
            .attr("r", vis.radiusSize) ;

    }

}
