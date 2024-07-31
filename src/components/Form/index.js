import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, ScrollView,} from 'react-native';
import styles from "../Form/style";


export default function Form(){

    const [produto, setProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const [itens, setItens] = useState([]);
    const [textButton, setTextButton] = useState("Importar");
    const [errorMessage, setErrorMessage] = useState("Campo Obrigatório *");


        function  adicionarItem() {
            if (produto && quantidade && valor) {
                const novoItem = {
                    id: Date.now().toString(),
                    produto,
                    quantidade,
                    valor,
            }  
            setItens(prevItens => [...prevItens, novoItem]);
            setProduto('');
            setQuantidade('');
            setValor('');
            } else{
                errorMessage;
            }
        }
    return(
        <View style={styles.formContainer} >
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
                keyboardType="numeric"
            />
            
            <Text style={styles.textLabel}>Valor</Text>
            <TextInput
                style={styles.inputLabel}
                value={valor}
                onChangeText={setValor}
                placeholder="Digite o valor aqui."
                keyboardType="numeric"
            />
            
            <View style={styles.boxViewButton}>
                <TouchableOpacity 
                style = {styles.boxButton}
                onPress={adicionarItem}
                >
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Lista de produtos</Text>
            <Text></Text>
        </View>
        </View>
)};