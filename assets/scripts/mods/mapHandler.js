const initMap = () => {
    const mapEl = document.querySelector('#mapHandler');
    if (!mapEl) return;

    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        console.warn('Google Maps API еще не загружен');
        return;
    }

    const lat = parseFloat(mapEl.dataset.lat);
    const lng = parseFloat(mapEl.dataset.lng);
    const pinIcon = mapEl.dataset.pin;
    const zoom = parseFloat(mapEl.dataset.zoom) || 14;

    const map = new google.maps.Map(mapEl, {
        center: { lat, lng },
        zoom,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#1d2c4d' }] },
            {
                elementType: 'labels.text.fill',
                stylers: [{ color: '#8ec3b9' }],
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#1a3646' }],
            },
            {
                featureType: 'administrative.country',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#4b6878' }],
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#64779e' }],
            },
            {
                featureType: 'administrative.province',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#4b6878' }],
            },
            {
                featureType: 'landscape.man_made',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#334e87' }],
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{ color: '#023e58' }],
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{ color: '#283d6a' }],
            },
            {
                featureType: 'poi',
                stylers: [{ visibility: 'off' }],
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#304a7d' }],
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#98a5be' }],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#2c6675' }],
            },
            {
                featureType: 'transit',
                stylers: [{ visibility: 'off' }],
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#0e1626' }],
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#4e6d70' }],
            },
        ],
    });

    const iconSize = new google.maps.Size(40, 40);

    new google.maps.Marker({
        position: { lat, lng },
        map,
        icon: {
            url: pinIcon,
            scaledSize: iconSize,
        },
    });
};

window.mapHandler = initMap;

document.addEventListener('DOMContentLoaded', () => {
    if (typeof google !== 'undefined' && google.maps) {
        initMap();
    }
});
