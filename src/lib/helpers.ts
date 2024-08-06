export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInToronto(): Date {
  const now = new Date();
  const offsetToronto = -4; // Adjust based on Daylight Saving Time
  now.setHours(now.getUTCHours() + offsetToronto);
  return now;
}

export function formatTimeForToronto(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "America/Toronto",
  };
  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  formattedTime += " EST"; // Adjust based on Daylight Saving Time
  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}