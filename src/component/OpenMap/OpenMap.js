import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
import './OpenMap.css';
import { set } from 'd3';

class OpenMap extends Component {
  constructor(props){
    super(props);
    this.map = null;
    this.closeDrawer = this.closeDrawer.bind(this);
    this.placeSelected = this.placeSelected.bind(this);
  }
  componentDidMount() {
      //console.log(d3);
     this.drawOpenLayer();
  }

  drawOpenLayer(){
    let standard = window.L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors</a>'
        });

    let OWM_API_KEY = 'f5ba047355d7218604663c0d1a430082';

    let clouds = window.L.OWM.clouds({opacity: 0.8, legendImagePath: 'maps/NT2.png', appId: OWM_API_KEY});
    let cloudscls = window.L.OWM.cloudsClassic({opacity: 0.5, appId: OWM_API_KEY});
    let precipitation = window.L.OWM.precipitation( {opacity: 0.5, appId: OWM_API_KEY} );
    let precipitationcls = window.L.OWM.precipitationClassic({opacity: 0.5, appId: OWM_API_KEY});
    let rain = window.L.OWM.rain({opacity: 0.5, appId: OWM_API_KEY});
    let raincls = window.L.OWM.rainClassic({opacity: 0.5, appId: OWM_API_KEY});
    let snow = window.L.OWM.snow({opacity: 0.5, appId: OWM_API_KEY});
    let pressure = window.L.OWM.pressure({opacity: 0.4, appId: OWM_API_KEY});
    let pressurecntr = window.L.OWM.pressureContour({opacity: 0.5, appId: OWM_API_KEY});
    let temp = window.L.OWM.temperature({opacity: 0.5, appId: OWM_API_KEY});
    let wind = window.L.OWM.wind({opacity: 0.5, appId: OWM_API_KEY});

    let city = window.L.OWM.current({intervall: 15, imageLoadingUrl: 'maps/owmloading.gif', lang: "en", minZoom: 5,
    			appId: OWM_API_KEY});
    let station = window.L.OWM.current({type: 'station', intervall: 15, imageLoadingUrl: 'maps/owmloading.gif', lang: "en",
            appId: OWM_API_KEY /* , markerFunction: myOwmMarker, popupFunction: myOwmPopup */ });
    let zoom = this.props.mapDetail.zoom ? this.props.mapDetail.zoom : 10;
    let lat = this.props.cord[0];
    let lon = this.props.cord[1];
    //debugger; 
    this.map = window.L.map('openMap', {
        center: new window.L.LatLng(lat, lon), zoom: zoom,
        layers: [standard]
    });
    this.map.attributionControl.setPrefix("");

    let baseMaps = {
        "OSM Standard": standard
    //	, "ESRI Aerial": esri
    };

    let overlayMaps = {};
    	overlayMaps["Clouds"] = clouds;
    	overlayMaps["Clouds (classic)"] = cloudscls;
    	overlayMaps["Precipitation"] = precipitation;
    	overlayMaps["Precipitation (classic)"] = precipitationcls;
    	overlayMaps["Rain"] = rain;
    	overlayMaps["Rain (classic)"] = raincls;
    	overlayMaps["Snow"] = snow;
    	overlayMaps["Temperature"] = temp;
    	overlayMaps["Wind Speed"] = wind;
    	overlayMaps["Pressure"] = pressure;
    	overlayMaps["Pressure Contour"] = pressurecntr;
    	overlayMaps["Cities (min Zoom 5)"] = city;
    	overlayMaps["Stations (min Zoom 7)"] = station;
    	//overlayMaps[getI18n('windrose', localLang)] = windrose;

    let layerControl = window.L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(this.map);
    //this.map.addControl(new window.L.Control.Permalink({layers: layerControl, useAnchor: false, position: 'bottomright'}));
     //debugger;
     // patch layerControl to add some titles
     	let patch = window.L.DomUtil.create('div', 'owm-layercontrol-header');
     	patch.innerHTML = 'TileLayers';
     	layerControl._form.children[2].parentNode.insertBefore(patch, layerControl._form.children[2]);
     	patch = window.L.DomUtil.create('div', 'leaflet-control-layers-separator');
     	layerControl._form.children[3].children[0].parentNode.insertBefore(patch, layerControl._form.children[3].children[layerControl._form.children[3].children.length-3]);
     	patch = window.L.DomUtil.create('div', 'owm-layercontrol-header');
     	patch.innerHTML = 'Current Weather';
     	layerControl._form.children[3].children[0].parentNode.insertBefore(patch, layerControl._form.children[3].children[layerControl._form.children[3].children.length-3]);
     	patch = window.L.DomUtil.create('div', 'owm-layercontrol-header');
     	patch.innerHTML = 'Maps';
     	layerControl._form.children[0].parentNode.insertBefore(patch, layerControl._form.children[0]);

      setTimeout(()=>{
        if(this.props.mapDetail.selected){
          let layer =     document.getElementsByClassName("leaflet-control-layers-overlays")[0];
          this.props.mapDetail.selected.split("").forEach(op=>{
            op = parseInt(op,10);
            if(layer.children[op] && layer.children[op].firstElementChild && layer.children[op].firstElementChild.type == "checkbox"){
              layer.children[op].firstElementChild.click();
            }
          })
        }
      },100);
  }

  placeSelected(place){
       let loc = {
        status:"success",
        data:{
            coords : {
                latitude:place.geometry.location.lat(),
                longitude:place.geometry.location.lng()
            }
        }
       }
       
       this.map.setView(new window.L.LatLng(place.geometry.location.lat(), place.geometry.location.lng()), 10);
       this.props.cordchange(loc);
  };

  closeDrawer(){
    this.props.drawerclose();
  }

  render() {
    return (
        <div>
            <div className="cl-mp" onClick={this.closeDrawer}>Close(X)</div>
            <Autocomplete
                 style={{width: '50%'}}
                 onPlaceSelected={this.placeSelected}

             />
             <div id="openMap"></div>     
             <div className="war"><small>Note :  As I'm using free version of <a target="_blank" href="http://openweathermap.org/forecast16">openweather</a> API, weather on map might load slow due ti limited no of request constraint.</small></div>
             
        </div>  
        
    );
  }
}

export default OpenMap;