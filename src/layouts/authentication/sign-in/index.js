import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
// Images
import bgImage from "assets/images/5_aasasq.jpg";
import brand from "assets/images/Provider-Logo.png";
import { useNavigate } from "react-router-dom";
// import { setUser } from "Redux/authSlice";
// import { useDispatch } from 'react-redux';
import axios from "axios";
function Basic() {
  const navigate = useNavigate();
  // const dispatch= useDispatch()
  const [rememberMe, setRememberMe] = useState(false);
  // LoginFunction  -------------------------
  // const login = async (values) => {
  //   try {
  //     const response = await axios.post(
  //       'https://tawreed.thebrandmakerz.com/api/loginUser',
  //       values,
  //       { headers: { 'Content-Type': 'application/json' } }
  //     );

  //     // setToken presist state ---------------------------
  //     dispatch(setUser({accessToken:response.data.data.access_token,user:response.data.data.user}))
  //     navigate(-1)
  //     setCheckLogin(true)
  //   } catch (error) {
  //     setCheckLogin(false)
  //   }
  // };
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="white"
          bgColor="white"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDBox component="img" src={brand} alt="Brand" width="100%" />
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" justifyContent='space-between' ml={-1}>
            <MDBox display="flex" alignItems="center"  ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                 fontSize='1rem'
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
              </MDBox>
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                 fontSize='1rem'
                onClick={() => navigate("/authentication/reset")}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp; Forget Password
              </MDTypography>
            </MDBox>
            
            <MDBox mt={4} mb={1} onClick={() => navigate("/dashboard")}>
              <MDButton variant="gradient" color="primary" fullWidth>
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
