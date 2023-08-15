import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Test utils.js file", () => {
  it("Test getFullYear", () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
  });

  it("Test getFooterCopy with true argument", () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });

  it("Test getFooterCopy with false argument", () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  });

  it("Test getLatestNotification", () => {
    expect(getLatestNotification()).toEqual(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});
