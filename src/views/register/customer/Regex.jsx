export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

export function isEmail(val) {
  let regExp = /^[a-zA-Z0-9\.\-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  if (!regExp.test(val)) {
    return {
      status: false,
      message: "รูปแบบ E-mail ควรอยู่ในรูปแบบ abc@domain.com",
    };
  }
  return { status: true, message: "" };
}

export function isTelephone(val) {
  let regExp = /^(?:\d{2}|\d{3})([-/.])\d{3}\1(\d{3}|\d{4})$/;
  if (!regExp.test(val)) {
    return { status: false, message: "เบอร์โทรควรอยู่ในรูปแบบ ###-###-####" };
  }
  return { status: true, message: "" };
}

export function isLocation(val) {
  let regExp = /[0-9]+\.[0-9]+$/;
  if (!regExp.test(val)) {
    return { status: false, message: "ควรอยู่ในรูปแบบ ####.####" };
  }
  return { status: true, message: "" };
}

export function isNumber(val) {
  let regExp = /[0-9]+$/;
  if (!regExp.test(val)) {
    return { status: false, message: "ควรอยู่ในรูปแบบ ####" };
  }
  return { status: true, message: "" };
}

export function isText(val) {
  if (val.length <= 0) {
    return { status: false, message: "ส่วนนี้ต้องใส่ข้อมูล !!!" };
  }
  return { status: true, message: "" };
}

export function isValidate(type, value) {
  switch (type) {
    case "email":
      return isEmail(value);
      break;
    case "number":
      return isNumber(value);
      break;
    case "tel":
      return isTelephone(value);
      break;
    case "location":
      return isLocation(value);
      break;
    case "text":
      return isText(value);
      break;
    default:
      return { status: false, message: "เกิดข้อผิดผลาดการเรียกใช้งาน!!!" };
  }
}
