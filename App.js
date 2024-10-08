import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [comments, setComments] = useState('');
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const handleSubmit = () => {
    Alert.alert('Agendamento Confirmado',
      `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nData: ${date.toDateString()}\nHora: ${time}\nServiço: ${service}\nComentário: ${comments}`
    );
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDateTimePicker(false);
    setDate(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome Completo:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType='email-address'
      />

      <Text style={styles.label}>Número de Telefone:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={text => setPhone(text)}
        keyboardType='numeric'
      />

      <Text style={styles.label}>Data do Agendamento:</Text>
      <Button title="Selecionar Data" onPress={() => setShowDateTimePicker(true)} />
      {showDateTimePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <Text style={styles.label}>Hora do Agendamento:</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={text => setTime(text)}
        placeholder="HH:MM"
      />

      <Text style={styles.label}>Tipo de Serviço:</Text>
      <Picker
        selectedValue={service}
        style={styles.input}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Picker.Item label="Selecione um Serviço" value="" />
        <Picker.Item label="Corte de Cabelo" value="corte" />
        <Picker.Item label="Manicure" value="manicure" />
        <Picker.Item label="Massagem" value="massagem" />
      </Picker>

      <Text style={styles.label}>Comentário:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={comments}
        onChangeText={text => setComments(text)}
        multiline
        numberOfLines={4}
        placeholder="Detalhes adicionais"
      />

      <Button title="Enviar Agendamento" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  textArea: {
    height: 100,
  },
});

export default App;
