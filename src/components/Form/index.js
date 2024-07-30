import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from "../Form/style";

export default function Form(){

    const [produto, setProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const [textButton, setTextButton] = useState("Importar")
    const [item, setItem] = useState(null);

    function addItens() {

        if (produto && quantidade && valor != null) {
          
            setItem = {produto, quantidade, valor}

        setProduto('');
        setQuantidade('');
        setValor('');
        };
        return;
    }


    







    return(
        <View style={styles.formContainer}>
            <View style={styles.boxFormTitle}>
                <Text style={styles.textFormTitle}> Liste suas Compras!</Text>
            </View>
            <Text style={styles.textLabel}>Nome do produto</Text>
            <TextInput
                style={styles.inputLabel}
                value={produto}
                onChangeText={setProduto}
                placeholder="Digite o nome aqui."
            />
            <Text style={styles.textLabel}>Quantidade</Text>
            <TextInput
                style={styles.inputLabel}
                value={quantidade}
                onChangeText={setQuantidade}
                placeholder="Digite a quantidade aqui."
            />
            <Text style={styles.textLabel}>Valor</Text>
            <TextInput
                style={styles.inputLabel}
                value={valor}
                onChangeText={setValor}
                placeholder="Digite o valor aqui."
            />
            <View style={styles.boxViewButton}>
                <TouchableOpacity 
                style = {styles.boxButton}
                onPress = {() => addItens()}
                >
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
        </View>

)};