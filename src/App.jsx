// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import GuidelinesPage from './Guidelines/GuidelinesPage';
import Menu from './Navbar/Menu';
import QuestionsMain from './Questions/QuestionsMain';
import CodeMenu from './Navbar/CodeMenu';
import CodeEditor from './CodeEditors/CodeEditor';

// import Login from './components/Login/Login';
// import Menu from './components/Menu/Menu';
// import SystemCheck from './components/SystemCheck/SystemCheck';
// import User from './components/User/User';
// import Menuuser from './components/UserMenu/UserMenu';
// import ScriptOutputPage from './components/User/startassessment';
// import Reportfile from './components/Report/Report';
// import Corepage from './components/question creation/question';
// import AdminDashboard from './components/admin/AdminDashboard';
// // import AdminTwo from './components/admin/AdminTwo';
// import AdminTwo from './components/admin/AdminTwoV2';
// import AdminThree from './components/admin/AdminThree';
// import AdminFour from './components/admin/AdminFour';
// import AdminFive from './components/admin/AdminFive';
// import LicensePurchase from './components/Stripe';
// import A1L1Question from './components/User/A1L1Question';
// import Guidelines from './components/guidelines/Guidelines';
// import ResultPDf from './components/User/ResultPDf';

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import { Menu } from './Components/menu/menu';
// import { Corepage } from './Components/question creation/question';
// import { Serbv } from './Components/check';
// import { Addcategory } from './Components/question creation/add_category';
// import { User } from './Components/user/user';
// import { Language } from './Components/userquestion/language';
// import { SystemCheck } from './Components/System Check/systemcheck';
// import { Menuuser } from './Components/usermenu/usermenu';
// import ScriptOutputPage from './Components/user/startassessment';
// import { Reportfile } from './Components/report/report';
// import { Transferfile } from './Components/tansferfile/transferfile';
// import StartDockerButton, { Download } from './Components/check/check2floder/check2';


function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/guidelines/:id/:empNo' element={[<Menu/>,<GuidelinesPage/>]}/>
        
        <Route path='/question/:encrypted' element={[<Menu/>,<QuestionsMain/>]}/>
        <Route path='/workspace/:id/:framework' element={[<CodeMenu/>,<CodeEditor />]}/>
        {/* <Route path='/question_creator/:id' element={[<Menu/>,<Corepage/>]}/> */}
        {/* <Route path='/' element={<Download/>}/> */}
        {/* <Route path='/report/:id' element={[<Menuuser/>,<Reportfile/>]}/>
        <Route path='/admin' element={[<Menu/>,<AdminDashboard/>]}/>  
        <Route path='/admin/view/1' element={[<Menu/>,<AdminTwo />]}/>
        <Route path='/admin/view/2' element={[<Menu/>,<AdminThree />]}/>
        <Route path='/admin/view/3' element={[<Menu/>,<AdminFour />]}/>
        <Route path='/admin/view/4' element={[<Menu/>,<AdminFive />]}/>
        <Route path='/purchase/license' element={[<Menu/>,<LicensePurchase />]}/>
        <Route path='/test' element={[<ResultPDf />]}/> */}

        {/* <Route path='/question/:id' element={[<User/>]}/> */}
      </Routes>
    </BrowserRouter>  
   </>
  );
}

export default App;
