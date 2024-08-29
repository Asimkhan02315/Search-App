import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <FlatList
                data={[product]}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
                        <Text style={styles.productTitle}>{item.title}</Text>
                        <Text style={styles.productDetail}>Category: {item.category}</Text>
                        <Text style={styles.productDetail}>Brand: {item.brand}</Text>
                        <Text style={styles.productDetail}>Stock: {item.stock}</Text>
                        <Text style={styles.productDetail}>Rating: {item.rating}</Text>
                        <Text style={styles.productDetail}>Discount: {item.discountPercentage}%</Text>
                        <Text style={styles.productDetail}>Price: ${item.price}</Text>
                        <Text style={styles.productDetail}>Description: {item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productContainer: {
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 20,
        padding: 10,
        width: 270,
        height: 520,
    },
    productImage: {
        width: '70%',
        height: 140,
        borderRadius: 20,
        marginBottom: 10,
    },
    productTitle: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    productDetail: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 16,
    },
});

export default ProductDetailsScreen;
