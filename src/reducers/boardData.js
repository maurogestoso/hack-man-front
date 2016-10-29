const gridData = [];

for (var i = 0; i < 10; i++) {
  let rowData = [];
  for (var j = 0; j < 10; j++) {
    rowData.push({
      row: i,
      col: j,
      active: false,
      content: 'empty'
    });
  }
  gridData.push(rowData);
}

gridData[0][0].content = 'playerA';
gridData[0][9].content = 'playerB';

// INITIAL ACTIVE SQUARES
gridData[0][0].active = true;
gridData[0][1].active = true;
gridData[1][0].active = true;

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
gridData[1][1].item = 'bananas';
gridData[2][1].item = 'bananas';
gridData[3][1].item = 'bananas';
gridData[5][1].item = 'bananas';
gridData[6][1].item = 'bananas';
gridData[7][1].item = 'bananas';
// AISLE 2
gridData[1][2].content = 'shelf';
gridData[2][2].content = 'shelf';
gridData[3][2].content = 'shelf';
gridData[5][2].content = 'shelf';
gridData[6][2].content = 'shelf';
gridData[7][2].content = 'shelf';
gridData[1][2].item = 'hummus';
gridData[2][2].item = 'hummus';
gridData[3][2].item = 'hummus';
gridData[5][2].item = 'hummus';
gridData[6][2].item = 'hummus';
gridData[7][2].item = 'hummus';
// AISLE 3
gridData[1][4].content = 'shelf';
gridData[2][4].content = 'shelf';
gridData[3][4].content = 'shelf';
gridData[5][4].content = 'shelf';
gridData[6][4].content = 'shelf';
gridData[7][4].content = 'shelf';
gridData[1][4].item = 'biscuits';
gridData[2][4].item = 'biscuits';
gridData[3][4].item = 'biscuits';
gridData[5][4].item = 'biscuits';
gridData[6][4].item = 'biscuits';
gridData[7][4].item = 'biscuits';
// AISLE 4
gridData[1][5].content = 'shelf';
gridData[2][5].content = 'shelf';
gridData[3][5].content = 'shelf';
gridData[5][5].content = 'shelf';
gridData[6][5].content = 'shelf';
gridData[7][5].content = 'shelf';
gridData[1][5].item = 'bread';
gridData[2][5].item = 'bread';
gridData[3][5].item = 'bread';
gridData[5][5].item = 'bread';
gridData[6][5].item = 'bread';
gridData[7][5].item = 'bread';
// AISLE 5
gridData[1][7].content = 'shelf';
gridData[2][7].content = 'shelf';
gridData[3][7].content = 'shelf';
gridData[5][7].content = 'shelf';
gridData[6][7].content = 'shelf';
gridData[7][7].content = 'shelf';
gridData[1][7].item = 'broccoli';
gridData[2][7].item = 'broccoli';
gridData[3][7].item = 'broccoli';
gridData[5][7].item = 'broccoli';
gridData[6][7].item = 'broccoli';
gridData[7][7].item = 'broccoli';
// AISLE 6
gridData[1][8].content = 'shelf';
gridData[2][8].content = 'shelf';
gridData[3][8].content = 'shelf';
gridData[5][8].content = 'shelf';
gridData[6][8].content = 'shelf';
gridData[7][8].content = 'shelf';
gridData[1][8].item = 'mylk';
gridData[2][8].item = 'mylk';
gridData[3][8].item = 'mylk';
gridData[5][8].item = 'mylk';
gridData[6][8].item = 'mylk';
gridData[7][8].item = 'mylk';

module.exports = gridData;