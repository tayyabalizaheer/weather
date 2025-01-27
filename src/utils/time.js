export function formatTime(dateString) {
    const date = new Date(dateString);

    // Format to 12-hour time
    const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    };

    const formattedTime = date.toLocaleTimeString('en-US', options);
    return formattedTime
}
export function formatDayDate(dateString) {
    const date = new Date(dateString);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${day}, ${month} ${year}`;
    return formattedDate
}
export function formatDate(dateString) {
    const date = new Date(dateString);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const m_date = date.getDate();
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${day}, ${month} ${m_date}`;
    return formattedDate
}

export function getDay(dateString) {
    const date = new Date(dateString);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${day}`;
    return formattedDate
}


export function isDayOrNight(datetimeString) {
    // Parse the input string
    const date = new Date(datetimeString);

    // Get the hour from the parsed date
    const hour = date.getHours();

    // Determine if it's day or night
    return (hour >= 6 && hour < 18) ? "sun" : "moon";
}