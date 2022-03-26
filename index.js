const buttonaddon = document.querySelector('#button-addon2')

const email = () => {
    alert('Check your email/junk you should have received a coupon')
};

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxla3NhbWFyamFub3YiLCJhIjoiY2wxNzg4OWdnNGNsdTNjcnB0eTUyaTFpZyJ9.Gb0b3LdcSTevZuB-w1ipCA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-73.990593,40.740121],
zoom: 18,
});