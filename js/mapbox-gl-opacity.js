const defaultOptions = {
    baseLayers: null,
    overLayers: null,
    opacityControl: false
};

class OpacityControl {
    constructor(options) {
        this._baseLayersOption = options.baseLayers || defaultOptions.baseLayers;
        this._overLayersOption = options.overLayers || defaultOptions.overLayers;
        this._opacityControlOption = options.opacityControl || defaultOptions.opacityControl;
    }

    _radioButtonControlAdd(layerId) {
        const radioButton = document.createElement('input');
        radioButton.setAttribute('type', 'radio');
        radioButton.id = layerId;
        if (layerId === Object.keys(this._baseLayersOption)[0]) {
            radioButton.checked = true;
            this._map.setLayoutProperty(layerId, 'visibility', 'visible');
        } else {
            this._map.setLayoutProperty(layerId, 'visibility', 'none');
        }
        this._container.appendChild(radioButton);

        radioButton.addEventListener('change', (event) => {
            event.target.checked = true;
            this._map.setLayoutProperty(layerId, 'visibility', 'visible');
            // 選択レイヤ以外非表示
            Object.keys(this._baseLayersOption).forEach((layer) => {
                if (layer !== event.target.id) {
                    document.getElementById(layer).checked = false;
                    this._map.setLayoutProperty(layer, 'visibility', 'none');
                }
            });
        });

        const layerName = document.createElement('span');
        layerName.appendChild(document.createTextNode(this._baseLayersOption[layerId]));
        this._container.appendChild(layerName);
    }

    _checkBoxControlAdd(layerId) {
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.id = layerId;
        if (layerId.substr(0,3)=="tav") {
        	checkBox.checked = true
        	this._map.setLayoutProperty(layerId, 'visibility', 'visible');
        } else {
        	checkBox.checked = false
        	this._map.setLayoutProperty(layerId, 'visibility', 'none');
        }
        this._container.appendChild(checkBox);


        checkBox.addEventListener('change', (event) => {
            const ckFlag = event.target.checked;
            if (ckFlag) {
                this._map.setLayoutProperty(layerId, 'visibility', 'visible');
            } else {
                this._map.setLayoutProperty(layerId, 'visibility', 'none');
            }
        });
        
        const layerName = document.createElement('span');
        layerName.appendChild(document.createTextNode(this._overLayersOption[layerId]));
        this._container.appendChild(layerName);
    }

    _rangeControlAdd(layerId) {
        const range = document.createElement('input');
        range.type = 'range';
        range.min = 0;
        range.max = 100;
        range.value = 100;
        this._container.appendChild(range);


        range.addEventListener('input', (event) => {
            const rgValue = event.target.value;

            this._map.setPaintProperty(layerId, 'raster-opacity', Number(rgValue / 100));
        });

    }


    _opacityControlAdd() {

        this._container = document.createElement('div');
        this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
        this._container.id = 'opacity-control';


        if (this._baseLayersOption !== null) {
            Object.keys(this._baseLayersOption).forEach((layer) => {
                const layerId = layer;
                const br = document.createElement('br');

                this._radioButtonControlAdd(layerId);
                this._container.appendChild(br);
            });
        }


        if (this._baseLayersOption !== null && this._overLayersOption !== null) {
            const hr = document.createElement('hr');
            this._container.appendChild(hr);
        }

        if (this._overLayersOption !== null) {
            Object.keys(this._overLayersOption).forEach((layer) => {
                const layerId = layer;
                const br = document.createElement('br');

                this._checkBoxControlAdd(layerId);
                this._container.appendChild(br);

                if (this._opacityControlOption) {
                    this._rangeControlAdd(layerId);
                    this._container.appendChild(br);
                }
            });
        }
    }

    onAdd(map) {
        this._map = map;

        this._opacityControlAdd();
        return this._container;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}
