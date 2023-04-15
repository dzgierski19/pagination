// actualPageIdx to index wybranej strony (indexujemy od 0)
// entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// przykładowe dane
const data = [2, 1];

type settingsType = {
  actualPageIndex: number;
  entries: number;
};

const objSettings = ({
  actualPageIndex,
  entries,
}: settingsType): settingsType => {
  return { actualPageIndex, entries };
};

const manualSettings: settingsType = {
  actualPageIndex: 1,
  entries: 2,
};

const paginateArray = (data: number[], objSettings: settingsType): number[] => {
  isInputInteger(objSettings.entries);
  isInputInteger(objSettings.actualPageIndex);
  isInputHigherThanZero(objSettings.entries);
  isInputHigherThanZero(objSettings.actualPageIndex);
  isInputHigherThanArrayLengthInlcuding0index(
    data,
    objSettings.actualPageIndex
  );
  isInputHigherThanArrayLengthInlcuding0index(
    data,
    objSettings.actualPageIndex
  );
  isInputHigherThanArrayLength(data, objSettings.entries);
  isIndexAvailableInArrayWithNumberOfProvidedElements(
    data,
    objSettings.entries,
    objSettings.actualPageIndex
  );
  return data.slice(
    objSettings.actualPageIndex * objSettings.entries,
    objSettings.actualPageIndex * objSettings.entries + objSettings.entries
  );
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

const isInputHigherThanArrayLengthInlcuding0index = (
  array: number[],
  input: number
) => {
  if (input > array.length - 1) {
    throw new Error(
      "Please provide input at least 1 point lower than number of elements in an array (because we started indexing from 0)"
    );
  }
};

const isInputHigherThanArrayLength = (array: number[], input: number) => {
  if (input > array.length) {
    throw new Error(
      "Please provide input lower or equal number of elements in an array"
    );
  }
};

const isIndexAvailableInArrayWithNumberOfProvidedElements = (
  array: number[],
  input1: number,
  input2: number
) => {
  if (array.length / input1 < input2 + 1) {
    throw new Error(
      "This combination is not available. Please provide index acceptable for number of provided entries"
    );
  }
};

// const isNotEmptyArray = (input: number[]) => {
//   if (input.length <= 0) {
//     throw new Error("Please provide not empty array");
//   }
// };

console.log(paginateArray(data, manualSettings));

//dodać walidację
