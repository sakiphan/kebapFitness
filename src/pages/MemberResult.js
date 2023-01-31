import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

function MemberResult({route}) {
  const {user} = route.params;
  return (
    <SafeAreaView>
      <Text style={styles.message}>Kayıt Tamamlandı</Text>
      <Text style={styles.labels}>Üye Adı: {user.userName}</Text>
      <Text style={styles.labels}>Üye Soyadı:{user.userSurname}</Text>
      <Text style={styles.labels}>Üye Yaş:{user.userAge}</Text>
      <Text style={styles.labels}>Üye E-Mail:{user.userMail}</Text>
      <Text style={styles.labels}>Üye Memleket:{user.userHomeTown}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  labels: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
});
export default MemberResult;
