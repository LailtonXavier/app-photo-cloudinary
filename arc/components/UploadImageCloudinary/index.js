import { cloudinaryConfig } from '../../../cloudinaryConfig';

const UploadImageCloudinary = (uri) => {
  const uploadImage = async () => {
      if (!cloudinaryConfig.cloudName) {
        console.log('You to need cloudName')
        return 
      }

      const apiUrl = `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`;

      const formData = new FormData();
      formData.append('file', { uri, type: 'image/jpeg', name: 'image.jpg' });
      formData.append('upload_preset', 'clouddisphel');

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        });

        const data = await response.json();
        console.log('Cloudinary Response:', data.url);
        return data.url;
      } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        return error;
      }
  }
  return uploadImage()
}

export default UploadImageCloudinary