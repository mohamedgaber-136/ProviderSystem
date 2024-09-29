


// @mui material components
import Card from "@mui/material/Card";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/5_aasasq.jpg";
import brand from "assets/images/Provider-Logo.png";
import { useNavigate } from "react-router-dom";
function Basic() {
const navigate = useNavigate()

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
    
            <MDBox mt={4} mb={1} onClick={()=>navigate('/dashboard')}>
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
