{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 3;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // enum is not really recommended when using TS as you can assign a different value directly - can't secure type.
  //
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }
  console.log(Days.Friday);
  const day = Days.Monday;
  console.log(day);

  // So would recommend using union
  type daysOfWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

  let dayOfWeek: daysOfWeek = 'Fri';
}
