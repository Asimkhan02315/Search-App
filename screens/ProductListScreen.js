import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Pressable, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductListScreen = ({ navigation }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [searchTerm]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            const products = response?.data?.products || [];
            const filteredProducts = products.filter(
                (product) => product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filteredProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleProductPress = (product) => {
        navigation.navigate('ProductDetails', { product });
    };

    const addtoCart = (product) => {
        setCartCount(cartCount + 1);
        setCartItems([...cartItems,  product ]);
    };

    const openCart = () => {
        navigation.navigate('Cart', { cartItems });
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search products"
                        style={styles.searchBarInput}
                        value={searchTerm}
                        onChangeText={(text) => setSearchTerm(text)}
                    />
                    {searchTerm ? (
                        <TouchableOpacity onPress={() => setSearchTerm('')} style={styles.searchIcon}>
                            <Icon name="close" size={25} color="#000" />
                        </TouchableOpacity>
                    ) : (
                        <Icon name="magnify" size={25} color="#000" />
                    )}
                </View>
                <TouchableOpacity onPress={openCart} style={styles.cartIconContainer}>
                    <Icon name="cart" size={45} color="#0892d0" />
                    {cartCount > 0 && (
                        <View style={styles.cartBadge}>
                            <Text style={styles.cartBadgeText}>{cartCount}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>

            <FlatList
                numColumns={2}
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleProductPress(item)}>
                        <View style={styles.productContainer}>
                            <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
                            <Text style={styles.productTitle}>{item.title}</Text>
                            <Text style={styles.productDescription}>{item.description}</Text>
                        </View>
                        <View style={styles.buttonCartContainer}>
                            <Pressable onPress={() => addtoCart(item)} style={styles.buttonCart}>
                                <Text style={styles.textCart}>Add To Cart</Text>
                            </Pressable>
                        </View>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    searchBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        marginBottom: 10,
        margin: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        width: "70%",
    },

    cartBadge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartBadgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    cartIconContainer: {
        marginLeft: 10,
    },
    searchBarInput: {
        flex: 1,
        fontSize: 15,
    },
    searchIcon: {
        padding: 8,
    },
    productContainer: {
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 20,
        padding: 5,
        width: 170,
        margin: 5,
        height: 320,
    },
    productImage: {
        width: 150,
        height: 130,
        borderRadius: 20,
    },
    productTitle: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    productDescription: {
        marginTop: 5,
        textAlign: 'center',
        color: '#000',
    },
    buttonCartContainer: {
        alignItems: 'center',
    },
    buttonCart: {
        backgroundColor: '#0892d0',
        width: '80%',
        height: 35,
        borderRadius: 30,
        overflow: 'hidden',
        marginVertical: 15,
        justifyContent: 'center',
    },
    textCart: {
        color: "white",
        fontSize: 17,
        textAlign: 'center',
    },
});

export default ProductListScreen;
