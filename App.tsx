import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Products from "./screens/Products";
import Login from "./screens/Login";
import Product from "./screens/Product";

export type RootStackParams = {
  home:undefined;
  products:undefined;
  login:undefined;
  product:{
    name:string;
  }
}

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="products" component={Products} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="product" component={Product}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
