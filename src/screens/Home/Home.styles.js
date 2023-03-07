import { StyleSheet } from 'react-native';
import { Colors } from '../../themes/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 16,
  },
  pokemonStarters: {
    height: 240,
    width: '100%',
    flexGrow: 1,
  },
  title: {
    lineHeight: 50,
  },
  subTitle: {
    marginTop: 20,
    marginBottom: 32,
  },
  checkPokedexButton: {
    marginBottom: 32,
    width: '80%',
  },
});

export { Styles };
