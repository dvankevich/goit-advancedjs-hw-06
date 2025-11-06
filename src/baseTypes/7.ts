/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek {
    Monday = "Понеділок",
    Tuesday = "Вівторок",
    Wednesday = "Середа",
    Thursday = "Четвер",
    Friday = "П'ятниця",
    Saturday = "Субота",
    Sunday = "Неділя",
}

function isWeekend(day: DayOfWeek): boolean {
    return day === DayOfWeek.Sunday || day === DayOfWeek.Saturday;
}
