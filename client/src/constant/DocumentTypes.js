export const DocumentTypes = [
  {
    type: "shiXianGaoZhiShu",
    name: "事先告知书",
  },
  {
    type: "tingZhengGaoZhiShu",
    name: "听证告知书",
  },
  {
    type: "songDaHuiZheng",
    name: "送达回证",
  },
  {
    type: "jianYiChengXuJueDingShu",
    name: "简易程序决定书",
  },
];

const arrayToMap = (array) => {
  let obj = {};
  array.forEach((item) => {
    obj[item.type] = item.name;
  });
  return obj;
};

export const DocumentTypeName = arrayToMap(DocumentTypes);
