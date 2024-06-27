import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Card,
  Stack,
  Typography,
  FormControl,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material";

// components
import PageContainer from "src/components/container/PageContainer";
import logo_TEF_Text from "src/assets/images/logos/TEF_Logo_text.png";
import genGridGroup from "./gridItems";

import { isValidate } from "./Regex.jsx";

// import swal from "sweetalert";
import Swal from "sweetalert2";

import computeAge from "./AGE";
import browseFile from "src/assets/images/backgrounds/browseFile.png";

const RegisterCustomerFEI_Thai = () => {
  const navigate = useNavigate();

  const clickBackToLogin = () => {
    // saveLocalStorage("loginStatus", false);
    navigate("/");
  };

  const onFieldChange = (event) => {
    const target = event.currentTarget || event.target;
    const id = target.id || target.name;
    const value = target.value || target.value;

    const tmpMessages = [...helperTextFields];
    tmpMessages[id] = "";
    setErrorMessage(tmpMessages);

    // สำหรับการคำนวนอายุ เพื่อกำหนดค่า Radio
    if (id == "field6") {
      const dob = new Date(value);
      const age = computeAge(dob);
      if (age >= 18) {
        setAgeMember("Adult");
      } else {
        setAgeMember("Children");
      }
    }
  };

  const maxFields = 30;
  const dataFieldsRef = useRef([]);
  const [helperTextFields, setErrorMessage] = useState(
    Array(maxFields).fill("")
  );

  const [ageMember, setAgeMember] = useState("");

  let dataFromServer = {
    first_name_th: "อดิศักดิ์",
    last_name_th: "ศุภธนสินเขษม",
    TEFID: "",
    first_name_en: "Adisak",
    last_name_en: "Supatanasinkasem",
    date_birth: "2006-06-24",
    gender: "Male",
    phone: "0819396255",
    email: "adisak@gmail.com",
    address: "128/42",
    province: "พิษณุโลก",
    subdistrict: "ในเมือง",
    district: "เมือง",
    postcode: "65000",
    first_name_th_parent: "อดิศักดิ์",
    last_name_th_parent: "ศุภธนสินเขษม",
    first_name_en_parent: "Adisak",
    last_name_en_parent: "Supatanasinkasem",
    date_birth_parent: "2000-06-24",
    gender_parent: "",
    phone_parent: "0819396255",
    email_parent: "adisakparent@gmail.com",
    address_parent: "128/41",
    province_parent: "พิษณุโลก",
    subdistrict_parent: "ในเมือง",
    district_parent: "เมือง",
    postcode_parent: "65000",
    club_name: "Club A",
  };

  dataFromServer=null;

  const dataScheme = [
    "first_name_th",
    "last_name_th",
    "TEFID",
    "first_name_en",
    "last_name_en",
    "date_birth",
    "gender",
    "phone",
    "email",
    "address",
    "province",
    "subdistrict",
    "district",
    "postcode",
    "first_name_th_parent",
    "last_name_th_parent",
    "date_birth_parent",
    "first_name_en_parent",
    "last_name_en_parent",
    "gender_parent",
    "phone_parent",
    "email_parent",
    "address_parent",
    "province_parent",
    "subdistrict_parent",
    "district_parent",
    "postcode_parent",
    "club_name",
  ];

  const setValueFromServer = (items, data) => {
    let tmpItems = [];
    items.forEach((element, index) => {
      element.value = data[element.fieldName] ? data[element.fieldName] : "";
      tmpItems.push(data);
    });
    return tmpItems;
  };

  // โครงสร้าง ที่ใช้สำหรับกำหนด UI
  const fieldAttr = [
    {
      fieldName: "first_name_th",
      type: "text",
      label: "First Name (TH) : (ชื่อภาษาไทย)*",
      placeholder: "ชื่อ",
    },
    {
      fieldName: "last_name_th",
      type: "text",
      label: "Last Name (TH) : (นามสกุลภาษาไทย)*",
      placeholder: "นามสกุล",
    },
    {
      fieldName: "TEFID",
      type: "text",
      label: "TEF ID*",
      placeholder: "สำหรับการต่อายุเท่านั้น เช่น TEF1688",
      required: "false",
    },
    {
      fieldName: "first_name_en",
      type: "text",
      label: "First Name (ชื่อภาษาอังกฤษ)*",
      placeholder: "First Name",
    },
    {
      fieldName: "last_name_en",
      type: "text",
      label: "Last Name (นามสกุลภาษาอังกฤษ)*",
      placeholder: "Last Name",
    },
    {
      fieldName: "date_birth",
      type: "date",
      label: "Date of Birth (วันเกิด)*",
      placeholder: "DD/MM/YYYY",
    },
    {
      fieldName: "gender",
      type: "select",
      label: "Gender (เพศ)",
      placeholder: "Gender",
      required: "false",
      menus: ["Male", "Female"],
    },
    {
      fieldName: "phone",
      type: "text",
      label: "Phone Number (เบอร์โทรศัพท์)*",
      placeholder: "Phone Number",
      maxLength: 12,
    },
    {
      fieldName: "email",
      type: "email",
      label: "E-mail (อีเมล)*",
      placeholder: "1234@qmail.com",
    },
    {
      fieldName: "address",
      type: "text",
      label: "Address (ที่อยู่)*",
      placeholder: "Address",
      sizeGrid: 2,
    },
    {
      fieldName: "province",
      type: "select",
      label: "Province (จังหวัด)*",
      placeholder: "Province",
      menus: ["กรุงเทพมหานคร", "สมุทรปราการ"],
    },

    {
      fieldName: "subdistrict",
      type: "select",
      label: "Subdistrict (แขวง)*",
      placeholder: "Subdistrict",
      menus: [".", ".."],
    },
    {
      fieldName: "district",
      type: "select",
      label: "District (เขต)*",
      placeholder: "District",
      menus: [".", ".."],
    },
    {
      fieldName: "postcode",
      type: "number",
      label: "Post Code (รหัสไปรษณีย์)*",
      placeholder: "Post Code",
    },
    // Parent
    {
      fieldName: "first_name_th_parent",
      type: "text",
      label: "First Name (TH) : (ชื่อภาษาไทย)*",
      placeholder: "ชื่อ",
    },
    {
      fieldName: "last_name_th_parent",
      type: "text",
      label: "Last Name (TH) : (นามสกุลภาษาไทย)*",
      placeholder: "นามสกุล",
    },
    {
      fieldName: "date_birth_parent",
      type: "date",
      label: "Date of Birth (วันเกิด)*",
      placeholder: "DD/MM/YYYY",
    },
    {
      fieldName: "first_name_en_parent",
      type: "text",
      label: "First Name (ชื่อภาษาอังกฤษ)*",
      placeholder: "First Name",
    },
    {
      fieldName: "last_name_en_parent",
      type: "text",
      label: "Last Name (นามสกุลภาษาอังกฤษ)*",
      placeholder: "Last Name",
    },
    {
      fieldName: "gender_parent",
      type: "select",
      label: "Gender (เพศ)",
      placeholder: "Gender",
      required: "false",
      menus: ["Male", "Female"],
    },
    {
      fieldName: "phone_parent",
      type: "text",
      label: "Phone Number (เบอร์โทรศัพท์)*",
      placeholder: "Phone Number",
      maxLength: 12,
    },
    {
      fieldName: "email_parent",
      type: "email",
      label: "E-mail (อีเมล)*",
      placeholder: "1234@gmail.com",
      sizeGrid: 2,
    },
    {
      fieldName: "address_parent",
      type: "text",
      label: "Address (ที่อยู่)*",
      placeholder: "Address",
      sizeGrid: 2,
    },
    {
      fieldName: "province_parent",
      type: "select",
      label: "Province (จังหวัด)*",
      placeholder: "Province",
      menus: ["กรุงเทพมหานคร", "สมุทรปราการ"],
    },
    {
      fieldName: "subdistrict_parent",
      type: "select",
      label: "Subdistrict (แขวง)*",
      placeholder: "Subdistrict",
      menus: [".", ".."],
    },
    {
      fieldName: "district_parent",
      type: "select",
      label: "District (เขต)*",
      placeholder: "District",
      menus: [".", ".."],
    },
    {
      fieldName: "postcode_parent",
      type: "number",
      label: "Post Code (รหัสไปรษณีย์)*",
      placeholder: "Post Code",
    },
    {
      fieldName: "club_name",
      type: "select",
      label: "Club name(ชื่อคลับ) *",
      placeholder: "search",
      menus: ["Club A", "Club B"],
      required: "false",
    },
  ];

  const createInitDataBlock = (items) => {
    let tmpItems = [];
    items.forEach((element, index) => {
      let itemNo = index + 1;
      let data = {
        key: itemNo,
        id: "field" + itemNo,
        type: element?.type ? element.type : "text",
        value: element?.value ? element.value : "",
        label: element?.label ? element.label : "",
        placeholder: element?.placeholder ? element.placeholder : "",
        menus: element?.menus ? element.menus : [],
        required: element?.required === "false" ? false : true,
        maxLength: element?.maxLength ? element.maxLength : 50,
        sizeGrid: element?.sizeGrid ? element.sizeGrid : 1,
        onFieldChange: element?.onFieldChange
          ? element.onFieldChange
          : onFieldChange,
        fieldName: element?.fieldName ? element.fieldName : "",
      };
      tmpItems.push(data);
    });
    return tmpItems;
  };

  const initDataBlock = fieldAttr;

  if (dataFromServer) setValueFromServer(fieldAttr, dataFromServer);

  const [dataBlock, setDataBlock] = useState(
    createInitDataBlock(initDataBlock)
  );

  // For UI เพื่อแบางแต่ละส่วน
  function genInitDataBlock(datas, start, end) {
    let tmpDataBlock = [];
    for (let index = start - 1; index < end; index++) {
      let element = datas[index];
      tmpDataBlock.push(element);
    }
    return tmpDataBlock;
  }

  const initDataBlock1 = genInitDataBlock(dataBlock, 1, 14);
  const initDataBlock2 = genInitDataBlock(dataBlock, 15, 27);
  const initDataBlock3 = genInitDataBlock(dataBlock, 28, 28);

  const [checkAgree1, setCheckAgree1] = useState(false);
  const setAgree1 = (event) => {
    const isChecked = event.target.checked;
    setCheckAgree1(isChecked);
  };

  const [checkAgree2, setCheckAgree2] = useState(false);
  const setAgree2 = (event) => {
    const isChecked = event.target.checked;
    setCheckAgree2(isChecked);
  };

  const [checkDiscipline1, setCheckDiscipline1] = useState(false);
  const setDiscipline1 = (event) => {
    const isChecked = event.target.checked;
    setCheckDiscipline1(isChecked);
    // console.table(helperTextFields)
  };

  const [checkDiscipline2, setCheckDiscipline2] = useState(false);
  const setDiscipline2 = (event) => {
    const isChecked = event.target.checked;
    setCheckDiscipline2(isChecked);
    // console.table(helperTextFields)
  };

  const [checkDiscipline3, setCheckDiscipline3] = useState(false);
  const setDiscipline3 = (event) => {
    const isChecked = event.target.checked;
    setCheckDiscipline3(isChecked);
    // console.table(helperTextFields)
  };

  const [checkDiscipline4, setCheckDiscipline4] = useState(false);
  const setDiscipline4 = (event) => {
    const isChecked = event.target.checked;
    setCheckDiscipline4(isChecked);
    // console.table(helperTextFields)
  };

  const validateData = (event) => {
    event.preventDefault();
    // console.log("Data is ");
    // console.table(dataBlock);

    let statusValidateData = true;

    if (statusValidateData) {
      Swal.fire({
        icon: "success",
        title: "Thank you for registering!",
        html: `<div style="text-align: left;">
Your club registration information has been successfully saved. Thank you for choosing to be part of the Thailand Equestrian Association.
We will investigate the information and get back to your club as soon as possible. If you have any questions or need more information, You can contact us at <a href="">[Contact information]</a>
Thank you once again for being a part of the Equestrian Sports Association of Thailand<br><br>
With all due respect<br>
Equestrian Sports Association Team of Thailand
    </div>`,
        confirButtonColor: "primary",
        confirmButtonText: "Ok",
        position: "center",
        // timer: 5000,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        navigate("/")

        // if (result.isConfirmed) {
        //   navigate("/")
        //   Swal.fire("Saved!", "", "success");
        // } else if (result.isDenied) {
        //   Swal.fire("Changes are not saved", "", "info");
        // }
      });
      
    }
    
    return;



    const tmpMessages = [...helperTextFields];
    const tmpData = [...dataBlock];
    dataBlock.forEach((element, index) => {
      let key = element.key;
      let value = dataFieldsRef.current[key].value;
      // console.log("Value : " + value)
      tmpData[index].value = value;

      if (element.required) {
        let resultValidate = isValidate(element.type, value);
        if (!resultValidate.status) {
          statusValidateData = false;
        }
        tmpMessages[key] = resultValidate.message;
      }
    });
    // alert(dataFieldsRef.current[7].value);
    // console.table(tmpMessages)
    setDataBlock(tmpData);
    setErrorMessage(tmpMessages);

    // statusValidateData = true;
    //     if (statusValidateData) {
    //       Swal.fire({
    //         icon: "success",
    //         title: "ขอบคุณที่ลงทะเบียนสโมสร!",
    //         html: `<div style="text-align: left;">
    // <span>ข้อมูลการลงทะเบียนสโมสรของคุณได้รับการบันทึกเรียบร้อยแล้ว<br>
    // ขอขอบคุณที่เลือกเป็นส่วนหนึ่งของสมาคมกีฬาขี่ม้าแห่งประเทศไทย
    // เราจะดำเนินการตรวจสอบข้อมูลและติดต่อกลับไปยังสโมสรของคุณโดยเร็วที่สุด หากมีคำถามหรือต้องการข้อมูลเพิ่มเติม สามารถติดต่อเราได้ที่ <a href="">[ข้อมูลการติดต่อ]</a>
    // <br>ขอขอบคุณอีกครั้งที่ร่วมเป็นส่วนหนึ่งในสมาคมกีฬาขี่ม้าแห่งประเทศไทย<br><br>
    // ด้วยความเคารพ<br>
    // ทีมงานสมาคมกีฬาขี่ม้าแห่งประเทศไทย
    // </div>`,
    //         confirButtonColor: "primary",
    //         confirmButtonText: "close",
    //         position: "top",
    //         timer: 5000,
    //       });
    //     } else {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Data validate fail!",
    //         text: "Please check your data information.",
    //         confirmButtonText: "close",
    //         position: "top",
    //         timer: 5000,
    //       });
    //     }
    // console.log("Data is ");
    // console.table(setDataBlock);
    // saveDataToDB();
  };

  const saveDataToDB = () => {
    let data = {};
    dataBlock.forEach((element, index) => {
      // console.log(element.fieldName);
      data[element.fieldName] = element.value;
      // console.log(data[element.fieldName]);
      // data[element.fieldName].value = element.value;
    });
    console.log(data);

    // const data = {
    //   // id: dataBlock[0].value,
    //   first_name_th: dataBlock[0].value,
    //   last_name_th: dataBlock[1].value,
    //   TEFID: dataBlock[2].value,
    //   first_name_en: dataBlock[3].value,
    //   last_name_en: dataBlock[4].value,
    //   date_birth: dataBlock[5].value,
    //   gender: dataBlock[6].value,
    //   phone: dataBlock[7].value,
    //   email: dataBlock[8].value,
    //   address: dataBlock[9].value,
    //   province: dataBlock[10].value,
    //   subdistrict: dataBlock[11].value,
    //   district: dataBlock[12].value,
    //   postcode: dataBlock[13].value,
    //   first_name_th_parent: dataBlock[14].value,
    //   last_name_th_parent: dataBlock[15].value,
    //   date_birth_parent: dataBlock[16].value,
    //   first_name_en_parent: dataBlock[17].value,
    //   last_name_en_parent: dataBlock[18].value,
    //   gender_parent: dataBlock[19].value,
    //   phone_parent: dataBlock[20].value,
    //   email_parent: dataBlock[21].value,
    //   address_parent: dataBlock[22].value,
    //   province_parent: dataBlock[22].value,
    //   subdistrict_parent: dataBlock[24].value,
    //   district_parent: dataBlock[25].value,
    //   postcode_parent: dataBlock[26].value,
    //   club_name: dataBlock[27].value,
    // };

    //   {
    //     "first_name_th": "อดิศักดิ์",
    //     "last_name_th": "ศุภธนสินเขษม",
    //     "TEFID": "",
    //     "first_name_en": "Adisak",
    //     "last_name_en": "Supatanasinkasem",
    //     "date_birth": "2006-06-24",
    //     "gender": "Male",
    //     "phone": "0819396255",
    //     "email": "adisak@gamil.com",
    //     "address": "128/42",
    //     "province": "พิษณุโลก",
    //     "subdistrict": "ในเมือง",
    //     "district": "เมือง",
    //     "postcode": "65000",
    //     "first_name_th_parent": "อดิศักดิ์",
    //     "last_name_th_parent": "ศุภธนสินเขษม",
    //     "date_birth_parent": "2000-06-24",
    //     "gender_parent": "Adisak",
    //     "phone_parent": "Supatanasinkasem",
    //     "email_parent": "",
    //     "address_parent": "0819396255",
    //     "province_parent": "adisak@gamil.com",
    //     "subdistrict_parent": "128/42",
    //     "district_parent": "พิษณุโลก",
    //     "postcode_parent": "ในเมือง",
    //     "club_name": "เมือง"
    // }
    // console.log(data);
    // alert(data)
    // pushDataToServer(data);
  };

  const pushDataToServer = (data) => {
    fetch("http://localhost:3333/feis/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(JSON.stringify(result));
        if (result.message === "SUCCESS") {
          // saveLocalStorage("loginStatus", true);
          // saveLocalStorage("loginData", result);
          // saveLocalStorage("access_token", result.access_token);
          // saveLocalStorage("refresh_token", result.refresh_token);
          // saveLocalStorage("user", result.user);
          Swal.fire({
            title: "Good job!!",
            text: "Create success.",
            icon: "success",
            timer: 2000,
            closeOnClickOutside: false,
          });
          // navigate("/");
        } else {
          // Swal.fire({
          //           icon: "error",
          //           title: "Data validate fail!",
          //           text: "Please check your data information.",
          //           confirmButtonText: "close",
          //           position: "top",
          //           timer: 5000,
          //         });
          Swal.fire({
            title: "Bad job!",
            text: result.message,
            icon: "error",
            timer: 2000,
          });
        }
      })
      .catch((error) => {
        Swal.fire("Bad job!", "Please check your login information.", "error", {
          timer: 2000,
        });
      });
  };

  //ส่วนของการ Upload image
  const [selectedImage, setSelectedImage] = useState();
  const onFileImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  //ส่วนของการ Upload file
  const [selectedFile, setSelectedFile] = useState("");
  const onFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0].name);
    }
  };

  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setSelectedImage(e.target.files[0]);
  //   }
  // };

  useEffect(() => {
    // console.table(setDataBlock);
    // console.log(checkAgree);
    // console.table(dataFieldsRef);
    console.log("DataBlock");
    console.table(dataBlock);
  }, [setDataBlock]);

  return (
    <PageContainer
      title="Register TEF"
      description="this is Register TEF page"
      // background="linear-gradient(#37689A 0%, #64BEFF 50%, #0F4174 100%)"
    >
      <Box>
        <Grid
          container
          justifyContent="center"
          sx={{ height: "100vh", width: "100vw" }}
        >
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 2, zIndex: 1, width: "100%", maxWidth: "1400px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <div
                  style={{ margin: "20px", width: "400px", maxWidth: "70%" }}
                >
                  <img src={logo_TEF_Text} alt="logo_TEF_Text" width={"100%"} />
                </div>
              </Box>
              <Box
                sx={{
                  p: 2,
                  background: "linear-gradient(#37689A 0%, #0F4174 100%)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Typography width="100%" fontWeight="700" variant="h3" mb={1}>
                TEF Athlete Registration 2024
                </Typography>
                <Typography width="100%" fontWeight="700" variant="h3">
                Athlete registration form  under the Equestrian Sports Association of Thailand
                </Typography>
              </Box>
              <Stack
                sx={{
                  p: 2,
                  backgroundColor: "white",
                  border: "2px solid grey",
                }}
              >
                <Box>{/* Image Print && Download */}</Box>

                <Box pt={2} pb={1}>
                  <Typography fontWeight="700" variant="h5">
                    Who are you completing this registration for? (Who are you
                    completing this registration for? . )
                  </Typography>
                </Box>

                <Box>
                  <RadioGroup
                    // defaultValue="Child"
                    name="age-group"
                    // defaultValue={ageMember}
                    value={ageMember}
                    // inputRef={(el) => (inputRefAge = el)}
                    disabled={true}
                  >
                    <Grid container ml={4} spacing={1} sx={{ width: "100%" }}>
                      <Grid key={1} item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <FormControlLabel
                            // defaultValue={"Children"}
                            value="Adult"
                            control={<Radio />}
                            label="Applying for Adult - Over 18 Athletes over 18"
                            // disabled={true}
                          />
                        </FormControl>
                      </Grid>
                      <Grid key={2} item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <FormControlLabel
                            value="Children"
                            control={<Radio />}
                            label="Applying for Children - Under 18 Athletes over 18"
                            // disabled={true}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </Box>
                {/* </RadioGroup> */}
                <Box pt={2} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography fontWeight="700" variant="h5">
                    Personal Information : ข้อมูลส่วนตัว*
                  </Typography>
                </Box>
                {genGridGroup(initDataBlock1, helperTextFields, dataFieldsRef)}

                <Box mt={4}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <Typography fontWeight="700" variant="h7">
                        I confirm the Nationality of the Athlete being
                        registered is Thai.
                        <br />
                        ข้าพเจ้ายืนยันว่านักกีฬาในการลงทะเบียนถือสัญญาชาติไทยถูกต้องตามกฎหมาย
                      </Typography>
                    }
                    onClick={setAgree1}
                  />
                </Box>

                <Box pt={3} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography width="100%" fontWeight="700" variant="h5">
                    Discipline ประเภท*
                  </Typography>
                </Box>
                <Typography width="100%" fontWeight="500" variant="h7" mt={1}>
                  NOTE: The registration fee for each discipline is 200 THB. /
                  อัตราค่าลงทะเบียนประเภทละ 200 บาท
                </Typography>
                <Grid
                  container
                  spacing={1}
                  sx={{ width: "100%", marginTop: "0px" }}
                >
                  <Grid key={1} item xs={12} sm={6} lg={3}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Typography width="100%" fontWeight="700" variant="h7">
                          Jumping กระโดดข้ามเครื่องกีดขวาง
                        </Typography>
                      }
                      // {/* label="Jumping กระโดดข้ามเครื่องกีดขวาง" */}
                      onClick={setDiscipline1}
                    />
                  </Grid>
                  <Grid key={2} item xs={12} sm={6} lg={3}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Typography width="100%" fontWeight="700" variant="h7">
                          Dressage ศิลปะการบังคับม้า
                        </Typography>
                      }
                      // label="Dressage ศิลปะการบังคับม้า"
                      onClick={setDiscipline2}
                    />
                  </Grid>
                  <Grid key={3} item xs={12} sm={6} lg={3}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Typography width="100%" fontWeight="700" variant="h7">
                          Eventing อีเว้นติ้ง
                        </Typography>
                      }
                      // label="Eventing อีเว้นติ้ง"
                      onClick={setDiscipline3}
                    />
                  </Grid>
                  <Grid key={4} item xs={12} sm={6} lg={3}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Typography width="100%" fontWeight="700" variant="h7">
                          Endurance การขี่ม้าระยะทาง
                        </Typography>
                      }
                      // label="Endurance การขี่ม้าระยะทาง"
                      onClick={setDiscipline4}
                    />
                  </Grid>
                </Grid>
                {/* {genGridGroup(initDataBlock2, helperTextFields, dataFieldsRef)} */}
                <Box pt={3} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography width="100%" fontWeight="700" variant="h5">
                    Parent/Guardian Information (ข้อมูลผู้ปกครอง)
                  </Typography>
                </Box>
                {genGridGroup(initDataBlock2, helperTextFields, dataFieldsRef)}

                <Box pt={3} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography width="100%" fontWeight="700" variant="h5">
                    Club Information
                  </Typography>
                </Box>
                {genGridGroup(initDataBlock3, helperTextFields, dataFieldsRef)}

                <Box pt={3} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography width="100%" fontWeight="700" variant="h5">
                    Portrait Photo (รูปถ่ายนักกีฬา)*
                  </Typography>
                </Box>
                <Grid container mt={2} spacing={1} sx={{ width: "100%" }}>
                  <Grid key={1} item xs={12} sm={8}>
                    <Typography width="100%" fontWeight="500" variant="h7">
                      NOTE: Athlete's portrait photo will gradually become
                      compulsory for all TEF & FEI events. We therefore request
                      a portrait photo of good quality from every rider without
                      helmet, hat or sunglasses against a neutral background
                      that is applying for an FEI license in 2024.
                      <br />
                      <br />
                      รูปถ่ายของนักกีฬาจะกลายเป็นภาพแสดงบนข้อมูล TEF และ FEI
                      events
                      ดังนั่นจึงขอแนะนำรูปถ่ายที่มีคุณภาพจากนักกีฬาทุกคนโดยไม่สวมหมวกนิรภัย
                      หรือแว่นตากันแดด
                      ในพื้นหลังที่เป็นสีพื้นสำหรับการยื่นขอใบอนุญาต FEI ปี 2024
                    </Typography>
                  </Grid>
                  <Grid key={2} item xs={12} sm={4}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        boxShadow: 3,
                        // alignContent: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      // sx={{display:"flex",justifyContent:"center", alignItems:"center"}}
                    >
                      <label htmlFor="upload-photo">
                        <input
                          style={{ display: "none" }}
                          id="upload-photo"
                          name="upload-photo"
                          type="file"
                          accept="image/*"
                          onChange={onFileImageChange}
                        />
                        <Button
                          color="inherit"
                          // backgroundColor="#0E5F9C"
                          variant="contained"
                          component="span"
                        >
                          {selectedImage && (
                            <div>
                              <img
                                src={URL.createObjectURL(selectedImage)}
                                alt="Thumb"
                                width={"100%"}
                              />
                            </div>
                          )}
                          {!selectedImage && (
                            <img
                              src={browseFile}
                              alt="browseFile"
                              width={"100%"}
                            />
                          )}
                        </Button>
                      </label>
                      {/* <img src={browseFile} alt="browseFile" width={"100%"} /> */}
                    </Box>
                  </Grid>
                </Grid>

                <Box pt={3} pb={1}>
                  <Typography width="100%" fontWeight="500" variant="h7">
                    Copy of Identification Card or Passport*
                    สำเนาเอกสารแนบบัตรประชาชน/บัตรราชการ/หนังสือเดินทาง*
                  </Typography>
                </Box>
                <Grid container mt={2} spacing={1} sx={{ width: "100%" }}>
                  <Grid key={1} item xs={12} sm={8}>
                    <TextField
                      // defaultValue="filename"
                      // fullWidth
                      // className={FormControl}
                      value={selectedFile}
                      disabled={true}
                      sx={{
                        "& .MuiInputBase-input.Mui-disabled": {
                          WebkitTextFillColor: "#000000",
                        },
                        width: "100%",
                        boxShadow: 3,
                      }}
                    ></TextField>
                    {/* <TextField name="upload-photo" type="file" /> */}
                  </Grid>
                  <Grid
                    key={2}
                    item
                    xs={12}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <label htmlFor="upload-card">
                      <input
                        style={{ display: "none" }}
                        id="upload-card"
                        name="upload-card"
                        type="file"
                        accept="image/*,application/pdf"
                        onChange={onFileChange}
                      />
                      <Button
                        color="primary"
                        // backgroundColor="#0E5F9C"
                        variant="contained"
                        component="span"
                      >
                        Upload button
                      </Button>
                    </label>
                  </Grid>
                </Grid>

                <Box m={2}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <Typography fontWeight="500" variant="h7">
                        I agree to TEF Membership Terms and Conditions, to view
                        the full terms and conditions <a href="">click here</a>
                        <br />
                        TEF will do spot checks to verify the details declared
                        are correct.
                        <br />
                        ฉันยอมรับตามข้อกำหนดและเชื่อนไขสมาชิภ TEF
                        ดูรายละเอียดเพิ่มเติม<a href="">คลิกที่นี่</a>
                        <br />
                        ทางสนาคมกีฬขี่ม้าแห่งประเทศไทยจะดำเนินการตรวจสอบข้อมูลเพื่อยืนยันความถูกต้องของข้อมูลที่ได้รับ
                      </Typography>
                    }
                    //                     label={`I agree to TEF Membership Terms and Conditions, to view the full terms and conditions click here.
                    // TEF will do spot checks to verify the details declared are correct.
                    // ฉันยอมรับตามข้อกำหนดและเชื่อนไขสมาชิภ TEF ดูรายละเอียดเพิ่มเติมคลิกที่นี่
                    // ทางสนาคมกีฬขี่ม้าแห่งประเทศไทยจะดำเนินการตรวจสอบข้อมูลเพื่อยืนยันความถูกต้องของข้อมูลที่ได้รับ`} */
                    onClick={setAgree2}
                  />
                  {/* label="I agree to TEF Membership Terms and Conditions, to view the full terms and conditions click here.
TEF will do spot checks to verify the details declared are correct.
ฉันยอมรับตามข้อกำหนดและเชื่อนไขสมาชิภ TEF ดูรายละเอียดเพิ่มเติมคลิกที่นี่
ทางสนาคมกีฬขี่ม้าแห่งประเทศไทยจะดำเนินการตรวจสอบข้อมูลเพื่อยืนยันความถูกต้องของข้อมูลที่ได้รับ"
                  /> */}
                </Box>

                <Box display="flex" alignItems="right" justifyContent="right">
                  <Stack spacing={1} direction="row" alignItems="center">
                    <Button
                      color="primary"
                      variant="outlined"
                      size="large"
                      // type="submit"
                      // disabled={!checkAgree}
                      onClick={clickBackToLogin}
                    >
                      Back
                    </Button>
                    <Button
                      color="primary"
                      // variant="contained"
                      variant="outlined"
                      size="large"
                      // type="submit"
                      disabled={!(checkAgree1 && checkAgree2)}
                      onClick={validateData}
                    >
                      Submit
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default RegisterCustomerFEI_Thai;
