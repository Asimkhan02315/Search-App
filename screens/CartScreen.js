import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CartScreen = ({ route }) => {
    const { cartItems } = route.params;
    const [cartData, setCartData] = useState(cartItems.map(item => ({ ...item, count: 1 })));
    const incrementQuantity = (index) => {
        const updatedCart = [...cartData];
        updatedCart[index].count += 1;
        setCartData(updatedCart);
    };

    const decrementQuantity = (index) => {
        const updatedCart = [...cartData];
        if (updatedCart[index].count > 0) {
            updatedCart[index].count -= 1;
            setCartData(updatedCart);
        }
    };

    const removeQuantity = (id) => {
        const filteredData = cartData.filter(item => item.id !== id);
        setCartData(filteredData);
    }

    const calculateTotal = () => {
        return cartData.reduce((total, item) => total + (item.price * item.count), 0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cart Items</Text>
            <FlatList
                data={cartData}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <View style={styles.cartItem}>
                        <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
                        <Text style={styles.productTitle}>{item.title}</Text>
                        <Text style={styles.productDetail}>Category: {item.category}</Text>
                        <Text style={styles.productDetail}>Brand: {item.brand}</Text>
                        <Text style={styles.productDetail}>Price: ${item.price}</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={() => decrementQuantity(index)} style={styles.quantityButton}>
                                <Text style={styles.quantityButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}> {item.count}</Text>
                            <TouchableOpacity onPress={() => incrementQuantity(index)} style={styles.quantityButton}>
                                <Text style={styles.quantityButtonText}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => removeQuantity(item.id)} style={styles.quantityButton}>
                                <Text style={styles.removeButtonText}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total Price:</Text>
                <Text style={styles.totalPrice}>${calculateTotal()}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cartItem: {
        borderBottomWidth: 3,
        borderColor: '#ddd',
        padding: 20,
        marginBottom: 15,
    },
    productImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
    productDetail: {
        marginTop: 5,
        color: '#555',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    quantityButton: {
        backgroundColor: '#000',
        padding: 6,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    quantityButtonText: {
        color: 'white',
        fontSize: 20,
    },
    removeButtonText: {
        color: 'red',
        fontSize: 20,
    },
    quantity: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20,
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },
});

export default CartScreen;
