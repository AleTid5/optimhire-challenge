const DOFContract = {
  listItem: '.Tabla_borde',
  data: {
    date: {
      selector: '.Celda.1 > td',
      convert: (data) => data.substring(0, 10),
    },
    value: {
      selector: '.Celda.1 > td',
      convert: (data) => data.substring(10),
    },
  },
};

export default DOFContract;
