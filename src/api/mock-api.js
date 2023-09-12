// Simulated API functions

export function initializeLocalStorage() {
    const currentDate = new Date();
    const timeSlots =  ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    const initialData = {}

    for (let i = 0; i < 5; i++) {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + i);
        const dateString = date.toISOString().split('T')[0];
        initialData[dateString] = timeSlots;
    }
    localStorage.setItem("bookingData", JSON.stringify(initialData));
}


// Function to simulate fetching available times for a given date
export function fetchAPI(date) {
    const rawData = localStorage.getItem("bookingData");
    const bookingData = JSON.parse(rawData);
    return new Promise((resolve) => {
        setTimeout(() => {
            const availableTimes = bookingData ? bookingData[date] : []; // Failing here
            resolve(availableTimes);
        }, 600);
    });
}

// Function to simulate submitting booking form data
export function submitAPI(formData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const success = Math.random() < 1; // Simulate 80% success rate
            if (success) {
                const rawData = localStorage.getItem("bookingData");
                const bookingData = JSON.parse(rawData);
                const { resDate, resTime } = formData;
                bookingData[resDate] = bookingData[resDate].filter(
                    (times) => times !== resTime
                );
                localStorage.setItem("bookingData", JSON.stringify(bookingData)); // update object to contain filtered array
            }
            resolve(success);
        }, 600); // Simulated delay of 1 second
    });
}
