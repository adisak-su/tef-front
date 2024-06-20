import React, { useEffect, useRef, useState } from "react";
import { Link, json } from "react-router-dom";
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
} from "@mui/material";

// components
import PageContainer from "src/components/container/PageContainer";
import Logo from "src/layouts/full/shared/logo/Logo";
// import TEF_Logo from "src/layouts/full/shared/logo/LogoTEF";
import logo_TEF from "src/assets/images/logos/TEF_Logo.png";
import logo_TEF_Text from "src/assets/images/logos/TEF_Logo_text.png";
import genGridGroup from "./gridItems";
// import TEF_Logo from "src/assets/images/logos/TEF_Logo.png";
// import TEFLogo from "./logo";

import { isValidate, validEmail, validPassword } from "./Regex.jsx";
import { v4 as uuidv4 } from "uuid";

// import swal from "sweetalert";
import Swal from "sweetalert2";
import { CheckBox } from "@mui/icons-material";

const RegisterCustomerFEI_Thai = () => {
  const onFieldChange = (event) => {
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;
    const type = event.currentTarget.type;

    const tmpData = [...dataBlock];
    const elem = tmpData.find((item) => item.id === id);
    if (elem) {
      elem.value = value;
      setDataBlock(tmpData);
    }
  };

  const maxFields = 20;
  const dataFieldsRef = useRef([]);
  const [helperTextFields, setErrorMessage] = useState(
    Array(maxFields).fill("")
  );

  const createInitDataBlock = (items) => {
    let tmpItems = [];
    items.forEach((element, index) => {
      let itemNo = index + 1;
      let data = {
        key: itemNo,
        id: "field" + itemNo,
        type: element?.type ? element?.type : "text",
        value: element?.value ? element?.value : "",
        label: element?.label ? element.label : "",
        placeholder: element?.placeholder ? element.placeholder : "",
        required: element?.required ? element?.required : false,
        maxLength: element?.maxLength ? element.maxLength : 50,
      };
      tmpItems.push(data);
    });
    return tmpItems;
  };

  const initDataBlock = [
    // Personal
    {
      type: "text",
      value: "",
      label: "First Name",
      placeholder: "ชื่อ",
    },
    {
      type: "text",
      label: "Last Name",
      placeholder: "นามสกุล",
      required: true,
    },
    {
      type: "date",
      label: "Date of birth",
      placeholder: "วันเกิด",
      required: true,
    },
    {
      type: "text",
      label: "Gender",
      placeholder: "เพศ",
      required: true,
    },
    {
      type: "tel",
      // type: "number",
      value: "",
      label: "Phone",
      placeholder: "เบอร์ติดต่อ",
      required: true,
      maxLength: 12,
    },
    {
      type: "email",
      value: "",
      label: "Contact E-mail",
      placeholder: "อีเมลเพื่อรับข่าวสาร",
      required: true,
    },
    {
      type: "text",
      label: "Address",
      placeholder: "ที่อยู่",
      required: true,
    },
    {
      type: "number",
      label: "Post Code",
      placeholder: "รหัสไปรษณีย์",
      required: true,
    },
    {
      type: "text",
      label: "Province",
      placeholder: "จังหวัด",
      required: true,
    },
    // Parent
    {
      type: "text",
      value: "",
      label: "First Name",
      placeholder: "ชื่อ",
    },
    {
      type: "text",
      label: "Last Name",
      placeholder: "นามสกุล",
      required: true,
    },
    {
      type: "date",
      label: "Date of birth",
      placeholder: "วันเกิด",
      required: true,
    },
    {
      type: "text",
      label: "Gender",
      placeholder: "เพศ",
      required: true,
    },
    {
      type: "tel",
      // type: "number",
      value: "",
      label: "Phone",
      placeholder: "เบอร์ติดต่อ",
      required: true,
      maxLength: 12,
    },
    {
      type: "email",
      value: "",
      label: "Contact E-mail",
      placeholder: "อีเมลเพื่อรับข่าวสาร",
      required: true,
    },
    {
      type: "text",
      label: "Address",
      placeholder: "ที่อยู่",
      required: true,
    },
    {
      type: "number",
      label: "Post Code",
      placeholder: "รหัสไปรษณีย์",
      required: true,
    },
    {
      type: "text",
      label: "Province",
      placeholder: "จังหวัด",
      required: true,
    },
  ];

  const [dataBlock, setDataBlock] = useState(
    createInitDataBlock(initDataBlock)
  );

  // For UI
  function genInitDataBlock(datas, start, end) {
    let tmpDataBlock = [];
    for (let index = start - 1; index < end; index++) {
      let element = datas[index];
      tmpDataBlock.push(element);
    }
    return tmpDataBlock;
  }

  const initDataBlock1 = genInitDataBlock(dataBlock, 1, 9);
  const initDataBlock2 = genInitDataBlock(dataBlock, 10, 18);
  const initDataBlock3 = genInitDataBlock(dataBlock, 10, 18);

  const [checkAgree, setCheckAgree] = useState(false);
  const setAgree = (event) => {
    const isChecked = event.target.checked;
    setCheckAgree(isChecked);
    // console.table(helperTextFields)
  };

  const [checkAgree1, setCheckAgree1] = useState(false);
  const setAgree1 = (event) => {
    const isChecked = event.target.checked;
    setCheckAgree1(isChecked);
    // console.table(helperTextFields)
  };

  const [checkAgree2, setCheckAgree2] = useState(false);
  const setAgree2 = (event) => {
    const isChecked = event.target.checked;
    setCheckAgree2(isChecked);
    // console.table(helperTextFields)
  };

  const [checkAgree3, setCheckAgree3] = useState(false);
  const setAgree3 = (event) => {
    const isChecked = event.target.checked;
    setCheckAgree3(isChecked);
    // console.table(helperTextFields)
  };

  const [checkAgree4, setCheckAgree4] = useState(false);
  const setAgree4 = (event) => {
    const isChecked = event.target.checked;
    setCheckAgree4(isChecked);
    // console.table(helperTextFields)
  };


  const validateData = (event) => {
    event.preventDefault();
    // console.log("Data is ");
    // console.table(dataBlock);

    let statusValidateData = true;
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
    // console.table(tmpMessages)
    setDataBlock(tmpData);
    // setErrorMessage(tmpMessages);

    statusValidateData = true;
    if (statusValidateData) {
      Swal.fire({
        icon: "success",
        title: "ขอบคุณที่ลงทะเบียนสโมสร!",
        //       html: `
        //   You can use <b>bold text</b>,
        //   <a href="#" autofocus>links</a>,
        //   and other HTML tags
        // `,
        html: `<div style="text-align: left;">
<span>ข้อมูลการลงทะเบียนสโมสรของคุณได้รับการบันทึกเรียบร้อยแล้ว<br>
ขอขอบคุณที่เลือกเป็นส่วนหนึ่งของสมาคมกีฬาขี่ม้าแห่งประเทศไทย
เราจะดำเนินการตรวจสอบข้อมูลและติดต่อกลับไปยังสโมสรของคุณโดยเร็วที่สุด หากมีคำถามหรือต้องการข้อมูลเพิ่มเติม สามารถติดต่อเราได้ที่ <a href="">[ข้อมูลการติดต่อ]</a>
<br>ขอขอบคุณอีกครั้งที่ร่วมเป็นส่วนหนึ่งในสมาคมกีฬาขี่ม้าแห่งประเทศไทย<br><br>
ด้วยความเคารพ<br>
ทีมงานสมาคมกีฬาขี่ม้าแห่งประเทศไทย
</div>`,
        // confirButtonColor: "#37689A",
        confirButtonColor: "primary",
        confirmButtonText: "close",
        position: "top",
        timer: 5000,
        // closeOnClickOutside: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Data validate fail!",
        text: "Please check your data information.",
        // confirButtonColor: "#d33",
        confirmButtonText: "close",
        position: "top",
        timer: 5000,
      });
    }
    // console.log("Data is ");
    // console.table(setDataBlock);
  };
  useEffect(() => {
    // console.table(setDataBlock);
    // console.log(checkAgree);
    // console.table(dataFieldsRef);
    console.log("DataBlock");
    console.table(dataBlock);
  }, [setDataBlock, checkAgree]);

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
                  FEI Athlete Registration 2024
                </Typography>
                <Typography width="100%" fontWeight="700" variant="h3">
                  แบบฟอร์มลงทะเบียนนักกีฬา ภายใต้สมาคมกีฬาขี่ม้าแห่งประเทศไทย
                </Typography>
              </Box>
              <Stack
                sx={{
                  p: 2,
                  backgroundColor: "white",
                  border: "2px solid grey",
                }}
              >
                <Box pt={2} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography fontWeight="700" variant="h5">
                    Personal Information*
                  </Typography>
                  <Typography fontWeight="700" variant="h6">
                    ข้อมูลส่วนตัว*
                  </Typography>
                </Box>
                {genGridGroup(initDataBlock1, helperTextFields, dataFieldsRef)}
                <Box pt={3} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography width="100%" fontWeight="700" variant="h5">
                    Discipline*
                  </Typography>
                  <Typography width="100%" fontWeight="700" variant="h6">
                    ประเภท*
                  </Typography>
                </Box>
                <Typography width="100%" fontWeight="700" variant="h7" mt={1}>
                  NOTE: The registration fee for each discipline is 450 THB. /
                  อัตราค่ลงทะเบียนประเภทละ 450 บาท
                </Typography>
                <Grid
                  container
                  spacing={1}
                  sx={{ width: "100%", marginTop: "0px" }}
                >
                  <Grid key={1} item xs={12} sm={6} lg={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Typography width="100%" fontWeight="700" variant="h7">
                    Jumping กระโดดข้ามเครื่องกีดขวาง
                  </Typography>}
                    // {/* label="Jumping กระโดดข้ามเครื่องกีดขวาง" */}
                    onClick={setAgree1}
                  />
                  </Grid>
                  <Grid key={1} item xs={12} sm={6} lg={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Typography width="100%" fontWeight="700" variant="h7">
                      Dressage ศิลปะการบังคับม้า
                    </Typography>}
                      // label="Dressage ศิลปะการบังคับม้า"
                    onClick={setAgree2}
                  />
                  </Grid>
                  <Grid key={1} item xs={12} sm={6} lg={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Typography width="100%" fontWeight="700" variant="h7">
                      Eventing อีเว้นติ้ง
                    </Typography>}
                      // label="Eventing อีเว้นติ้ง"
                    onClick={setAgree3}
                  />
                  </Grid>
                  <Grid key={1} item xs={12} sm={6} lg={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Typography width="100%" fontWeight="700" variant="h7">
                      Endurance การขี่ม้าระยะทาง
                    </Typography>}
                      // label="Endurance การขี่ม้าระยะทาง"
                    onClick={setAgree4}
                  />
                  </Grid>
                </Grid>
                {/* {genGridGroup(initDataBlock2, helperTextFields, dataFieldsRef)} */}
                <Box pt={3} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography width="100%" fontWeight="700" variant="h5">
                    Parent/Guardian Information*
                  </Typography>
                  <Typography width="100%" fontWeight="700" variant="h6">
                    ข้อมูลผู้ปกครอง*
                  </Typography>
                </Box>
                {genGridGroup(initDataBlock2, helperTextFields, dataFieldsRef)}
                <Box m={2}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Typography fontWeight="700" variant="h6">
                      I agree to TEF Membership Terms and Conditions, to view the full terms and conditions <a href="">click here</a><br/>
                      TEF will do spot checks to verify the details declared are correct.<br/>
                      ฉันยอมรับตามข้อกำหนดและเชื่อนไขสมาชิภ TEF ดูรายละเอียดเพิ่มเติม<a href="">คลิกที่นี่</a><br/>
                      ทางสนาคมกีฬขี่ม้าแห่งประเทศไทยจะดำเนินการตรวจสอบข้อมูลเพื่อยืนยันความถูกต้องของข้อมูลที่ได้รับ
                    </Typography>}
//                     label={`I agree to TEF Membership Terms and Conditions, to view the full terms and conditions click here.
// TEF will do spot checks to verify the details declared are correct.
// ฉันยอมรับตามข้อกำหนดและเชื่อนไขสมาชิภ TEF ดูรายละเอียดเพิ่มเติมคลิกที่นี่
// ทางสนาคมกีฬขี่ม้าแห่งประเทศไทยจะดำเนินการตรวจสอบข้อมูลเพื่อยืนยันความถูกต้องของข้อมูลที่ได้รับ`} */
                    onClick={setAgree}
                  />
                  {/* label="I agree to TEF Membership Terms and Conditions, to view the full terms and conditions click here.
TEF will do spot checks to verify the details declared are correct.
ฉันยอมรับตามข้อกำหนดและเชื่อนไขสมาชิภ TEF ดูรายละเอียดเพิ่มเติมคลิกที่นี่
ทางสนาคมกีฬขี่ม้าแห่งประเทศไทยจะดำเนินการตรวจสอบข้อมูลเพื่อยืนยันความถูกต้องของข้อมูลที่ได้รับ"
                  /> */}
                </Box>

                <Box display="flex" alignItems="center" justifyContent="center">
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    // type="submit"
                    disabled={!checkAgree}
                    onClick={validateData}
                  >
                    Submit
                  </Button>
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
