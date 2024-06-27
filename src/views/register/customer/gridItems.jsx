import {
  FormControl,
  Grid,
  Typography,
  TextField,
  Box,
  MenuItem,
  Select,
} from "@mui/material";
// import { v4 as uuidv4 } from "uuid";

const genGridGroup = (props, helperTexts, inputRef) => {
  return (
    <Grid container spacing={1} sx={{ width: "100%", marginTop: "20px" }}>
      {props.map((item) => genGridItem(item, helperTexts, inputRef))}
    </Grid>
  );
};

const genGridItem = (props, helperTexts, inputRef) => {
  // const { key, id, type, value, label, placeholder, helperText, required, inputRef } =
  //   props;
  const {
    key,
    id,
    type,
    value,
    label,
    placeholder,
    menus,
    required,
    maxLength,
    sizeGrid,
    onFieldChange,
  } = props;
  // if (maxLength) console.log(Object.prototype.toString.call(maxLength));
  // console.log(props)
  return (
    <Grid key={key} item xs={12} sm={4 * sizeGrid}>
      <FormControl fullWidth>
        <Typography fontWeight="700" variant="h7" pb={1}>
          {label}
        </Typography>
        {type === "select" && (
          <FormControl fullWidth>
            <Select
              key={key}
              id={id}
              name={id}
              type={type}
              defaultValue={value}
              // value={formData.category}
              variant="outlined"
              autoComplete="off"
              // error={helperTexts[key] !== ""}
              // helperText={helperTexts[key]}
              // placeholder={placeholder}
              onChange={onFieldChange}
              // required={required}
              inputRef={(el) => (inputRef.current[key] = el)}
              // inputProps={{ maxLength: maxLength }}
              fullWidth
              sx={{
                boxShadow: 3,
              }}
            >
              <MenuItem value="">
            <em>None</em>
          </MenuItem>
              {menus.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
              {/* <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem> */}
            </Select>
          </FormControl>
        )}
        {type !== "select" && (
          <TextField
            key={key}
            id={id}
            type={type}
            defaultValue={value}
            variant="outlined"
            autoComplete="off"
            error={helperTexts[key] !== ""}
            helperText={helperTexts[key]}
            placeholder={placeholder}
            onChange={onFieldChange}
            required={required}
            inputRef={(el) => (inputRef.current[key] = el)}
            inputProps={{ maxLength: maxLength }}
            fullWidth
            sx={{
              boxShadow: 3,
            }}
            // inputProps={{ maxLength: maxLength , pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}" }}
            // inputProps={{ maxLength: {maxLength} }}
          />
        )}
      </FormControl>
    </Grid>
  );
};

export default genGridGroup;
