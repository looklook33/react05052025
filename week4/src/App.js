
import './App.css';
import Users from './LearnReact2/RecalUser';
import MyComponentFoods from './LearnReact2/MyComponent';
import AddAge from './LearnReact2/AddAge';
import ShowHide from './LearnReact2/ShowHide';
import Toolbar from './LearnReact2/Toolbar'
import Create from './LearnReact2/Create'
import MyComponentCar from './LearnReact2/MyComponentCar'
import MyComponentCarObj from './LearnReact2/MyComponentCarObj'
import RecipeFetcher from './LearnReact2/RecipeFecther';
import FetchPostByIdApp from './LearnReact2/FetchPostByidApp';
import FetchComment from './LearnReact2/FetchComment';
import FetchComments from './LearnReact2/FetchComments';
import SelectAllForm from './LearnReact2/SelectAllForm';
import Livecoding from './LearnReact2/LiveCoding';
import FetchGames from './LearnReact2/FetchGames';
import AuthenticatedProfile from './LearnReact2/HOC/AuthenticatedProfile';
import Parent from './LearnReact2/day5/ContextAPI';


function App() {


  return (
    <div className="App">
     <h1>Week 4 React</h1>
     {/* <Users /> */}
     {/* <MyComponentFoods/>
     <hr/>
     <MyComponentCar />
     <hr/>
     <MyComponentCarObj/>
     <hr/>
     <AddAge />
     <hr/>*/}
     {/* <ShowHide /> */}
     <hr/>
     {/* <Toolbar />
     <hr/>
     <Create /> */}
     {/* <RecipeFetcher />  */}
     {/* <FetchPostByIdApp /> */}
     <FetchComment />
     <FetchComments /> 
     {/* <SelectAllForm/>
     <Livecoding /> */}
     {/* <FetchGames/> */}
     {/* <AuthenticatedProfile /> */}
     {/* <Parent /> */}
    </div>
  );
}

export default App;
