import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  TextField,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import { useFormik } from "formik";
import * as yup from "yup";
import "./index.scss";
import { register } from "../../../store/actions/authAction";
import { AppDispatch } from "../../../store/store";
const rightSidePicture = "./assets/Login/loginArtifact.png";
const LockDark = "./assets/Login/LockDark.png";
const TabletDark = "./assets/Login/TabletDark.png";
// const EmailIcon = "./assets/Login/Emailicon.png";
import { useDispatch } from "react-redux";
import RegisterEmailForm from "./RegisterEmailForm";

// interface FormValues {
//   email: string;
//   phone: string;
//   password: string;
//   confirmpassword: string;
// }

interface FormValues {
  email: string;
  phone: string;
  password: string;
  username?: string; // Add this if needed
  accountType: number; // Add this field
  confirmpassword: string; // Add this field if needed
}

const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const [activeTab, setActiveTab] = useState("By Email");
  const dispatch = useDispatch<AppDispatch>();
  // for otp field
  const length = 6;
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showOTPField, _setShowOTPField] = useState(false);
  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (index < length - 1 && value) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const countryOptions = [
    { code: "+855" },
    { code: "+84" },
    { code: "+86" },
    { code: "+66" },
  ];

  const [countryCode, setCountryCode] = useState("+855");

  // formik
  // const [submit, setSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, "Phone number must be digits")
      .min(7, "Phone number must be at least 7 digits")
      .max(11, "Phone number can be at most 11 digits")
      .required("Phone number is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formikregister = useFormik<FormValues>({
    initialValues: {
      email: "",
      phone: "",
      password: "",
      confirmpassword: "",
      accountType:1,

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
    // onSubmit: async (values) => {
    //   console.log("Form values:");

    // },
  });

  // register api implemenattion
  // const onSubmit1 = () => {
  //   console.log("Form values:");
  // };
  const handleSubmit = (values: FormValues) => {
    dispatch(
      register(
        {
          email: values.email,
          password: values.password,
          username: values.username, // Assuming this is available from `values`
          accountType: values.accountType, // Assuming this is available
          confirmpassword: values.confirmpassword, // Assuming this is available
        },
        (error, response) => {
          if (
            response &&
            (response.status === 201 || response.status === 200)
          ) {
            const resDetails = response.data;
            console.log("User registered successfully:", resDetails);
          } else if (error) {
            console.error("Registration failed:", error);
          }
        }
      )
    );
  };
  return (
    <section
      className={`RegisterBG1 min-h-screen  flex items-center justify-center ${
        theme.palette.mode === "dark" ? "darkThemeClass" : "lightThemeClass"
      }`}
      style={{
        background:
          theme.palette.mode === "dark"
            ? ""
            : "linear-gradient(90deg, #D9D7F8 0%, #F6E7F0 100%)",
      }}
    >
      <Container maxWidth="xl" className="p-0 m-0">
        <Grid
          container
          spacing={2}
          className="flex items-center justify-center"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className="flex flex-col items-center"
          >
            <Box
              className="rounded-3xl p-12 p-4 md:p-12  lg:p-12 w-full max-w-lg mx-auto"
              style={{
                background:
                  theme.palette.mode == "dark"
                    ? "rgba(54, 17, 85, 0.4)"
                    : "#FFFFFF66",
                border:
                  theme.palette.mode == "dark"
                    ? "2px solid rgba(255, 255, 255, 0.3)"
                    : "2px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              <Typography
                onClick={handleHome}
                variant="h4"
                className="cursor-pointer text-center pb-8 !font-semibold	!text-4xl"
                sx={{ color: theme.palette.secondary.contrastText }}
              >
                Crypto
              </Typography>
              <Typography
                variant="body1"
                className=" pb-10 !text-2xl !font-bold"
                sx={{
                  color: theme.palette.mode === "dark" ? "#FFFFFF" : "#3B1B63",
                }}
              >
                Register an Account !
              </Typography>

              <Box
              // component="form"
              // onSubmit={formikregister.handleSubmit}
              // noValidate
              // autoComplete="off"
              >
                <Grid item xs={12} sm={6} md={12}>
                  <div className="flex justify-between w-full items-center mb-5">
                    {["By Email", "By Phone"].map((tab) => (
                      <button
                        key={tab}
                        className={`px-4 py-1 text-base w-6/12	 ${
                          activeTab === tab && theme.palette.mode === "dark"
                            ? "font-medium border-b-2 border-[#ffffff]"
                            : activeTab === tab &&
                              theme.palette.mode === "light"
                            ? "font-medium border-b-2 border-[#089FF9]"
                            : "border-b-2 font-light border-[transparent]"
                        } focus:outline-none`}
                        style={{
                          color:
                            theme.palette.mode === "dark"
                              ? "#FFFFFF"
                              : "#089FF9",
                        }}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </Grid>

                {activeTab === "By Email" ? (
                  <RegisterEmailForm />
                ) : (
                  <>
                    <InputLabel
                      htmlFor="outlined-adornment-amount"
                      className="!text-sm !font-normal !pb-1"
                      sx={{
                        color:
                          theme.palette.mode === "dark" ? "#FFFFFF" : "#717597",
                      }}
                    >
                      Phone Number
                    </InputLabel>

                    <TextField
                      fullWidth
                      margin="normal"
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formikregister.values.phone}
                      onChange={formikregister.handleChange}
                      onBlur={formikregister.handleBlur}
                      placeholder="Phone"
                      className="!mt-0"
                      sx={{
                        marginBottom: formikregister.errors.phone
                          ? "0px"
                          : "24px",
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconButton
                              edge="start"
                              sx={{
                                backgroundColor: "transparent",
                                "&:hover": {
                                  backgroundColor: "transparent",
                                },
                                "& .MuiTouchRipple-root": {
                                  display: "none",
                                },
                              }}
                              className="divider-after"
                            >
                              <img
                                src={TabletDark}
                                alt="Phone Icon"
                                className="w-5 h-5"
                              />
                            </IconButton>
                            <FormControl
                              variant="outlined"
                              className="!mr-2 !min-w-[80px]"
                              sx={{
                                border: "none",
                                "& .MuiOutlinedInput-root": {
                                  border: "none",
                                  padding: 0,
                                },
                                "& .MuiSelect-outlined": {
                                  padding: 0,
                                },
                              }}
                            >
                              <Select
                                labelId="country-select-label"
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="!rounded-lg"
                                sx={{
                                  border: "none",
                                  padding: "0px",
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                  },
                                }}
                              >
                                {countryOptions.map((country) => (
                                  <MenuItem
                                    key={country.code}
                                    value={country.code}
                                  >
                                    {country.code}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </InputAdornment>
                        ),
                        className: "!rounded-lg",
                      }}
                      InputLabelProps={{ className: "text-gray-400" }}
                    />
                    {formikregister.touched.phone &&
                      formikregister.errors.phone && (
                        <Typography color={"error"} variant="caption">
                          {formikregister.errors.phone}
                        </Typography>
                      )}

                    {!showOTPField && (
                      <React.Fragment>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          className="!text-sm !font-normal !pb-1"
                          sx={{
                            color:
                              theme.palette.mode === "dark"
                                ? "#FFFFFF"
                                : "#717597",
                          }}
                        >
                          Password
                        </InputLabel>
                        <TextField
                          fullWidth
                          margin="normal"
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formikregister.values.password}
                          onChange={formikregister.handleChange}
                          onBlur={formikregister.handleBlur}
                          placeholder="Password"
                          className="!mt-0"
                          sx={{
                            marginBottom: formikregister.errors.password
                              ? "0px"
                              : "24px",
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconButton
                                  edge="start"
                                  sx={{
                                    backgroundColor: "transparent",
                                    "&:hover": {
                                      backgroundColor: "transparent",
                                    },
                                    "& .MuiTouchRipple-root": {
                                      display: "none",
                                    },
                                  }}
                                  className="divider-after"
                                >
                                  <img
                                    src={LockDark}
                                    alt="Lock Icon"
                                    className="w-5 h-5"
                                  />
                                </IconButton>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  edge="end"
                                  onClick={handleShowPasswordToggle}
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                            className: "!rounded-lg",
                          }}
                          InputLabelProps={{ className: "text-gray-400" }}
                        />

                        {formikregister.touched.password &&
                          formikregister.errors.password && (
                            <Typography color={"error"} variant="caption">
                              {formikregister.errors.password}
                            </Typography>
                          )}
                      </React.Fragment>
                    )}

                    {!showOTPField && (
                      <React.Fragment>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          className="!text-sm !font-normal !pb-1"
                          sx={{
                            color:
                              theme.palette.mode === "dark"
                                ? "#FFFFFF"
                                : "#717597",
                          }}
                        >
                          Confirm password
                        </InputLabel>
                        <TextField
                          fullWidth
                          margin="normal"
                          id="confirmpassword"
                          name="confirmpassword"
                          type={showPassword ? "text" : "password"}
                          value={formikregister.values.confirmpassword}
                          onChange={formikregister.handleChange}
                          onBlur={formikregister.handleBlur}
                          placeholder="Confirm Password"
                          className="!mt-0"
                          sx={{
                            marginBottom: formikregister.errors.confirmpassword
                              ? "0px"
                              : "24px",
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconButton
                                  edge="start"
                                  sx={{
                                    backgroundColor: "transparent",
                                    "&:hover": {
                                      backgroundColor: "transparent",
                                    },
                                    "& .MuiTouchRipple-root": {
                                      display: "none",
                                    },
                                  }}
                                  className="divider-after"
                                >
                                  <img
                                    src={LockDark}
                                    alt="Lock Icon"
                                    className="w-5 h-5"
                                  />
                                </IconButton>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  edge="end"
                                  onClick={handleShowPasswordToggle}
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                            className: "!rounded-lg",
                          }}
                          InputLabelProps={{ className: "text-gray-400" }}
                        />
                        {formikregister.touched.confirmpassword &&
                          formikregister.errors.confirmpassword && (
                            <Typography color={"error"} variant="caption">
                              {formikregister.errors.confirmpassword}
                            </Typography>
                          )}
                      </React.Fragment>
                    )}

                    {showOTPField && (
                      <React.Fragment>
                        <InputLabel
                          htmlFor="outlined-adornment-amount"
                          className="!text-sm !font-normal"
                          sx={{
                            color:
                              theme.palette.mode === "dark"
                                ? "#FFFFFF"
                                : "#717597",
                          }}
                        >
                          OTP
                        </InputLabel>
                        <Box
                          display="flex"
                          justifyContent="center"
                          gap={2}
                          mb={1}
                        >
                          {Array.from({ length }).map((_, index) => (
                            <TextField
                              key={index}
                              inputRef={(el) => (inputsRef.current[index] = el)}
                              value={otp[index]}
                              onChange={(e) =>
                                handleChange(e.target.value, index)
                              }
                              onKeyDown={(e) => handleKeyDown(e, index)}
                              variant="outlined"
                              inputProps={{
                                maxLength: 1,
                                style: {
                                  textAlign: "center",
                                  padding: "6.5px 6px",
                                },
                              }}
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  border: "none",
                                  outline: "none",
                                  borderRadius: "0",
                                  background:
                                    otp[index] && theme.palette.mode === "dark"
                                      ? "linear-gradient(180deg, rgba(65, 44, 118, 0) 0%, #412C76 100%)"
                                      : otp[index] &&
                                        theme.palette.mode === "light"
                                      ? "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)"
                                      : "transparent",
                                  borderBottom:
                                    otp[index] && theme.palette.mode === "dark"
                                      ? "3px solid #FFFFFF"
                                      : otp[index] &&
                                        theme.palette.mode === "light"
                                      ? "3px solid #232744"
                                      : theme.palette.mode === "dark"
                                      ? "3px solid #FFFFFF20"
                                      : "3px solid #23274433",
                                  "&:hover fieldset": {
                                    border: "none",
                                  },
                                  "&.Mui-focused fieldset": {
                                    border: "none",
                                  },
                                  "& fieldset": {
                                    border: "none",
                                  },
                                },
                              }}
                            />
                          ))}
                        </Box>
                        <Typography
                          variant="body2"
                          className="text-center !mt-6 !mb-8 !text-sm"
                          sx={{
                            color:
                              theme.palette.mode === "dark"
                                ? "#FFFFFF"
                                : "#232744",
                          }}
                        >
                          (60s){" "}
                          <a
                            href="#"
                            className="text-indigo-400"
                            style={{
                              color:
                                theme.palette.mode === "dark"
                                  ? "#fff"
                                  : "#039FFB",
                            }}
                          >
                            Resend
                          </a>
                        </Typography>
                      </React.Fragment>
                    )}
                    <Box className="items-center mt-4">
                      {/* {!showOTPField && (
                <Button
               onClick={() => setShowOTPField(true)}
                  variant="outlined"
                  className="w-full !mb-4 !normal-case h-11 !rounded-lg"
                >
                  Continue with OTP
                </Button>
                  )} */}

                      <Button
                        // type="submit"
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="w-full !normal-case h-11 !rounded-lg"
                        sx={{
                          background:
                            "linear-gradient(90deg, #1DA1F2 0%, #009FFC 100%)",
                          "&:hover": {
                            background:
                              "linear-gradient(90deg, #1DA1F2 0%, #009FFC 100%)",
                          },
                        }}
                        // disabled={formikregister.isSubmitting}

                        // onClick={() => setSubmitted(true)}

                        // onClick={() => setShowOTPField(true)}
                      >
                        {/* {formikregister.isSubmitting ? "Loading..." : "Confirm"} */}
                        Confirm
                      </Button>
                    </Box>
                  </>
                )}
              </Box>

              <Typography
                variant="body2"
                className="text-center !mt-4 !text-sm"
                sx={{
                  color: theme.palette.mode === "dark" ? "#FFFFFF" : "#232744",
                }}
              >
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-indigo-400"
                  style={{ color: "#FF6060" }}
                >
                  Sign in here
                </a>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className="hidden lg:flex justify-center items-center"
          >
            <img
              src={rightSidePicture}
              alt="Right Side Image"
              className="w-full max-w-2xl"
            />
          </Grid>
        </Grid>
      </Container>

      <style>
        {`





        `}
      </style>
    </section>
  );
};

export default RegisterForm;
