const rules = {
  passengerType : [
    {
      required: true,
      message: 'Выберите тип пассажира'
    },
  ],
  lastName: [
    {
      required: true,
      message: 'Введите фамилию: 3-30 символов',
      min: 3,
      max:30,
    },
  ],
  firstName: [
    {
      required: true,
      message: 'Введите имя: 2-20 символов',
      min: 2,
      max: 20,
    },
  ],
  fathersName: [
    {
      required:true,
      message: 'Введите отчество, при наличии',
      min:3,
      max: 30,
    },
  ],
  gender: [
    {
      required: true,
      message: 'Выберите пол',
    },
  ],
  dateOfBirth: [
    {
      required: true,
      message: 'Введите дату рождения',
      type: 'date',
    },
  ],
  docType: [
    {
      required: true,
      message:'Выберите тип документа',
    },
  ],
  docSerialNumber: [
    {
      required: true,
      message: 'Введите 4 символа',
      type: 'number',
      min: 1111,
      max: 9999,
    },
  ],
  docNumberPass: [
    {
      required: true,
      message: 'Введите 6 символов',
      type: 'number',
      min: 111111,
      max: 999999,
    },
  ],
  docNumberSertif: [
    {
      required: true,
      message: 'Поле обязательно для заполнения',
    },
    {
      pattern: /^[IVXLC]{1,4}-[А-Я]{2}-\d{6}$/,
      message: 'Введите данные документа',
    },
  ],
  seatDep: [
    {
      required: true,
      message: 'Выберите место',

    },
  ],
  seatArr: [
    {
      required: true,
      message: 'Выберите место',
    },
  ],
};

export default rules;