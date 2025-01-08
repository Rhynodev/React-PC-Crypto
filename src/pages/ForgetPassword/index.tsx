
import { useTheme } from '@mui/material';
import CommonPage from '../../components/pages/CommonPage';
import ForgetPasswordForm from './components/ForgetPasswordForm';


const RegisterPage: React.FC = () => {
    const theme = useTheme();
    return (
    <CommonPage>
      <div  className={`LoginBG2  ${
        theme.palette.mode === "dark" ? "darkThemeClass" : "lightThemeClass"
      }`}>
      <ForgetPasswordForm />
      </div>
<style>
  {`
       .LoginBG2 {
            position: relative;
          }
          .LoginBG2.darkThemeClass::before {
            content: '';
            position: absolute;
            top:0;
            right: 0;
            background: linear-gradient(90deg, #9400D3 0%, #4B0082 100%);
            opacity: 1;
            z-index: -1;
            width: 500px;
            height: 50%;
            filter: blur(200px);
          }
  
          @media (max-width:768px) {
        .LoginBG2::before {
             content: '';
            position: absolute;
            top:0;
            right: 0;
            background: transparent;
            opacity: 1;
            z-index: -1;
            z-index: -1;
            width: 100% !important;
            height: 100% !important;
            filter: blur(400px);
        }
}
  
  `}
</style>


    </CommonPage>
    );
};
export default RegisterPage;
