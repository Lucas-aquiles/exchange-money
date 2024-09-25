import {Text, TextInput, View, StyleSheet, Dimensions} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';

interface PropsDolar {
  compra: string;
  moneda: string;
  nombre: string;
  venta: string;
  casa: string;
}

interface PropsData {
  data: PropsDolar[];
}

const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla

const Conversor = ({data}: PropsData) => {
  const [selectedCasa, setSelectedCasa] = useState<string | undefined>(
    undefined,
  );
  const [monto, setMonto] = useState<string>('');

  const casaSeleccionada = data.find(item => item.casa === selectedCasa);

  const montoNumerico = parseFloat(monto) || 0;

  const compra = casaSeleccionada ? parseFloat(casaSeleccionada.compra) : 0;
  const venta = casaSeleccionada ? parseFloat(casaSeleccionada.venta) : 0;

  return (
    <View style={styles.container1}>
      <View style={styles.row}>
        <Text style={styles.label}>Monto:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={monto}
          onChangeText={text => setMonto(text)}
          placeholder="Ingrese monto"
          placeholderTextColor="#f8f4f4"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Tipo:</Text>
        <Picker
          selectedValue={selectedCasa}
          style={styles.picker}
          onValueChange={itemValue => setSelectedCasa(itemValue)}>
          {data.map((item, index) => (
            <Picker.Item
              key={index}
              label={item.casa === 'contadoconliqui' ? 'Ccl' : item.nombre}
              value={item.casa}
            />
          ))}
        </Picker>
      </View>

      {selectedCasa && (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            Compra: $ {(compra * montoNumerico).toFixed(2)}
          </Text>
          <Text style={styles.resultText}>
            Venta: $ {(venta * montoNumerico).toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Conversor;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 20,

    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    width: width * 1,
    marginBottom: height * 0.15,
    borderRadius: 20,
    shadowOpacity: 0.9,
    opacity: 1, // Opacidad del componente
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: width * 0.06,
    fontWeight: '300',
    color: 'white',
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    color: 'white',
    fontSize: width * 0.05,
  },
  picker: {
    flex: 2,
    color: 'white',
  },
  result: {
    marginTop: 10,
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: width * 0.05,
    marginBottom: 5,
    color: 'white',
  },
});
