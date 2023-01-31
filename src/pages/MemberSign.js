import React, {useState} from 'react';
import {SafeAreaView, Alert} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setAge] = useState(null);
  const [userMail, setMail] = useState(null);
  const [userHometown, setHometown] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail || !userHometown) {
      Alert.alert('Trao Fitness', 'Bilgileri lütfen doldurun');
      return;
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userHometown,
    };

    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <SafeAreaView>
      <Input
        label="Üye Adı"
        placeholder="Üye İsmini Giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üye Soyadını Giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Üye Yaşını Giriniz"
        onChangeText={setAge}
      />
      <Input
        label="Üye Eposta"
        placeholder="Üye Eposta Adresini Giriniz"
        onChangeText={setMail}
      />
      <Input
        label="Üye Memleketi"
        placeholder="Üye Memleketini Giriniz"
        onChangeText={setHometown}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

export default MemberSign;
