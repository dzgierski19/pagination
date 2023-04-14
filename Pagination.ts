// actualPageIdx to index wybranej strony (indexujemy od 0)
// entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// przykładowe dane
const data = [1, 2, 3, 4, 5, 6];

interface settings {
  actualPageIndex: number;
  entries: number;
}

const objSettings = (actualPageIndex: number, entries: number): settings => {
  return { actualPageIndex, entries };
};

const manualSettings: { actualPageIndex: number; entries: number } = {
  actualPageIndex: 0,
  entries: 3,
};

console.log(manualSettings.entries);

const paginateArray = (
  data: number[],
  objSettings: { actualPageIndex: number; entries: number }
): number[] => {
  const emptyArray: number[][] = [];
  for (let i = 0; i < data.length / objSettings.entries; i++) {
    emptyArray.push(
      data.slice(
        i * objSettings.entries,
        i * objSettings.entries + objSettings.entries
      )
    );
  }
  const entriesOnSelectedPage = emptyArray[objSettings.actualPageIndex];
  return entriesOnSelectedPage;
};

console.log(paginateArray(data, manualSettings));

// const paginateArray = (data: number[], settings: object) => {
//   const emptyArray: number[][] = [];
//   for (let i = 0; i < data.length / 2; i++) {
//     emptyArray.push(
//       data.slice(
//         i * entriesOnPage.settings,
//         i * settings.entriesOnPage + settings.entriesOnPage
//       )
//     );
//   }
//   return emptyArray;
// };

// console.log(paginateArray(data, settings));
// const paginateArray = (dataEntries, settings: object) => {
//   // ...
//   // return entriesOnSelectedPage
// };

// const result = paginateArray(data, settings);
// // result === [3,4]
