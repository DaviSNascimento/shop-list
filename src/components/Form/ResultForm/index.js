import { View, Text, FlatList} from "react-native";
import styles from "../ResultForm/style";
import React from "react";
export default function ResultForm(){


    return(
        <View style={styles.resultContainer}>
            <Text style={styles.textTitle}>Resultado do form</Text>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text>Produto: {item.produto}</Text>
                        <Text>Quantidade: {item.quantidade}</Text>
                        <Text>Valor: {item.valor}</Text>
                    </View>
                )}
            />
        </View>

)};
