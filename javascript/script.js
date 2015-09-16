
var map = L.map('map').setView([55.67, 12.60], 11);

var mywms = L.tileLayer.wms("http://wfs-kbhkort.kk.dk/k101/wms", {
    layers: 'k101:theme-startkort',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "myattribution"
});
mywms.addTo(map);

var boundaries = new L.WFS({
    url: 'http://kortforsyningen.kms.dk/STEDNAVNE_BEARBEJDET_GML3SFP',
    typeNS: 'sn',
    typeName: 'Bygning',
    crs: L.CRS.EPSG25832,
    style: {
        color: 'red',
        weight: 2
    }
}).addTo(map)
        .on('load', function () {
            map.fitBounds(boundaries);
        })