export const data = [2, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2];

export type settingsType = {
  actualPageIndex: number;
  entries: number;
};

export const manualSettings: settingsType = {
  actualPageIndex: 5,
  entries: 2,
};

export const paginateArray = (
  data: number[],
  objSettings: settingsType
): number[] => {
  validateElements(data, objSettings.actualPageIndex, objSettings.entries);
  return data.slice(
    objSettings.actualPageIndex * objSettings.entries,
    objSettings.actualPageIndex * objSettings.entries + objSettings.entries
  );
};

const validateElements = (array: number[], index: number, entries: number) => {
  isNotEmptyArray(array);
  isInputInteger(entries);
  isInputInteger(index);
  isInputHigherThanZero(entries);
  isInputHigherThanZero(index);
  isIndexAvailable(array, entries, index);
};

const isInputInteger = (input: number) => {
  if (!Number.isInteger(input)) {
    throw new Error("Please provide Integer");
  }
};

const isInputHigherThanZero = (input: number) => {
  if (input < 0) {
    throw new Error("Please provide Number higher than Zero");
  }
};

const isIndexAvailable = (array: number[], entries: number, index: number) => {
  if (array.length / entries < index) {
    throw new Error(
      "This combination is not available. Please provide index acceptable for number of provided entries"
    );
  } else if (entries === 0) {
    throw new Error(
      "You must not divide by 0. Please provide entries higher than 0"
    );
  }
};

const isNotEmptyArray = (input: number[]) => {
  if (input.length <= 0) {
    throw new Error("Please provide not empty array");
  }
};

// console.log(paginateArray(data, manualSettings));
