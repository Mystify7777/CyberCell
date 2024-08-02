const apiKey = 'bc7d1b26f281df06c255668b4332188f';

document.getElementById('search').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeather(city);
    }
});

document.getElementById('city').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('search').click();
    }
});

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (response.ok) {
            const data = await response.json();
            if (data.cod === '404') {
                alert('City not found!');
            } else {
                document.getElementById('weather-table').style.display = 'table';
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temperature').textContent = `${data.main.temp} °C`;
                document.getElementById('description').textContent = `${data.weather[0].description}`;
                document.getElementById('humidity').textContent = `${data.main.humidity}%`;
                document.getElementById('wind-speed').textContent = `${data.wind.speed} m/s`;
                document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;

                const iconCode = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
                const weatherIcon = document.getElementById('weather-icon');
                weatherIcon.src = iconUrl;
                weatherIcon.style.display = 'block';
            }
        } else {
            alert('Failed to fetch weather data.');
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
}
