import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  preview: {
    height: 500,
    backgroundColor: 'red',
    marginTop: 'auto',
    borderRadius: 10,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64 * 2 + 72,
    paddingHorizontal: 24,
  },
});
