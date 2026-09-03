import Header from "../component/Header"
import Layout from "@/Layout/Layout";
import NavigationButton from "@/component/NavigationButton";
import Form from "@/component/Form";
import logo from "../assets/logo.png"

function goHome(): void {
  console.log("Main");
}

function goProfile(): void {
  console.log("Profile");
}

const HomePage: React.FC = () => {
  return (

    
    <Layout >
    <div className="App">
      <Header >
        <img src={logo} alt="FGC logo" className="logo-header"/>
      <Form />
      <NavigationButton onClick={goHome}>
        Main
      </NavigationButton>

      <NavigationButton onClick={goProfile}>
        Profile
      </NavigationButton>
      </Header>
      </div>
    </Layout>
  );
};

export default HomePage; 