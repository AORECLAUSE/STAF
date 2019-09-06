import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'AORE',
          position: 'MOBILE DEV',
          image:
            'https://res.cloudinary.com/aore/image/upload/v1566653483/k8qmle0flj2c7g51gj4z.jpg',
        },
        {
          id: 2,
          name: 'Wisdom',
          position: 'Back-end Dev',
          image:
            'https://res.cloudinary.com/wizzi/image/upload/v1566636188/mecover_de7sgh.jpg',
        },
        {
          id: 3,
          name: 'Chidera',
          position: 'Back-end Dev',
          image:
            'https://res.cloudinary.com/erys1521/image/upload/v1567323865/Me_jgxgkf.jpg',
        },
        {
          id: 4,
          name: 'Ekwere',
          position: 'Back-end Dev',
          image:
            'https://res.cloudinary.com/derfvcnrl/image/upload/v1566549752/ekjosh.jpg',
        },
        {
          id: 5,
          name: 'Arinola',
          position: 'Front-end Dev',
          image:
            'https://res.cloudinary.com/arinola/image/upload/v1266859939/my%20images/IMG_2631_2_nvswxf.jpg',
        },
        {
          id: 6,
          name: 'Veronica',
          position: 'Front-end Dev',
          image:
            'https://res.cloudinary.com/staf4teamdubai/image/upload/v1567281075/IMG_20190814_112259_r0824g.jpg',
        },
        {
          id: 7,
          name: 'Oladapo',
          position: 'Machine Learning',
          image:
            'https://res.cloudinary.com/dapoace/image/upload/v1566990779/Startng/oladapo_picture_yo2hm7.jpg',
        },
        {
          id: 8,
          name: 'Joseph',
          position: 'Front-end Dev',
          image:
            'https://res.cloudinary.com/taj/image/upload/v1567291882/PHOTO_2_jt6ooj.jpg',
        },
        {
          id: 9,
          name: 'Tobi',
          position: 'Back-end Dev',
          image:
            'https://res.cloudinary.com/tobiaina/image/upload/v1566827425/WhatsApp_Image_2019-08-23_at_4.07.41_AM_gl4pjq.jpg',
        },
        {
          id: 10,
          name: 'Edmund',
          position: 'Back-end Dev',
          image:
            'https://res.cloudinary.com/codelieutenant/image/upload/v1566652782/x2bswbrzfavydd6szlq7.jpg',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card}>
                <Image style={styles.userImage} source={{uri: item.image}} />
                <View style={styles.cardFooter}>
                  <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.name}> {item.name} </Text>
                    <Text style={styles.position}> {item.position} </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /** ****** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: 'white',
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: 'center',
    borderColor: '#DCDCDC',
    borderWidth: 3,
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#008080',
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
