import { useEffect, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as yup from 'yup'
import DropDownPicker from 'react-native-dropdown-picker'
import { create, getRestaurantCategories } from '../../api/RestaurantEndpoints'
import InputItem from '../../components/InputItem'
import TextRegular from '../../components/TextRegular'
import * as GlobalStyles from '../../styles/GlobalStyles'
import restaurantLogo from '../../../assets/restaurantLogo.jpeg'
import restaurantBackground from '../../../assets/restaurantBackground.jpeg'
import { showMessage } from 'react-native-flash-message'
import { ErrorMessage, Formik } from 'formik'
import TextError from '../../components/TextError'
import ImagePicker from '../../components/ImagePicker'


export default function CreateRestaurantScreen({ navigation }) {
      const initialRestaurantValues = {
    name: null,
    description: null,
    address: null,
    postalCode: null,
    url: null,
    shippingCosts: null,
    email: null,
    phone: null,
    restaurantCategoryId: null
  }
  return (
    <Formik
      initialValues={initialRestaurantValues}
    >
      {({ setFieldValue, values }) => (
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <View style={{ width: '60%' }}>
              <InputItem
                name='name'
                label='Name:'
              />
              <InputItem
                name='description'
                label='Description:'
              />
              <InputItem
                name='address'
                label='Address:'
              />
              <InputItem
                name='postalCode'
                label='Postal Code:'
              />
              <InputItem
                name='url'
                label='URL:'
              />
              <InputItem
                name='shippingCosts'
                label='Shipping Costs:'
              />
              <InputItem
                name='email'
                label='Email:'
              />
              <InputItem
                name='phone'
                label='Phone:'
              />

              <Pressable
                onPress={() => console.log('Button pressed')
                }
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? GlobalStyles.brandPrimaryTap
                      : GlobalStyles.brandPrimary
                  },
                  styles.button
                ]}>
                <ImagePicker
                label="Logo:"
                image={values.logo}
                defaultImage={restaurantLogo}
                onImagePicked={result => setFieldValue('logo', result)}
                />
                <ImagePicker
                label="Hero Image:"
                image={values.heroImage}
                defaultImage={restaurantBackground}
                onImagePicked={result => setFieldValue('heroImage', result)}
                />
                <TextRegular textStyle={styles.text}>
                  Create restaurant
                </TextRegular>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
button: {
    borderRadius: 8,
    height: 40,
    padding: 10,
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginLeft: 5
  }
})

