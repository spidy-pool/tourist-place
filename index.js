function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.lat;
                longitude = element.long;

                cases = element.state;
                if (cases == 'Andhra Pradesh') {
                    color = "rgb(141, 69, 191)";
                }
                else if (cases == 'Bihar') {
                    color = "rgb(202, 130, 108)";
                }
                else if (cases == 'Chattisgarh') {
                    color = "rgb(37, 135, 145)";
                }
                else if (cases == 'Goa') {
                    color = "rgb(166, 153, 165)";
                }
                else if (cases == 'Gujarat') {
                    color = "rgb(241, 242, 26)";
                }
                else if (cases == "Chattisgarh") {
                    color = "rgb(8, 242, 247)";
                }
                else if (cases == 'Karnataka') {
                    color = "rgb(255, 100, 100)";
                }
                else {
                    color = `rgb(0, 255, 0)`;
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}

let interval = 100;
setInterval(updateMap, interval); 