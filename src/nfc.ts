import NfcManager, {NfcTech}  from "react-native-nfc-manager";

const onPress = (start: () => void) => async () => {
  try {
    // register for the NFC tag with NDEF in it
    await NfcManager.requestTechnology(NfcTech.Ndef);
    // the resolved tag object will contain `ndefMessage` property
    const tag = await NfcManager.getTag();
    console.warn('Tag found', JSON.stringify(tag));
    const txt = String.fromCharCode(...(tag?.ndefMessage[0].payload ?? [])).toString();
    console.log('txt', txt);
    console.log(txt == '\x02enHello');
    if(txt === '\x02enHello') {
      console.log('start called!');
      start();
    }
  } catch (ex) {
    console.warn('Oops!', ex);
  } finally {
    // stop the nfc scanning
    NfcManager.cancelTechnologyRequest();
  }
}

export default onPress;
