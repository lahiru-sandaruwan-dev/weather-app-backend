const districts = [
    { name: 'Colombo', lat: 6.9271, lon: 79.8612 },
    { name: 'Gampaha', lat: 7.0873, lon: 80.0148 },
    { name: 'Kalutara', lat: 6.5854, lon: 79.9607 },
    { name: 'Kandy', lat: 7.2906, lon: 80.6337 },
    { name: 'Matale', lat: 7.4675, lon: 80.6234 },
    { name: 'Nuwara Eliya', lat: 6.9497, lon: 80.7891 },
    { name: 'Galle', lat: 6.0535, lon: 80.2210 },
    { name: 'Matara', lat: 5.9480, lon: 80.5353 },
    { name: 'Jaffna', lat: 9.6615, lon: 80.0255 },
    { name: 'Anuradhapura', lat: 8.3140, lon: 80.4037 },
    { name: 'Polonnaruwa', lat: 7.9403, lon: 81.0188 },
    { name: 'Badulla', lat: 6.9934, lon: 81.0550 },
    { name: 'Moneragala', lat: 6.8726, lon: 81.3451 },
    { name: 'Kegalle', lat: 7.2514, lon: 80.3464 },
    { name: 'Kurunegala', lat: 7.4801, lon: 80.3600 },
    { name: 'Vavuniya', lat: 8.7519, lon: 80.4982 },
    { name: 'Kilinochchi', lat: 9.3935, lon: 80.3981 },
    { name: 'Batticaloa', lat: 7.7162, lon: 81.6924 },
    { name: 'Ampara', lat: 7.2875, lon: 81.6739 },
    { name: 'Mannar', lat: 8.9770, lon: 79.9090 },
    { name: 'Mullaitivu', lat: 9.2675, lon: 80.7873 },
    { name: 'Batticaloa', lat: 7.7162, lon: 81.6924 },
    { name: 'Hambanthota', lat: 7.7162, lon: 81.6924 },
    { name: 'Puttalam', lat: 7.7162, lon: 81.6924 },
    { name: 'Ratnapura', lat: 7.7162, lon: 81.6924 },
];

// Function to generate random temperature (in Celsius) within a realistic range (e.g., 0°C to 40°C)
function generateTemperature() {
    return Math.random() * 40;
}
// Function to generate random humidity (in percentage) within a realistic range (e.g., 20% to 90%)
function generateHumidity() {
    return Math.random() * (90 - 20) + 20;
}
// Function to generate random air pressure (in millibars) within a realistic range (e.g., 900mb to 1100mb)
function generateAirPressure() {
    return Math.random() * (1100 - 900) + 900;
}

function generateMockDataPoint(district) {
    return {
        district: district.name,
        temperature: generateTemperature(),
        humidity: generateHumidity(),
        airPressure: generateAirPressure(),
        timestamp: new Date().toISOString()
    };
}

function emitDataPointEveryFiveMinutes() {
    districts.forEach(district => {
        setInterval(() => {
            console.clear();
            const dataPoint = generateMockDataPoint(district);
            console.log(`Weather Station - ${district.name}:`, dataPoint);
        }, 1 * 60 * 1000); // 5 minutes in milliseconds
    });
}

// emitDataPointEveryFiveMinutes();
// let array = []
// array.push(emitDataPointEveryFiveMinutes())

module.exports = emitDataPointEveryFiveMinutes()
