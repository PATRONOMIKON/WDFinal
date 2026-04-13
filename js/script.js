/* =============================================
   CAMPUS LIFE APP — script.js
   ============================================= */

/**
 * showMessage()
 * Displays a welcome message on the home page.
 */
function showMessage() {
  const msgEl = document.getElementById('welcome-message');
  if (!msgEl) return;

  if (msgEl.style.display === 'block') {
    msgEl.style.display = 'none';
    return;
  }

  msgEl.textContent =
    '🎓 Welcome to Campus Life App! Explore events, dining, and more — all in one place. Have a great semester!';
  msgEl.style.display = 'block';
}

/**
 * getWeather()
 * Fetches current weather for Hackettstown, NJ
 * using the Open-Meteo API and displays temperature in °C.
 */
async function getWeather() {
  const resultEl  = document.getElementById('weather-result');
  const btnEl     = document.getElementById('weather-btn');
  if (!resultEl) return;

  // Show loading state
  resultEl.style.display = 'block';
  resultEl.innerHTML = `
    <div class="d-flex align-items-center justify-content-center gap-2" style="color:var(--text-muted); font-size:0.9rem;">
      <div class="spinner-border spinner-border-sm text-warning" role="status" aria-hidden="true"></div>
      Fetching weather data…
    </div>`;
  if (btnEl) btnEl.disabled = true;

  // Hackettstown NJ: lat 40.8512, lon -74.8329
  const url =
    'https://api.open-meteo.com/v1/forecast' +
    '?latitude=40.8512&longitude=-74.8329' +
    '&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code' +
    '&temperature_unit=celsius' +
    '&timezone=America%2FNew_York';

  try {
    const res  = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    const data = await res.json();

    const curr    = data.current;
    const temp    = curr.temperature_2m;
    const humidity= curr.relative_humidity_2m;
    const wind    = curr.wind_speed_10m;
    const wCode   = curr.weather_code;

    const weatherDesc = decodeWeatherCode(wCode);
    const weatherIcon = getWeatherIcon(wCode);

    resultEl.innerHTML = `
      <div class="mb-1" style="font-size:2.8rem;">${weatherIcon}</div>
      <div class="temp">${temp}°C</div>
      <div class="weather-label">${weatherDesc}</div>
      <div class="weather-detail mt-2">
        💧 Humidity: ${humidity}% &nbsp;|&nbsp; 💨 Wind: ${wind} km/h
      </div>`;

  } catch (err) {
    resultEl.innerHTML = `
      <div style="color:#ff6b6b; font-size:0.9rem;">
        ⚠️ Unable to load weather data.<br>
        <span style="color:var(--text-muted);font-size:0.8rem;">${err.message}</span>
      </div>`;
  } finally {
    if (btnEl) btnEl.disabled = false;
  }
}

/** Map WMO weather codes to readable descriptions */
function decodeWeatherCode(code) {
  const map = {
    0: 'Clear Sky', 1: 'Mainly Clear', 2: 'Partly Cloudy', 3: 'Overcast',
    45: 'Foggy', 48: 'Icy Fog',
    51: 'Light Drizzle', 53: 'Drizzle', 55: 'Heavy Drizzle',
    61: 'Light Rain', 63: 'Rain', 65: 'Heavy Rain',
    71: 'Light Snow', 73: 'Snow', 75: 'Heavy Snow', 77: 'Snow Grains',
    80: 'Rain Showers', 81: 'Showers', 82: 'Violent Showers',
    85: 'Snow Showers', 86: 'Heavy Snow Showers',
    95: 'Thunderstorm', 96: 'Thunderstorm w/ Hail', 99: 'Severe Thunderstorm'
  };
  return map[code] || 'Unknown';
}

function getWeatherIcon(code) {
  if (code === 0 || code === 1) return '☀️';
  if (code === 2 || code === 3) return '⛅';
  if (code >= 45 && code <= 48) return '🌫️';
  if (code >= 51 && code <= 55) return '🌦️';
  if (code >= 61 && code <= 65) return '🌧️';
  if (code >= 71 && code <= 77) return '❄️';
  if (code >= 80 && code <= 82) return '🌧️';
  if (code >= 85 && code <= 86) return '🌨️';
  if (code >= 95) return '⛈️';
  return '🌡️';
}

/**
 * registerEvent(eventName)
 * Shows a registration confirmation for the given event.
 */
function registerEvent(eventName) {
  // Find all register message elements for this event
  const allMsgs = document.querySelectorAll('.register-msg');
  allMsgs.forEach(el => {
    if (el.getAttribute('data-event') !== eventName) {
      el.style.display = 'none';
    }
  });

  const msgEl = document.querySelector(`.register-msg[data-event="${eventName}"]`);
  if (!msgEl) return;

  if (msgEl.style.display === 'block') {
    msgEl.style.display = 'none';
    return;
  }

  msgEl.textContent = `✅ You registered for ${eventName}!`;
  msgEl.style.display = 'block';
}

/**
 * toggleDining()
 * Shows or hides the dining options list.
 */
function toggleDining() {
  const listEl = document.getElementById('dining-list');
  const btnEl  = document.getElementById('dining-btn');
  if (!listEl) return;

  const isHidden = listEl.style.display === 'none' || listEl.style.display === '';

  if (isHidden) {
    listEl.style.display = 'block';
    if (btnEl) btnEl.textContent = 'Hide Dining Options';
  } else {
    listEl.style.display = 'none';
    if (btnEl) btnEl.textContent = 'Show Dining Options';
  }
}

/* ── Active Nav Link ──────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.navbar-nav .nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (
      href === currentPage ||
      (currentPage === '' && href === 'index.html') ||
      (currentPage === 'index.html' && href === 'index.html')
    ) {
      link.classList.add('active');
    }
  });
});
