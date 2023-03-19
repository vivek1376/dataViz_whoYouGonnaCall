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
    }
}
