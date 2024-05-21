import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const {width,height} =Dimensions.get('window')
const CertificateScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRightImageContainer}>
        <Image source={require('./imges/rightimg.png')} style={styles.topRightImage} resizeMode='contain' />
      </View>
      <View style={styles.bottomLeftImageContainer}>
        <Image source={require('./imges/leftimg.png')} style={styles.bottomLeftImage} resizeMode='cover' />
      </View>
      <View style={styles.middleContent}>
        <View>
            <Image source={require('./imges/logo.png')}  resizeMode='cover' style={styles.logo}/>
        </View>
        <Text style={styles.title}>Certificate of Completions</Text>
        <Text style={styles.subtitle}>This Certifies that</Text>
        <Text style={styles.name}>Jhonson</Text>
        <Text style={styles.description}>
          Has Successfully Completed the Wallace Training Program, Entitled,
        </Text>
        <Text style={styles.courseTitle}>3D Design Illustration Course</Text>
        <Text style={styles.issuedDate}>Issued on November 24, 2022</Text>
        <Text style={styles.id}>ID: SK24568086</Text>
        <Text style={styles.signatureName}>Virginia M. Patterson</Text>
        <Text style={styles.signatureTitle}>Virginia M. Patterson</Text>
        <Text style={styles.issuedOn}>Issued on March 24, 2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    
  },
  topRightImageContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  topRightImage: {
    width: width/2.15,
    height: height / 3.55,
  },
  bottomLeftImageContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  bottomLeftImage: {
    width: width/2.9,
    height: height / 3.4,
  },
  middleContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop:height / 8
  },
  logo:{
    height:height / 6,
    width:width / 3
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#000000',
    marginTop:20
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
    color:'#000000'
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color:'#000000',
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    
    color: 'green',
    marginVertical: 20,
  },
  issuedDate: {
    fontSize: 16,
    marginBottom: 5,
    color:'#000000'
  },
  id: {
    fontSize: 18,
    marginBottom: 20,
    color:'#000000',
    fontWeight:'600',
    marginTop:20
  },
  signatureName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color:'#000000'
  },
  signatureTitle: {
    fontSize: 18,
    marginBottom: 5,
    color:'#000000',
    fontWeight:'600'
  },
  issuedOn: {
    fontSize: 16,
    marginBottom: 10,
    color:'#000000'
  },
});

export default CertificateScreen;
