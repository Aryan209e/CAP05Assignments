  
        // Add your API keys here
        const openWeatherMapApiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
        // const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

        // Function to fetch weather data for a city
        async function getWeatherData(city) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}&units=metric`);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching weather data:', error);
                return null;
            }
        }

        // Function to display weather details
        function displayWeatherDetails(data) {
            if (data) {
                const weatherDetails = document.getElementById('weatherDetails');
                weatherDetails.innerHTML = `
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Min Temperature: ${data.main.temp_min}°C</p>
                    <p>Max Temperature: ${data.main.temp_max}°C</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                    <p>Clouds: ${data.clouds.all}%</p>
                    <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                `;
            }
        }

        // Function to initialize the Google Map
        
        
        function initMap() {
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 0, lng: 0 },
                zoom: 10
            });
        }
    

        // Event listener for the search button
        const searchButton = document.getElementById('searchButton');
        searchButton.addEventListener('click', async () => {
            const cityInput = document.getElementById('cityInput');
            const city = cityInput.value;
            const weatherData = await getWeatherData(city);
            displayWeatherDetails(weatherData);

            // Uncomment this line to initialize the Google Map
            initMap();
        });
    

        src="https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap"
    
    
     
