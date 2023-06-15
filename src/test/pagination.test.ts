import {
  paginateArray,
  data,
  manualSettings,
  settingsType,
} from "../app/pagination";

describe("pagination testing", () => {
  //   test("should return element included in first parameter", () => {
  //     const result = paginateArray(data, manualSettings);
  //     const element = result.toString();
  //     const el = data.toString();
  //     console.log(el);
  //     expect(el).toContain(element);
  //   });

  let manualSettings: settingsType = {
    actualPageIndex: 5,
    entries: 2,
  };

  let data = [2, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2];
  describe("testing if first parameter is empty array", () => {
    test("should throw error if data is empty array", () => {
      const data = [];
      function expectError() {
        paginateArray(data, manualSettings);
      }
      expect(expectError).toThrow();
    });
    test("should return if data is not empty array", () => {
      const result = paginateArray(data, manualSettings);
      //   expect(result).toEqual([2]);
      expect(result).toBeTruthy();
    });
  });
  describe("testing if actualPageIndex is Integer", () => {
    test("should throw error if actualPageIndex of objSettings is not Integer", () => {
      const manualSettings = {
        actualPageIndex: 2.5,
        entries: 2,
      };
      function expectError() {
        paginateArray(data, manualSettings);
      }
      expect(expectError).toThrow();
    });
    test("should return if actualPageIndex of objSettings is Integer", () => {
      const result = paginateArray(data, manualSettings);
      //   expect(result).toEqual([2]);
      expect(result).toBeTruthy();
    });
  });
  describe("testing if actualPageIndex is Integer", () => {
    test("should throw error if entries of objSettings is not Integer", () => {
      const manualSettings = {
        actualPageIndex: 2,
        entries: 2.5,
      };
      function expectError() {
        paginateArray(data, manualSettings);
      }
      expect(expectError).toThrow();
    });
    test("should return if entries of objSettings is Integer", () => {
      const result = paginateArray(data, manualSettings);
      //   expect(result).toEqual([2]);
      expect(result).toBeTruthy();
    });
  });
  describe("testing if actualPageIndex of objSettings is higher than 0", () => {
    test("should throw error if actualPageIndex of objSettings is less than 0", () => {
      const manualSettings = {
        actualPageIndex: -10,
        entries: 20,
      };
      function expectError() {
        paginateArray(data, manualSettings);
      }
      expect(expectError).toThrow();
    });
    test("should return if actualPageIndex of objSettings is higher than 0", () => {
      const result = paginateArray(data, manualSettings);
      //   expect(result).toEqual([2]);
      expect(result).toBeTruthy();
    });
  });
  describe("testing if entries of objSettings is higher than 0", () => {
    test("should throw error if entries of objSettings is less than 0", () => {
      const manualSettings = {
        actualPageIndex: 5,
        entries: -1,
      };
      function expectError() {
        paginateArray(data, manualSettings);
      }
      expect(expectError).toThrow();
    });
    test("should return if entries of objSettings is higher than 0", () => {
      const manualSettings: settingsType = {
        actualPageIndex: 5,
        entries: 1,
      };
      const result = paginateArray(data, manualSettings);
      //   expect(result).toEqual([2]);
      expect(result).toBeTruthy();
    });
  });
  describe("testing if entries of objSettings is higher than 0", () => {
    test("should throw error if data.length divided by actualPageIndex of objSettings is less than actualPageIndex of objSettings", () => {
      const manualSettings = {
        actualPageIndex: 8,
        entries: 4,
      };
      function expectError() {
        paginateArray(data, manualSettings);
      }
      expect(expectError).toThrow();
    });
    test("should return if data.length divided by actualPageIndex of objSettings is more or equal actualPageIndex of objSettings", () => {
      const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      const result = paginateArray(data, manualSettings);
      //   expect(result).toEqual([2]);
      expect(result).toBeTruthy();
    });
  });
});
