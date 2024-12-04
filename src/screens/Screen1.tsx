import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Screen1 = () => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.userCardRow}>
            <View style={[styles.userCardCol]}>
              <View style={styles.userCardContainer}>
                <View style={[styles.userCard, styles.userCardLeft]}>
                  <Image 
                    source={require('./../source/images/user-pic-1.png')} // Path to your image
                    style={styles.userCardImage}
                  />
                </View>
                <Text style={styles.userCardText}>My Team</Text>

                <View style={styles.userCardExtra}>
                  <Image 
                    source={require('./../source/images/purple-boxing-punch.png')} // Path to your image
                    style={styles.userCardExtraImage}
                  />
                </View>
              </View>
            </View>
            <View style={styles.userCardColCenter}>
              <View style={styles.userCardPK}>
                <Image 
                  source={require('./../source/images/pk.png')}
                  style={styles.userCardPKImage}
                />
              </View>
            </View>
            <View style={[styles.userCardCol, styles.userCardColRight]}>
              <View style={styles.userCardContainer}>
                <View style={styles.userCardExtra}>
                  <Image 
                    source={require('./../source/images/red-boxing-punch.png')} // Path to your image
                    style={styles.userCardExtraImage}
                  />
                </View>
                <Text style={styles.userCardText}>My Team</Text>
                <View 
                  style={[styles.userCard, styles.userCardRight]}
                >
                  <Image 
                    source={require('./../source/images/user-pic-2.png')} // Path to your image
                    style={styles.userCardImage}
                  />
                </View>
              </View>
            </View>
          </View>

          <ImageBackground source={require('./../source/images/vs-group.png')} resizeMode="cover">
            <View style={styles.coinBarRow}>
              <View style={[styles.coinBarCol]}>
                <Text style={[styles.coinBarColText, styles.coinBarLeftCol]}>6</Text>
              </View>

              <View style={[styles.coinBarCol]}>
                <Text style={[styles.coinBarColText, styles.coinBarRightCol]}>6</Text>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.memberCardRow}>
            <View style={styles.memberCardNumbering}>
              <Text style={styles.memberCardNumberingText}>#1</Text>
              <Text style={styles.memberCardNumberingText}>#2</Text>
              <Text style={styles.memberCardNumberingText}>#3</Text>
            </View>

            <View style={styles.memberCardCol}>
              <View style={styles.memberCardLeftCol}>
                <View style={styles.memberCard}>
                  <Image 
                    source={require('./../source/images/yellow-chair.png')} // Path to your image
                    style={styles.memberCardImage}
                  />
                  <Text style={styles.memberCardAdd}>+ Add Member</Text>
                </View>
                <View style={styles.memberCard}>
                  <Image 
                    source={require('./../source/images/yellow-chair.png')} // Path to your image
                    style={styles.memberCardImage}
                  />
                  <Text style={styles.memberCardAdd}>+ Add Member</Text>
                </View>
                <View style={styles.memberCard}>
                  <Image 
                    source={require('./../source/images/yellow-chair.png')} // Path to your image
                    style={styles.memberCardImage}
                  />
                  <Text style={styles.memberCardAdd}>+ Add Member</Text>
                </View>
              </View>
            </View>
              

            <View style={styles.memberCardCol}>
              <View style={styles.memberCardRightCol}>
                <View style={styles.memberCard}>
                  <Image 
                    source={require('./../source/images/green-chair.png')} // Path to your image
                    style={styles.memberCardImage}
                  />
                  <Text style={styles.memberCardAdd}>+ Add Member</Text>
                </View>
                <View style={styles.memberCard}>
                  <Image 
                    source={require('./../source/images/green-chair.png')} // Path to your image
                    style={styles.memberCardImage}
                  />
                  <Text style={styles.memberCardAdd}>+ Add Member</Text>
                </View>
                <View style={styles.memberCard}>
                  <Image 
                    source={require('./../source/images/green-chair.png')} // Path to your image
                    style={styles.memberCardImage}
                  />
                  <Text style={styles.memberCardAdd}>+ Add Member</Text>
                </View>
              </View>
            </View>

            <View style={styles.memberCardNumbering}>
              <Text style={styles.memberCardNumberingText}>#1</Text>
              <Text style={styles.memberCardNumberingText}>#2</Text>
              <Text style={styles.memberCardNumberingText}>#3</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      

      <LinearGradient
        colors={['#FF1C3D', '#FF516A']}
        style={styles.gradient}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Pk</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#050E21',
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },


  // user cards
  userCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  userCardCol: {
    width: '45%',
    borderRadius: 4
  },
  userCardColRight: {
    alignItems: 'flex-end'
  },
  userCardColCenter: {
    width: '5%',
    borderRadius: 4
  },
  userCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userCard: {
    width: 39.33,
    height: 39.33,
    backgroundColor: '#D9D9D9',
    borderRadius: 8.74,
    overflow: 'hidden'
  },
  userCardLeft: {
    marginEnd: 10
  },
  userCardRight: {
    marginStart: 10
  },
  userCardImage: {
    resizeMode: 'contain'
  },
  userCardText: {
    fontSize: 13,
    textAlign: 'center',
    color: '#fff'
  },
  userCardExtra: {
    paddingTop: 5,
  },
  userCardExtraImage: {
    resizeMode: 'contain',
    width: 55,
    height: 58
  },
  userCardPK: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userCardPKImage: {
    resizeMode: 'contain',
    width: 55,
    height: 58
  },


  // coin bar
  coinBarRow: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  coinBarCol: {
    width: '50%',
  },
  coinBarColText: {
    color: '#fff',
    paddingHorizontal: 15,
    justifyContent: 'center',
    fontSize: 12
  },
  coinBarLeftCol: {},
  coinBarRightCol: {
    textAlign: 'right',
  },



  memberCardRow: {
    paddingVertical: 25,
    flexDirection: 'row',
  },

  memberCardCol: {
    width: '45%',
    paddingHorizontal: 10
  },

  memberCardLeftCol: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E09834',
    backgroundColor: '#E9A5471A',
    borderRadius: 12.81,
    minHeight: 235,
    paddingVertical: 25,
    paddingHorizontal: 15
  },

  memberCardRightCol: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#10CB55',
    backgroundColor: '#19D05C17',
    borderRadius: 12.81,
    minHeight: 235,
    paddingVertical: 25,
    paddingHorizontal: 15
  },

  memberCardNumbering: {
    width: '5%',
    minHeight: 235,
    paddingVertical: 30,
  },
  memberCardNumberingText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    color: '#fff',
    fontSize: 11.5,
    textAlign: 'center',
    // backgroundColor: 'blue',
    marginVertical: 5,
  },

  memberCard: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
    marginVertical: 5
  },

  memberCardImage: {
    width: 44,
    height: 44,
    objectFit: 'contain',
    position: 'relative',
    top: 5
  },
  memberCardAdd: {
    color: '#fff',
    fontSize: 13,
  },


  button: {
    borderRadius: 25, 
    overflow: 'hidden', 
  },
  gradient: {
    paddingVertical: 12,
    margin: 15,
    borderRadius: 25, 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Screen1;