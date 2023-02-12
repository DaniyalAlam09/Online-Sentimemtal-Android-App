import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import { useState, useEffect } from "react/cjs/react.development";
import Login from "./Login";
import axios from "axios";

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
        <div key={index} class=" col-md-6 col-lg-3">
          <div
            class="border mb-4 p-3 card-hover"
            style={{
              height: "380px",
              borderRadius: "5px",
              // backgroundColor: " rgba(236, 235, 235, 0.137)",
            }}
          >
            <div className="text -center">
              <img
                src={`http://localhost:4000/${product.product_image}`}
                style={{
                  height: "200px",
                  width: "200px",
                }}
                class="product-image"
                alt="Laptop"
              />
            </div>

            <div class="negativemargine">
              <div class="d-flex justify-content-between">
                <p class="small">
                  <a class="text-muted">{`${product.product_brand}`}</a>
                </p>
                <p class="small text-danger">
                  {product.discounted_price && (
                    <s
                      style={{
                        textDecoration: "line-through",
                      }}
                    >{`${product.product_price}`}</s>
                  )}
                  <s></s>
                </p>
              </div>

              <div class="d-flex justify-content-between mb-3">
                <p
                  className="product-name"
                  // class="mb-0"
                >{`${product.product_name}`}</p>
                <p
                  className="product-price"
                  // class="text-dark mb-0"
                >
                  {product.discounted_price && (
                    <s>{`${product.discounted_price}`}</s>
                  )}
                  {!product.discounted_price && (
                    <s>{`${product.product_price}`}</s>
                  )}
                </p>
              </div>

              <div class="d-flex justify-content-between">
                <p class="rating text-muted">
                  Stock: {`${product.product_stoke}`}
                </p>
              </div>
            </div>
          </div>
        </div>
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
