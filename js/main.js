data = [
  ['ROAST TIME', 1,7,13,19,26,31,35,50,56,62,67,75,80,88,94,99,106,112,119,127,133,140,148,153,159,165,170,178,185,191,197,204,210,215,221,227,234,242,248,253,261,267,272,278,285,290,296,302,307,315,321,326,333,339,345,352,357,365,370,376,384,389,395,402,410,415,421,427,432,440,446,453,459,465,472,478,483,491,496,502,509,515,521,527,533,539,544,552,557,565,571,576,584,590,595,603,609,616,622,629,635,640,647,653,661,667,674,682,689,691],
  ['BEAN TEMP', 432,343,244,182,134,123,124,150,160,170,181,193,202,212,219,226,234,240,247,255,259,265,271,275,278,282,285,290,294,297,299,303,305,308,310,313,316,318,321,323,326,328,329,331,333,335,337,338,340,343,344,346,348,349,351,353,355,357,358,360,362,363,365,367,369,370,372,373,375,376,378,379,381,383,384,386,388,390,392,393,395,396,398,400,401,402,404,404,405,405,405,406,407,407,407,408,408,408,409,410,410,411,412,412,413,414,415,416,417,417],
  ['INLET AIR', 470,472,470,466,455,443,432,412,411,411,411,409,407,405,404,404,403,403,403,403,403,403,403,403,404,404,405,405,406,406,407,408,409,409,410,410,411,412,413,414,415,415,417,417,418,419,420,421,423,424,426,427,429,430,431,433,434,436,438,439,441,442,443,444,446,447,448,449,450,451,452,454,455,455,457,459,460,463,464,465,467,468,469,470,471,471,472,472,472,472,473,473,473,474,474,472,470,468,467,466,466,465,463,462,460,459,459,458,458,460],
  ['RETURN AIR', 445,414,375,344,291,258,239,227,228,232,236,242,248,254,258,263,269,272,277,282,285,290,294,296,299,302,304,308,311,313,315,318,320,321,323,325,327,330,331,333,335,337,338,339,341,343,344,345,347,349,350,351,353,354,356,358,359,361,362,363,365,366,368,369,371,372,373,374,376,377,378,380,381,382,384,385,387,389,390,391,393,395,396,397,399,400,401,402,402,403,404,405,405,406,406,406,406,407,407,408,408,409,409,409,410,411,411,412,412,413]
]

var chart = c3.generate({
  bindto: '#chart',
  data: {
    x: 'ROAST TIME',
    columns: data
  },
  grid: {
    x: {
      show: true
    },
    y: {
      show: true
    }
  }
});
