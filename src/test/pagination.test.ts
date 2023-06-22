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
  describe("it returns correct value", () => {
    it("should return paginated chunk", () => {
      const result = paginateArray(data, manualSettings);
      expect(result).toEqual([7, 8]);
    });

    it("should return last paginated chunk in which entries number is higher than elements", () => {
      manualSettings.actualPageIndex = 5;
      const result = paginateArray(data, manualSettings);
      expect(result).toEqual([2]);
    });
  });

  describe("it throws error when", () => {
    it("- data is empty array", () => {
      const data = [];
      function expectError() {
        paginateArray(data, manualSettings);
      }
      expect(expectError).toThrow("");
    });
    it("- settings properties are not Integers", () => {
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
    it("- settings properties are less than 0", () => {
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
    it("- entries of objSettings is equal 0", () => {
      const manualSettings2 = {
        actualPageIndex: 5,
        entries: 0,
      };
      function expectErrorFromEntriesEqualZero() {
        paginateArray(data, manualSettings2);
      }
      expect(expectErrorFromEntriesEqualZero).toThrow();
    });
    it("- given index is out of scope", () => {
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
