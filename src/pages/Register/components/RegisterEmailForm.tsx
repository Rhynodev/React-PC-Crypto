import React, { useState, useRef,  } from "react";
import {
  Box,Typography,useTheme,TextField,Button,IconButton,InputAdornment,} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import { useFormik } from "formik";
import * as yup from "yup";
import "./index.scss";
import { register } from "../../../store/actions/authAction";
import { AppDispatch } from "../../../store/store";
// const rightSidePicture = "./assets/Login/loginArtifact.png";
const LockDark = "./assets/Login/LockDark.png";
// const TabletDark = "./assets/Login/TabletDark.png";
const EmailIcon = "./assets/Login/Emailicon.png";
import { useDispatch } from "react-redux";

interface FormValues {
  email: string;
  username: string;
  password: string;
  confirmpassword: string;
  accountType: number;
}
const RegisterEmailForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  // const navigate = useNavigate();
  // const handleHome = () => {
  //   navigate("/");
  // };
  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  // const [activeTab, setActiveTab] = useState("By Email");
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

  // const countryOptions = [
  //   { code: "+855" },
  //   { code: "+84" },
  //   { code: "+86" },
  //   { code: "+66" },
  // ];

  // const [countryCode, setCountryCode] = useState("+855");

  // formik
  // const [submit, setSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),

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
      username:"",
      accountType: 1,
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
    // onSubmit: async (values) => {
    //   console.log("Form values:");

    // },
  });

  // const handleSubmit = (values: FormValues) => {
  //   dispatch(
  //     register(
  //       {
  //         accountType: 1,
  //         username: values.email,
  //         password: values.password,
  //         confirmpassword: values.confirmpassword,
  //       },
  //       (error, response) => {
  //         console.log("responseresponse", error);
  //         if (response && response.responseCode === 0) {
  //           // console.log("User registered successfully:", resDetails);
  //         } else if (error) {
  //           console.log(response?.responseMessage);
  //         }
  //       }
  //     )
  //   );
  // };

  const handleSubmit = (values: FormValues) => {
    dispatch(
      register(
        {
          email: values.email,
          username: values.username,
          password: values.password,
          confirmpassword: values.confirmpassword,
          accountType: values.accountType, // Provide an appropriate value
        },
        (error, response) => {
          if (response && (response.status === 201 || response.status === 200)) {
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
    <>
      <form id="frm" onSubmit={formikregister.handleSubmit}>
        <InputLabel
          htmlFor="outlined-adornment-amount"
          className="!text-sm !font-normal !pb-1"
          sx={{
            color: theme.palette.mode === "dark" ? "#FFFFFF" : "#717597",
          }}
        >
          Email
        </InputLabel>
        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          type="email"
          value={formikregister.values.email}
          onChange={formikregister.handleChange}
          onBlur={formikregister.handleBlur}
          placeholder="Email"
          className="!mt-0"
          sx={{
            marginBottom: formikregister.errors.email ? "0px" : "24px",
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
                  <img src={EmailIcon} alt="Email Icon" className="w-5 h-5" />
                </IconButton>
              </InputAdornment>
            ),
            className: "!rounded-lg",
          }}
          InputLabelProps={{ className: "text-gray-400" }}
        />

        {formikregister.touched.email && formikregister.errors.email && (
          <Typography color={"error"} variant="caption">
            {formikregister.errors.email}
          </Typography>
        )}

        {!showOTPField && (
          <React.Fragment>
            <InputLabel
              htmlFor="outlined-adornment-amount"
              className="!text-sm !font-normal !pb-1"
              sx={{
                color: theme.palette.mode === "dark" ? "#FFFFFF" : "#717597",
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
                marginBottom: formikregister.errors.password ? "0px" : "24px",
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
                      <img src={LockDark} alt="Lock Icon" className="w-5 h-5" />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={handleShowPasswordToggle}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
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
                color: theme.palette.mode === "dark" ? "#FFFFFF" : "#717597",
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
                      <img src={LockDark} alt="Lock Icon" className="w-5 h-5" />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={handleShowPasswordToggle}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
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
                color: theme.palette.mode === "dark" ? "#FFFFFF" : "#717597",
              }}
            >
              OTP
            </InputLabel>
            <Box display="flex" justifyContent="center" gap={2} mb={1}>
              {Array.from({ length }).map((_, index) => (
                <TextField
                  key={index}
                  inputRef={(el) => (inputsRef.current[index] = el)}
                  value={otp[index]}
                  onChange={(e) => handleChange(e.target.value, index)}
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
                          : otp[index] && theme.palette.mode === "light"
                          ? "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)"
                          : "transparent",
                      borderBottom:
                        otp[index] && theme.palette.mode === "dark"
                          ? "3px solid #FFFFFF"
                          : otp[index] && theme.palette.mode === "light"
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
                color: theme.palette.mode === "dark" ? "#FFFFFF" : "#232744",
              }}
            >
              (60s){" "}
              <a
                href="#"
                className="text-indigo-400"
                style={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#039FFB",
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
              background: "linear-gradient(90deg, #1DA1F2 0%, #009FFC 100%)",
              "&:hover": {
                background: "linear-gradient(90deg, #1DA1F2 0%, #009FFC 100%)",
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
      </form>
    </>
  );
};
export default RegisterEmailForm;
