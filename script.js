const now = new Date();



const weekday = now.toLocaleDateString(
    "en-US",
    { weekday: "long" }
);

const day = now.getDate();

const month = now.toLocaleDateString(
    "en-US",
    { month: "long" }
);



const weekdayElement =
    document.getElementById("weekday");

const dayElement =
    document.getElementById("day");

const monthElement =
    document.getElementById("month");



weekdayElement.textContent = weekday;

dayElement.textContent = day;

monthElement.textContent = month;