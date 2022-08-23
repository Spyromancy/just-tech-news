const { format_date, format_plural, format_url } = require("../utils/helpers");

test("format_date() returns a date string", () => {
  const date = new Date("2020-03-20 15:12:03");

  expect(format_date(date)).toBe("3/20/2020");
});

test("format_plural() should return a plural version of the word if ammount is more than 1, or just the word if ammount is only 1", () => {
  expect(format_plural("Tiger", 2)).toBe("Tigers");

  expect(format_plural("Lion", 1)).toBe("Lion");
});

test("format_url() returns a simplified url string", () => {
  const url1 = format_url("https://test.com/page/1");
  const url2 = format_url("https://www.coolstuff.com/abcdefg");
  const url3 = format_url("https://www.google.com?q=hello");

  expect(url1).toBe("test.com");
  expect(url2).toBe("coolstuff.com");
  expect(url3).toBe("google.com");
});
