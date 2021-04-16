import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

import image from '../image.png'
import file from '../example.pdf'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    // backgroundColor: '#f00'
  },
  section: {
    margin: 0,
    padding: 0,
    flexGrow: 1
  },
  image: {
    margin:0,
    padding: 0
  },
});

const PDF = () => {
  return (
    <Document
      title="Document PDF - 123 Structure"
      author="Auteur"
      subject="Document PDF - 123 Structure"
      creator="123 Structure"
      producer="123 Structure">
      <Page
        size="A3"
        orientation="landscape"
        style={styles.page}>
        <View style={styles.section}>
          <Image
          style={styles.image}
          src={image}/>
        </View>
        <View style={styles.section}>
          <Image
          style={styles.image}
          src={image}/>
        </View>
        <View style={styles.section}>
          <Image
          style={styles.image}
          src={image}/>
        </View>
      </Page>
    </Document>
  );
}

export default PDF;
