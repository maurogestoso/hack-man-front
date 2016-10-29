const gridData = [];

for (var i = 0; i < 10; i++) {
  let rowData = [];
  for (var j = 0; j < 10; j++) {
    rowData.push({
      row: i,
      col: j
    });
  }
  gridData.push(rowData);
}

// gridData[0][0].content = 'player';

// GOAL
gridData[9][4].content = 'goal';
gridData[9][5].content = 'goal';

// AISLE 1
gridData[1][1].content = 'shelf';
gridData[2][1].content = 'shelf';
gridData[3][1].content = 'shelf';
gridData[5][1].content = 'shelf';
gridData[6][1].content = 'shelf';
gridData[7][1].content = 'shelf';
// AISLE 2
gridData[1][2].content = 'shelf';
gridData[2][2].content = 'shelf';
gridData[3][2].content = 'shelf';
gridData[5][2].content = 'shelf';
gridData[6][2].content = 'shelf';
gridData[7][2].content = 'shelf';
// AISLE 3
gridData[1][4].content = 'shelf';
gridData[2][4].content = 'shelf';
gridData[3][4].content = 'shelf';
gridData[5][4].content = 'shelf';
gridData[6][4].content = 'shelf';
gridData[7][4].content = 'shelf';
// AISLE 4
gridData[1][5].content = 'shelf';
gridData[2][5].content = 'shelf';
gridData[3][5].content = 'shelf';
gridData[5][5].content = 'shelf';
gridData[6][5].content = 'shelf';
gridData[7][5].content = 'shelf';
// AISLE 5
gridData[1][7].content = 'shelf';
gridData[2][7].content = 'shelf';
gridData[3][7].content = 'shelf';
gridData[5][7].content = 'shelf';
gridData[6][7].content = 'shelf';
gridData[7][7].content = 'shelf';
// AISLE 6
gridData[1][8].content = 'shelf';
gridData[2][8].content = 'shelf';
gridData[3][8].content = 'shelf';
gridData[5][8].content = 'shelf';
gridData[6][8].content = 'shelf';
gridData[7][8].content = 'shelf';

module.exports = gridData;