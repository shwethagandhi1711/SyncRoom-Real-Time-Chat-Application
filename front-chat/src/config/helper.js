// Exporting a named function called timeAgo
// This function converts a given date into a "time ago" format
// Example: "5 minutes ago", "2 days ago"
export function timeAgo(date) {

  // Create a Date object for current date and time
  // This represents "now"
  const now = new Date();

  // Convert the given input date string into a Date object
  // Example input: "2023-12-01T14:00:00Z"
  const past = new Date(date);

  // Find the difference between now and past in milliseconds
  // Then convert milliseconds → seconds by dividing by 1000
  // Math.floor removes decimal values
  const secondsAgo = Math.floor((now - past) / 1000);


  // CONDITION 1: If difference is less than 60 seconds
  // Return seconds
  // Example: "45 seconds ago"
  if (secondsAgo < 60)
    return `${secondsAgo} seconds ago`;


  // Convert seconds → minutes
  // 1 minute = 60 seconds
  const minutesAgo = Math.floor(secondsAgo / 60);

  // CONDITION 2: If less than 60 minutes
  // Return minutes
  // Example: "10 minutes ago"
  if (minutesAgo < 60)
    return `${minutesAgo} minutes ago`;


  // Convert minutes → hours
  // 1 hour = 60 minutes
  const hoursAgo = Math.floor(minutesAgo / 60);

  // CONDITION 3: If less than 24 hours
  // Return hours
  // Example: "5 hours ago"
  if (hoursAgo < 24)
    return `${hoursAgo} hours ago`;


  // Convert hours → days
  // 1 day = 24 hours
  const daysAgo = Math.floor(hoursAgo / 24);

  // CONDITION 4: If less than 30 days
  // Return days
  // Example: "7 days ago"
  if (daysAgo < 30)
    return `${daysAgo} days ago`;


  // Convert days → months (approximation)
  // 1 month ≈ 30 days
  const monthsAgo = Math.floor(daysAgo / 30);

  // CONDITION 5: If less than 12 months
  // Return months
  // Example: "3 months ago"
  if (monthsAgo < 12)
    return `${monthsAgo} months ago`;


  // Convert months → years
  // 1 year = 12 months
  const yearsAgo = Math.floor(monthsAgo / 12);

  // Final condition: return years
  // Example: "2 years ago"
  return `${yearsAgo} years ago`;
}



// Example usage:

// Calling the function with a date string
// This will print how long ago that date was from current time
console.log(timeAgo("2023-12-01T14:00:00Z"));

// Example output:
// "2 years ago"
// OR
// "10 months ago"
// Output depends on current date