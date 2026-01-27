const mapHandler = () => {
    const mapEl = document.querySelector('#mapHandler');
    if (!mapEl) return;

    const lat = parseFloat(mapEl.dataset.lat);
    const lng = parseFloat(mapEl.dataset.lng);
    const pinIcon = mapEl.dataset.pin;
    const zoom = parseFloat(mapEl.dataset.zoom) || 14;

    const map = new google.maps.Map(mapEl, {
        center: { lat, lng },
        zoom,
        styles: [
            {
                elementType: 'geometry',
                stylers: [{ color: '#f5f5f5' }],
            },
            {
                elementType: 'labels.icon',
                stylers: [{ visibility: 'off' }],
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{ color: '#616161' }],
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#f5f5f5' }],
            },
            {
                featureType: 'administrative',
                elementType: 'geometry',
                stylers: [{ visibility: 'off' }],
            },
            {
                featureType: 'administrative.land_parcel',
                stylers: [{ visibility: 'off' }],
            },
            {
                featureType: 'poi',
                stylers: [{ visibility: 'off' }],
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#ffffff' }],
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#dcdcdc' }],
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9e9e9e' }],
            },
            {
                featureType: 'transit',
                stylers: [{ visibility: 'off' }],
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#e0e0e0' }],
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9e9e9e' }],
            },
        ],
    });

    new google.maps.Marker({
        position: { lat, lng },
        map,
        icon: pinIcon,
    });
};
window.mapHandler = mapHandler;
