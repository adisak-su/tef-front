import React, { useRef, useState } from "react";
import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import CustomizedTables from "./CustomizedTables";
import BlankCard from "src/components/shared/BlankCard";

const SamplePage = () => {
  // Header align: "center" / "right" / "left" ,
  const headerItems = [
    {
      name: "Dessert (100g serving)",
      align: "center",
    },
    {
      name: "Calories",
      align: "right",
    },
    {
      name: "Fat",
      align: "right",
    },
    {
      name: "Carbs",
      align: "right",
    },
    {
      name: "Protein",
      align: "right",
    },
    {
      name: "จัดการ",
      align: "center",
    },
  ];
  //  fetch มากจาก Api
  const dataRows = [
    {
      id: 11,
      name: "Frozen yoghurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      id: 2,
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
    },
    {
      id: 3,
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 24,
      protein: 6.0,
    },
    {
      id: 4,
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
    },
    {
      id: 5,
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
    },
    {
      id: 6,
      name: "Frozen yoghurt2",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      id: 7,
      name: "Ice cream sandwich2",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
    },
    {
      id: 8,
      name: "Eclair2",
      calories: 262,
      fat: 16.0,
      carbs: 24,
      protein: 6.0,
    },
    {
      id: 9,
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
    },
    {
      id: 10,
      name: "Gingerbread2",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
    },
  ].sort((a, b) => (a.id < b.id ? -1 : 1));

  // ปรับแก้ การจัดตำแหน่ง
  function mapDataToDataRow(obj) {
    let tmpDatas = [];
    let data = {};
    Object.entries(obj).forEach(([key, value]) => {
      switch (key) {
        case "id":
          data = createDataRowField(key, value, "center", false);
          tmpDatas.push(data);
          break;
        case "name":
          data = createDataRowField(key, value, "left");
          tmpDatas.push(data);
          break;
        default:
          data = createDataRowField(key, value, "right");
          tmpDatas.push(data);
          break;
      }
      return tmpDatas;
    });
    data = createDataRowField("manage", ":", "center", true, "button");
    tmpDatas.push(data);
    return tmpDatas;
  }

  function createDataRowField(
    name,
    value,
    align,
    visible = true,
    type = "text"
  ) {
    return { name, value, align, type, visible };
  }

  function mapDataToDataTable(items) {
    let tmpDatas = [];
    let data = {};
    items.forEach((element) => {
      data = mapDataToDataRow(element);

      tmpDatas.push(data);
    });
    return tmpDatas;
  }

  const rowItems = mapDataToDataTable(dataRows);

  const handleActionClickView = (id, message) => {
    alert("id : " + id + " <=> Message : " +message )
    // let tmpanchorEls = [...anchorEls];
    // tmpanchorEls[id] = event.target;
    // setAnchorEls(tmpanchorEls);
  };
   
  return (
    <PageContainer
      title="Sample Page"
      description="this is Sample page"
      sx={{ maxWidth: "100%", overflowX: "auto" }}
    >
      <DashboardCard
        title="Sample Page"
        sx={{ maxWidth: "100%", overflowX: "auto" }}
      >
        {CustomizedTables(headerItems, rowItems, handleActionClickView)}
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
