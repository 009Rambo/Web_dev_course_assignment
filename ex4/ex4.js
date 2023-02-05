function task5(a, b, p) {
    return Number((a / b).toFixed(p));
  }

const getEncryptor = (alphabet, shift1, shift2, shift2freq) => {

    const encode = function(message) {
      let encoded = '';

      let shifted1 = '';
      if  (shift1 < 0) {
        shifted1 = alphabet.substring(Math.abs(shift1), alphabet.length) + alphabet.substring(0, Math.abs(shift1)) ;
      } else {
        shifted1 = alphabet.substring(alphabet.length - shift1, alphabet.length) + alphabet.substring(0, alphabet.length - 1);
      }

      let shifted2 = '';
      if  (shift2 < 0) {
        shifted2 = alphabet.substring(Math.abs(shift2), alphabet.length) + alphabet.substring(0, Math.abs(shift2)) ;
      } else {
        shifted2 = alphabet.substring(alphabet.length - shift2, alphabet.length) + alphabet.substring(0, alphabet.length - 1);
      }

      for (let i = 0; i < message.length; i++) {
        let ch = message[i];
        let ch_index = alphabet.indexOf(ch);
        if ((i + 1 ) % shift2freq === 0 && i !== 0) {
          let t = shifted2.charAt(ch_index)
          encoded += shifted2.charAt(ch_index);
        } else {
          encoded += shifted1.charAt(ch_index);
        }
      }
      return encoded
    }
    return encode;
  }
  const abc = '0123456789abcdefghijklmnopqrstuvwxyz ';
  const encoded = getEncryptor(abc, -1, 3, 4)
  console.log(encoded('javascript'));
  const result = task5(3,2,2);
  console.log(result);