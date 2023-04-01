class LeafletMap {
    constructor(_config, _data) {
        this.config = {
            parentElement: _config.parentElement,
        };

        this.data = _data;
        this.radiusSize = 5;

        this.serviceCategories = {
            "animal": "animal",
            "trash": "trash",
            "pest": "pests",
            "school": "school",
            "vehicle": "vehicle",
            "public_amenities": "public amenities",
            "streets": "streets",
            "hotel": "hotel",
            "building": "building",
            "construction": "construction",
            "food": "food",
            "parks": "parks",
            "parking": "parking",
            "others": "others"
        };

        // TODO add others too
        this.respondingAgency = {
            "Cin Water Works": "Cin Water Works",
            "Cinc Building Dept": "Cinc Building Dept",
            "Cinc Health Dept": "Cinc Health Dept",
            "Cincinnati Recreation": "Cincinnati Recreation",
            "City Manager's Office": "City Manager's Office",
            "Community Development": "Community Development",
            "Dept of Trans and Eng": "Dept of Trans and Eng",
            "Enterprise Services": "Enterprise Services",
            "Fire Department": "Fire Department",
            "Fire Dept": "Fire Dept",
            "Law Department": "Law Department",
            "Metropolitan Sewer": "Metropolitan Sewer",
            "Park Department": "Park Department",
            "Police Department": "Police Department",
            "Public Services": "Public Services",
            "Regional Computer Center": "Regional Computer Center",
            "Treasury Department": "Treasury Department"
        };

        this.whichScale = "daysElapsed";

        this.colorScale = d3.scaleOrdinal()
            .domain(Object.keys(this.serviceCategories))
            .range(['#00429d', '#205eab', '#347bb8', '#4998c5', '#61b5d0', '#81d2db', '#adede2', '#ffdac4', '#ffb3a7', '#fb8a8c', '#eb6574', '#d5405e', '#b81b4a', '#93003a']);

        // time elapsed color scale
        this.colorScale_dayElapsed = d3.scaleLinear()
            .domain([0, 365])
            .range(["#79d2a6", "#b32400"]);

        this.colorScale_howFarIntoYear = d3.scaleLinear()
            .domain([0, 365])
            .range(['#53d1ed', '#134854']);

        this.colorScale_respondingAgency = d3.scaleOrdinal()
            .domain(Object.keys(this.respondingAgency))
            .range(['#00429d', '#39519f', '#5460a1', '#6a70a3', '#7e80a5', '#9191a6', '#a3a2a8', '#b5b4a8', '#c6c6a9', '#e5cdb4', '#e9bba8', '#eda99c', '#ef9690', '#f08384', '#f16e79', '#f0566e', '#ef3863']);

        this.serviceNameCategoryMapping = dict_serviceNames;

        this.initVis();
    }

    changeColorMapping() {
        console.log("color mapping changed");
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
            // .data(vis.data) 
            .data(vis.data.filter(function(d) {return !isNaN(d.latitude) && !isNaN(d.longitude);}))
            .join('circle')
            .attr("stroke", "black")
        //Leaflet has to take control of projecting points. Here we are feeding the latitude and longitude coordinates to
        //leaflet so that it can project them on the coordinates of the view. Notice, we have to reverse lat and lon.
        //Finally, the returned conversion produces an x and y point. We have to select the the desired one using .x or .y
            .attr("cx", d => vis.theMap.latLngToLayerPoint([d.latitude, d.longitude]).x)
            .attr("cy", d => vis.theMap.latLngToLayerPoint([d.latitude, d.longitude]).y)
            .attr("r", vis.radiusSize)
            .on('mouseover', function(event, d) {  // function to add mouseover event

                // console.log("style:", d3.select(this).attr("fill"));

                d3.select(this).transition()  // D3 selects the object we have moused over in order to perform operations on it
                    .duration('150')  // how long we are transitioning between the two states (works like keyframes)
                    .attr("fill", "red")  // change the fill
                    .attr('r', 4); //change radius

                // create a tool tip
                d3.select('#tooltip')
                    .style('opacity', 1)
                    .style('z-index', 1000000)
                    // Format number with million and thousand separator
                    .html(`<div class="tooltip-label">Agency: ${d.AGENCY_RESPONSIBLE}, requested_date: ${d.REQUESTED_DATE}</div>`);
            })
            .on('mousemove', (event) => {
                console.log("mousemove!!");
                // position the tooltip
                d3.select('#tooltip')
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY + 10) + 'px');
            })
            .on('mouseleave', function(event, d) {  // function to add mouseover event
                d3.select(this).transition()  // D3 selects the object we have moused over in order to perform operations on it
                    .duration('150') //how long we are transitioning between the two states (works like keyframes)
                    // .attr("fill", "steelblue")  // change the fill
                    .attr("fill", vis.getFillColor(d, vis))  // change the fill
                    .attr('r', vis.radiusSize + 1);  // change radius  TODO check why +1

                d3.select('#tooltip').style('opacity', 0);  // turn off the tooltip
            });


        //handler here for updating the map, as you zoom in and out
        vis.theMap.on("zoomend", function(){
            vis.updateVis();
        });

        // set x, y, color initially
        vis.updateVis();
    }

    getFillColor(d, vis) {

        if (vis.whichScale === "daysElapsed") {
            const startDate = new Date("2022-01-01");
            const requestedDate = new Date(d.REQUESTED_DATETIME);
            const updatedDate = new Date(d.UPDATED_DATETIME);

            if (requestedDate instanceof Date && !isNaN(requestedDate.valueOf()) &&
                updatedDate instanceof Date && !isNaN(updatedDate.valueOf())) {

                const daysElapsed = Math.round((updatedDate - requestedDate)
                    / (1000 * 60 * 60 * 24));

                console.log("days elapsed:", daysElapsed);
                const clr = vis.colorScale_dayElapsed(daysElapsed);

                return clr;
            } else {
                // no date info; return invalid color
                return '#170b02';
            }
        } else if (vis.whichScale === "serviceName") {
            // return vis.colorScale(vis.serviceNamesMapping(d.SERVICE_NAME));
            console.log("service_name:", d.SERVICE_NAME);
            let category;

            let st = d.SERVICE_NAME.replace(/^"+/, "").replace(/"+$/, "");

            if (!st) {
                category = "others";
            } else {
                // extra step to map, since there are a lot of service names in data file
                category = vis.serviceNameCategoryMapping[st];

                // TODO check if truthy check okay, or just check for "undefined" ?
                if (!category) category = "others";  // TODO needed ?
            }

            let catColor = vis.colorScale(category);
            console.log("catcolor:", catColor);

            return catColor;
        } else if (vis.whichScale === "respondingAgency") {
            let category;

            let respondingAgency = d.AGENCY_RESPONSIBLE;

            if (!respondingAgency) {
                return "black";
                // category = "others";
            }

            return vis.colorScale_respondingAgency(respondingAgency);
        } else if (vis.whichScale === "whenCallPlaced") {

            const startDate = new Date("2022-01-01");
            const requestedDate = new Date(d.REQUESTED_DATETIME);
            // const updatedDate = new Date(d.UPDATED_DATETIME);

            if (requestedDate instanceof Date && !isNaN(requestedDate.valueOf())) {

                const daysElapsed = Math.round((requestedDate - startDate)
                    / (1000 * 60 * 60 * 24));

                console.log("how far into year:", daysElapsed);

                if (daysElapsed < 0) return "black";

                const clr = vis.colorScale_howFarIntoYear(daysElapsed);

                return clr;
            } else {
                // no date info; return invalid color
                return '#170b02';
            }
        }
    }

    updateVis() {
        let vis = this;

        //want to see how zoomed in you are?
        // console.log(vis.map.getZoom()); //how zoomed am I

        //want to control the size of the radius to be a certain number of meters?
        // vis.radiusSize = 7;

        // if ( vis.theMap.getZoom > 15 ) {
        //   metresPerPixel = 40075016.686 * Math.abs(Math.cos(map.getCenter().lat * Math.PI/180)) / Math.pow(2, map.getZoom()+8);
        //   desiredMetersForPoint = 100; //or the uncertainty measure... =)
        //   radiusSize = desiredMetersForPoint / metresPerPixel;
        // }

        //redraw based on new zoom- need to recalculate on-screen position
        vis.Dots
            .attr("cx", d => vis.theMap.latLngToLayerPoint([d.latitude,d.longitude]).x)
            .attr("cy", d => vis.theMap.latLngToLayerPoint([d.latitude,d.longitude]).y)
            .attr("r", vis.radiusSize)
            .attr("fill", d => vis.getFillColor(d, vis));

    }

}
