import React, { useState } from 'react';
import { Image, View, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import UploadImageCloudinary from '../../components/UploadImageCloudinary';

const Home = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.8,
        });

      if (!result.cancelled) {
        setImage(result.assets[0].uri);
        UploadImageCloudinary(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#cc9' }}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Pick Image" onPress={pickImage} />
    </View>
  )
}
export default Home