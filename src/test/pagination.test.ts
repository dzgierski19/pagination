import {
  paginateArray,
  data,
  manualSettings,
  settingsType,
} from "../app/pagination";

describe("pagination testing", () => {
  let manualSettings: settingsType = {
    actualPageIndex: 4,
    entries: 2,
  };

  let data = [2, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2];
  describe("it returns correct value when", () => {
    it("should return paginated chunk when settings are positive integers", () => {
      const result = paginateArray(data, manualSettings);
      expect(result).toEqual([7, 8]);
    });

    it("should return paginated one before last chunk when settings are positive integers", () => {
      manualSettings.actualPageIndex = 5;
      const result = paginateArray(data, manualSettings);
      expect(result).toEqual([2]);
    });
  });

  describe("it returns error when", () => {
    it("should throw error if data is empty array", () => {
      const data = [];
      function expectError() {
        paginateArray(data, manualSettings);
      }
      expect(expectError).toThrow("");
    });
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
    test("when settings are not integers", () => {
      const manualSettings1 = {
        actualPageIndex: 2,
        entries: 2.5,
      };
      function expectErrorFromEntries() {
        paginateArray(data, manualSettings1);
      }
      expect(expectErrorFromEntries).toThrow();
      const manualSettings2 = {
        actualPageIndex: 2.5,
        entries: 2,
      };
      function expectErrorFromPageIndex() {
        paginateArray(data, manualSettings2);
      }
      expect(expectErrorFromPageIndex).toThrow();
    });
    test("when settings are less than 0", () => {
      const manualSettings1 = {
        actualPageIndex: -10,
        entries: 20,
      };
      function expectErrorFromPageIndex() {
        paginateArray(data, manualSettings1);
      }
      expect(expectErrorFromPageIndex).toThrow();
    });
    const manualSettings2 = {
      actualPageIndex: 2,
      entries: -1,
    };
    function expectErrorFromEntries() {
      paginateArray(data, manualSettings2);
    }
    expect(expectErrorFromEntries).toThrow();
    test("should throw error if entries of objSettings is less than 0 or equal 0", () => {
      const manualSettings1 = {
        actualPageIndex: 5,
        entries: -1,
      };
      function expectErrorFromEntriesLessThanZero() {
        paginateArray(data, manualSettings1);
      }
      expect(expectErrorFromEntriesLessThanZero).toThrow();
      const manualSettings2 = {
        actualPageIndex: 5,
        entries: 0,
      };
      function expectErrorFromEntriesEqualZero() {
        paginateArray(data, manualSettings2);
      }
      expect(expectErrorFromEntriesEqualZero).toThrow();
    });
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
  });
});
