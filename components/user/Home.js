import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useState, useEffect } from "react/cjs/react.development";
import Login from "./Login";
import axios from "axios";
import Styles from "./Style";

function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const moveLogin = () => {
    navigation.navigate(Login);
  };
  useEffect(function () {
    axios
      .get("http://localhost:4000/shopowners/viewProducts")
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={{
          width: 200,
          backgroundColor: "#2196F3",
          height: 30,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 30,
          marginLeft: 40,
        }}
        onPress={moveLogin}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          Login
        </Text>
      </TouchableOpacity>
      {product.map((product, index) => (
        <View key={index}>
          <View
            style={{
              height: "380px",
              borderRadius: "5px",
              // backgroundColor: " rgba(236, 235, 235, 0.137)",
            }}
          >
            <View className="text -center">
              <img
                src={`http://localhost:4000/${product.product_image}`}
                style={{
                  height: "200px",
                  width: "200px",
                }}
                alt="Laptop"
              />
            </View>

            <View>
              <View>
                <p>
                  <a>{`${product.product_brand}`}</a>
                </p>
                <p>
                  {product.discounted_price && (
                    <s
                      style={{
                        textDecoration: "line-through",
                      }}
                    >{`${product.product_price}`}</s>
                  )}
                  <s></s>
                </p>
              </View>

              <View>
                <p>{`${product.product_name}`}</p>
                <p>
                  {product.discounted_price && (
                    <s>{`${product.discounted_price}`}</s>
                  )}
                  {!product.discounted_price && (
                    <s>{`${product.product_price}`}</s>
                  )}
                </p>
              </View>

              <View>
                <p>Stock: {`${product.product_stoke}`}</p>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Home;
