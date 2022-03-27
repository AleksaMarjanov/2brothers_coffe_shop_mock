const buttonaddon = document.querySelector('#button-addon2')

const email = () => {
    alert('Check your email/junk you should have received a coupon')
};

const apply = () => {
    alert('We will get back to you as soon as possible')
};

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxla3NhbWFyamFub3YiLCJhIjoiY2wxNzg4OWdnNGNsdTNjcnB0eTUyaTFpZyJ9.Gb0b3LdcSTevZuB-w1ipCA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [
    21.2982868161137,
    45.11944825
  ],
zoom: 18, 
});

