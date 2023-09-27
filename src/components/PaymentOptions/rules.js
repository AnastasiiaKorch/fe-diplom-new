const rules = {
  lastName:[
    {
      required: true,
      message:'Введите фамилию: 3-30 символов',
      min: 3,
      max: 30,
    }
  ],
  firstName: [
    {
      required: true,
      message:'Введите имя: 2-20 символов',
      min: 2,
      max: 20
    },
  ],
  fatherName: [
    {
      required: true,
      message: 'Введите отчество: 4-20 символов',
      min: 4,
      max: 20
    }
  ],
  email:[
    {
      required: true,
      message: 'Введите корректный e-mail',
      type: 'email',
    },
  ],

  phone: [
    {
      required: true,
      message: 'Введите номер телефона в формате 9111111111',
      type: 'number',
      min: 9000000000,
      max: 9999999999,
    },
  ],
  paymentMethod: [
    {
      required: true,
      message: 'Выберите тип оплаты',
    },
  ],
};

export default rules;