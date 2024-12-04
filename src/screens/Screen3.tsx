import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Screen3 = () => {

  const gifterImages = [
    require('./../source/images/gifter1.png'),
    require('./../source/images/gifter2.png'),
    require('./../source/images/gifter3.png')
  ];

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
                
                <View>
                  <Text style={styles.gifterTitle}>Me</Text>
                  <View style={styles.gifterContainer}>
                    <View style={styles.gifterImages}>
                      {gifterImages.map((src, index) => (
                        <Image
                          key={index}
                          source={src}
                          style={[
                            styles.gifterImage,
                            {
                              left: index * 10, // Dynamic horizontal offset
                              zIndex: index,    // Stacking order
                            },
                          ]}
                        />
                      ))}
                      <Image 
                        source={require('./../source/images/gifter1.png')} // Path to your image
                        style={styles.gifterImage}
                      />
                      <Image 
                        source={require('./../source/images/gifter2.png')} // Path to your image
                        style={styles.gifterImage}
                      />
                      <Image 
                        source={require('./../source/images/gifter3.png')} // Path to your image
                        style={styles.gifterImage}
                      />
                    </View>
                    <Text style={styles.gifterText}>Top Gifters</Text>
                  </View>
                  <View style={styles.gifterCoinContainer}>
                    <Image source={require('./../source/images/openmoji-coin.png')} />
                    <Text style={styles.gifterCoinText}>12000000</Text>
                  </View>
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
                <View>
                  <Text style={[
                    styles.gifterTitle,
                    {
                      textAlign: 'right'
                    },
                  ]}>
                    Opponent
                  </Text>
                  <View style={styles.gifterContainer}>
                    <View style={styles.gifterImages}>
                      {gifterImages.map((src, index) => (
                        <Image
                          key={index}
                          source={src}
                          style={[
                            styles.gifterImage,
                            {
                              left: index * 10, // Dynamic horizontal offset
                              zIndex: index,    // Stacking order
                            },
                          ]}
                        />
                      ))}
                      <Image 
                        source={require('./../source/images/gifter1.png')} // Path to your image
                        style={styles.gifterImage}
                      />
                      <Image 
                        source={require('./../source/images/gifter2.png')} // Path to your image
                        style={styles.gifterImage}
                      />
                      <Image 
                        source={require('./../source/images/gifter3.png')} // Path to your image
                        style={styles.gifterImage}
                      />
                    </View>
                    <Text style={styles.gifterText}>Top Gifters</Text>
                  </View>
                  <View style={[styles.gifterCoinContainer, { justifyContent: 'flex-end' }]}>
                    <Image source={require('./../source/images/openmoji-coin.png')} />
                    <Text style={styles.gifterCoinText}>12000000</Text>
                  </View>
                </View>
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
                <View style={styles.coinContainer}>
                  <Image source={require('./../source/images/openmoji-coin.png')} />
                  <Text style={styles.coinText}>12000000</Text>
                </View>
              </View>

              <View style={[styles.coinBarCol, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
                <View style={styles.coinContainer}>
                  <Text style={styles.coinText}>12000000</Text>
                  <Image source={require('./../source/images/openmoji-coin.png')} />
                </View>
              </View>
            </View>
          </ImageBackground>

          <View>
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
                        source={require('./../source/images/user-pic-3.png')} // Path to your image
                        style={styles.memberCardImage}
                    />
                    <View>
                        <Text style={styles.gifterTitle}>Khyzer</Text>
                        <View style={styles.gifterContainer}>
                        <View style={styles.gifterImages}>
                            {gifterImages.map((src, index) => (
                            <Image
                                key={index}
                                source={src}
                                style={[
                                styles.gifterImage,
                                {
                                    left: index * 10, // Dynamic horizontal offset
                                    zIndex: index,    // Stacking order
                                },
                                ]}
                            />
                            ))}
                            <Image 
                            source={require('./../source/images/gifter1.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                            <Image 
                            source={require('./../source/images/gifter2.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                            <Image 
                            source={require('./../source/images/gifter3.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                        </View>
                        <Text style={styles.gifterText}>Top Gifters</Text>
                        </View>
                        <View style={styles.gifterCoinContainer}>
                        <Image source={require('./../source/images/openmoji-coin.png')} />
                        <Text style={styles.gifterCoinText}>12000000</Text>
                        </View>
                    </View>
                    </View>
                    <View style={styles.memberCard}>
                    <Image 
                        source={require('./../source/images/user-pic-3.png')} // Path to your image
                        style={styles.memberCardImage}
                    />
                    <View>
                        <Text style={styles.gifterTitle}>Khyzer</Text>
                        <View style={styles.gifterContainer}>
                        <View style={styles.gifterImages}>
                            {gifterImages.map((src, index) => (
                            <Image
                                key={index}
                                source={src}
                                style={[
                                styles.gifterImage,
                                {
                                    left: index * 10, // Dynamic horizontal offset
                                    zIndex: index,    // Stacking order
                                },
                                ]}
                            />
                            ))}
                            <Image 
                            source={require('./../source/images/gifter1.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                            <Image 
                            source={require('./../source/images/gifter2.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                            <Image 
                            source={require('./../source/images/gifter3.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                        </View>
                        <Text style={styles.gifterText}>Top Gifters</Text>
                        </View>
                        <View style={styles.gifterCoinContainer}>
                        <Image source={require('./../source/images/openmoji-coin.png')} />
                        <Text style={styles.gifterCoinText}>12000000</Text>
                        </View>
                    </View>
                    </View>
                    <View style={styles.memberCard}>
                    <Image 
                        source={require('./../source/images/user-pic-3.png')} // Path to your image
                        style={styles.memberCardImage}
                    />
                    <View>
                        <Text style={styles.gifterTitle}>Khyzer</Text>
                        <View style={styles.gifterContainer}>
                        <View style={styles.gifterImages}>
                            {gifterImages.map((src, index) => (
                            <Image
                                key={index}
                                source={src}
                                style={[
                                styles.gifterImage,
                                {
                                    left: index * 10, // Dynamic horizontal offset
                                    zIndex: index,    // Stacking order
                                },
                                ]}
                            />
                            ))}
                            <Image 
                            source={require('./../source/images/gifter1.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                            <Image 
                            source={require('./../source/images/gifter2.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                            <Image 
                            source={require('./../source/images/gifter3.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                        </View>
                        <Text style={styles.gifterText}>Top Gifters</Text>
                        </View>
                        <View style={styles.gifterCoinContainer}>
                        <Image source={require('./../source/images/openmoji-coin.png')} />
                        <Text style={styles.gifterCoinText}>12000000</Text>
                        </View>
                    </View>
                    </View>
                </View>
                </View>
                
                <View style={styles.memberCardCol}>
                <View style={styles.memberCardRightCol}>
                    <View style={styles.memberCard}>
                    <Image 
                        source={require('./../source/images/user-pic-3.png')} // Path to your image
                        style={styles.memberCardImage}
                    />
                    <View>
                        <Text style={styles.gifterTitle}>Khyzer</Text>
                        <View style={styles.gifterContainer}>
                        <View style={styles.gifterImages}>
                            {gifterImages.map((src, index) => (
                            <Image
                                key={index}
                                source={src}
                                style={[
                                styles.gifterImage,
                                {
                                    left: index * 10, // Dynamic horizontal offset
                                    zIndex: index,    // Stacking order
                                },
                                ]}
                            />
                            ))}
                            <Image 
                            source={require('./../source/images/gifter1.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                            <Image 
                            source={require('./../source/images/gifter2.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                            <Image 
                            source={require('./../source/images/gifter3.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                        </View>
                        <Text style={styles.gifterText}>Top Gifters</Text>
                        </View>
                        <View style={styles.gifterCoinContainer}>
                        <Image source={require('./../source/images/openmoji-coin.png')} />
                        <Text style={styles.gifterCoinText}>12000000</Text>
                        </View>
                    </View>
                    </View>
                    <View style={styles.memberCard}>
                    <Image 
                        source={require('./../source/images/user-pic-3.png')} // Path to your image
                        style={styles.memberCardImage}
                    />
                    <View>
                        <Text style={styles.gifterTitle}>Khyzer</Text>
                        <View style={styles.gifterContainer}>
                        <View style={styles.gifterImages}>
                            {gifterImages.map((src, index) => (
                            <Image
                                key={index}
                                source={src}
                                style={[
                                styles.gifterImage,
                                {
                                    left: index * 10, // Dynamic horizontal offset
                                    zIndex: index,    // Stacking order
                                },
                                ]}
                            />
                            ))}
                            <Image 
                            source={require('./../source/images/gifter1.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                            <Image 
                            source={require('./../source/images/gifter2.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                            <Image 
                            source={require('./../source/images/gifter3.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                        </View>
                        <Text style={styles.gifterText}>Top Gifters</Text>
                        </View>
                        <View style={styles.gifterCoinContainer}>
                        <Image source={require('./../source/images/openmoji-coin.png')} />
                        <Text style={styles.gifterCoinText}>12000000</Text>
                        </View>
                    </View>
                    </View>
                    <View style={styles.memberCard}>
                    <Image 
                        source={require('./../source/images/user-pic-3.png')} // Path to your image
                        style={styles.memberCardImage}
                    />
                    <View>
                        <Text style={styles.gifterTitle}>Khyzer</Text>
                        <View style={styles.gifterContainer}>
                        <View style={styles.gifterImages}>
                            {gifterImages.map((src, index) => (
                            <Image
                                key={index}
                                source={src}
                                style={[
                                styles.gifterImage,
                                {
                                    left: index * 10, // Dynamic horizontal offset
                                    zIndex: index,    // Stacking order
                                },
                                ]}
                            />
                            ))}
                            <Image 
                            source={require('./../source/images/gifter1.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                            <Image 
                            source={require('./../source/images/gifter2.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                            <Image 
                            source={require('./../source/images/gifter3.png')} // Path to your image
                            style={styles.gifterImage}
                            />
                        </View>
                        <Text style={styles.gifterText}>Top Gifters</Text>
                        </View>
                        <View style={styles.gifterCoinContainer}>
                        <Image source={require('./../source/images/openmoji-coin.png')} />
                        <Text style={styles.gifterCoinText}>12000000</Text>
                        </View>
                    </View>
                    </View>
                </View>
                </View>

                <View style={styles.memberCardNumbering}>
                <Text style={styles.memberCardNumberingText}>#1</Text>
                <Text style={styles.memberCardNumberingText}>#2</Text>
                <Text style={styles.memberCardNumberingText}>#3</Text>
                </View>
            </View>

            <View style={styles.seatSettingContainer}>
                <View style={styles.seatSettingBox}>
                    <TouchableOpacity style={styles.seatSettingGroup}>
                        <Image style={styles.seatSettingImage} source={require('./../source/images/chair.png')} />
                        <Text style={styles.seatSettingText}>Move Seat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.seatSettingGroup}>
                        <Image style={styles.seatSettingImage} source={require('./../source/images/microphone-slash.png')} />
                        <Text style={styles.seatSettingText}>Take mic</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.countdownRow}>
              <LinearGradient
                colors={['#FF5353', 'rgba(115, 115, 115, 0)']}
                style={styles.countdown}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
              >
                <Text style={styles.countText}>Game 01: 35</Text>
              </LinearGradient>
            </View>
          </View>

          <View style={styles.countdownContainer}>
            
            <View style={styles.countdownPointsRow}>
              <View style={[styles.countdownPointsCol, {
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderStyle: 'solid',
                borderColor: '#E09834',
                backgroundColor: '#E9A5471A',
                minHeight: 43.74,
                paddingHorizontal: 5,
                alignItems: 'center',
              }]}>
                <Image style={styles.countdownPointsImage} source={require('./../source/images/yellow-white-chair.png')} />
                <Image style={styles.countdownPointsImage} source={require('./../source/images/yellow-white-chair.png')} />
                <Image style={styles.countdownPointsImage} source={require('./../source/images/yellow-white-chair.png')} />
                <Image style={styles.countdownPointsImage} source={require('./../source/images/yellow-white-chair.png')} />
                <Image style={styles.countdownPointsImage} source={require('./../source/images/yellow-white-chair.png')} />
              </View>
              <View style={[styles.countdownPointsCol, {
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderStyle: 'solid',
                borderColor: '#7BEDA6',
                backgroundColor: '#19D05C17',
                minHeight: 43.74,
                paddingHorizontal: 5,
                alignItems: 'center',
              }]}>
                <Image style={styles.countdownPointsImage} source={require('./../source/images/green-white-chair.png')} />
                <Image style={styles.countdownPointsImage} source={require('./../source/images/green-white-chair.png')} />
                <Image style={styles.countdownPointsImage} source={require('./../source/images/green-white-chair.png')} />
                <Image style={styles.countdownPointsImage} source={require('./../source/images/green-white-chair.png')} />
                <Image style={styles.countdownPointsImage} source={require('./../source/images/green-white-chair.png')} />
              </View>
            </View>
            
          </View>

          <View style={styles.broadcastContainer}>
            <View style={styles.broadcastLeftBox}>
              <ScrollView style={styles.broadcastFirstBox}>
                <Text style={styles.broadcastContent}>
                  Asha Live encourages positive broadcast.
                  Pornography, political, gambling and any other
                  illegal broadcast are forbidden and the related
                  rooms will be punished and banned.
                </Text>
                <Text style={styles.broadcastTitle}>Majboor Boiz 23745</Text>
              </ScrollView>
              <ScrollView style={styles.broadcastSecondBox}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  marginBottom: 10
                }}>
                  <Image 
                    source={require('./../source/images/ivi.png')}
                  />
                  <Image 
                    source={require('./../source/images/frame.png')}
                  />
                  <Image 
                    source={require('./../source/images/heart.png')}
                  />

                  <Text style={styles.broadcastTitle}>khyzer</Text>

                  <Image 
                    source={require('./../source/images/heart.png')}
                  />
                  <Image 
                    source={require('./../source/images/fanclub.png')}
                  />
                </View>
                <Text style={styles.broadcastNote}>Hello Guy’s how's going brothers</Text>
              </ScrollView>
            </View>
            <View style={styles.broadcastRightBox}>
              <View style={styles.broadcastRightBoxGroup}>
                <Image source={require('./../source/images/big-frame.png')} />
                <View style={styles.broadcastsquare}></View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101828',
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
    alignItems: 'center',
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
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 15
  },
  coinText: {
    fontSize: 11,
    lineHeight: 13.93,
    fontWeight: 600,
    textAlign: 'center',
    color: '#fff'
  },


  memberCardRow: {
    paddingTop: 25,
    flexDirection: 'row',
    backgroundColor: '#050e21'
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
    minHeight: 200,
    padding: 10
  },

  memberCardRightCol: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#10CB55',
    backgroundColor: '#19D05C17',
    borderRadius: 12.81,
    minHeight: 200,
    padding: 10
  },

  memberCardNumbering: {
    width: '5%',
    minHeight: 235,
    paddingVertical: 25,
  },
  memberCardNumberingText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    color: '#fff',
    fontSize: 11.5,
    textAlign: 'center',
    marginVertical: 5,
  },

  memberCard: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center', 
    height: 52,
    marginVertical: 5,
    gap: 5
  },

  memberCardImage: {
    width: 49,
    height: 46,
    objectFit: 'contain',
    position: 'relative'
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
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },


  // Gifters
  gifterTitle: {
    fontSize: 12,
    lineHeight: 12.92,
    color: '#ffffff',
    fontWeight: 400
  },
  gifterContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D9D9D91A',
    borderColor: '#25262B',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 90,
    borderRadius: 56.6,
    marginVertical: 4.5
  },
  gifterImages: {
    height: 18,
    width: 42,
    position: 'relative',
  },
  gifterImage: {
    position: 'absolute',
    resizeMode: 'cover',
    width: 18,          
    height: 18,         
  },
  gifterText: {
    fontSize: 7.75,
    lineHeight: 9.77,
    fontWeight: 600,
    color: '#ffffff'
  },
  gifterCoinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  gifterCoinText: {
    fontSize: 11,
    lineHeight: 13.93,
    fontWeight: 600,
    textAlign: 'center',
    color: '#fff'
  },
  countdownRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#050E21'
  },


  // counter container
  countdownContainer: {
    marginBottom: 25,
    backgroundColor: '#050E21',
  },
  
  countdown: {
    height: 30,
    width: 125,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderStyle: 'solid',
    borderColor: '#FF5353',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 14,
    letterSpacing: -0.5,
    color: '#ffffff',
    textAlign: 'center',
  },
  countdownPointsRow: {
    flexDirection: 'row'
    
  },
  countdownPointsCol: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  countdownPointsLeftCol: {},
  countdownPointsRightCol: {},
  countdownPointsImage: {
    width: 30.46,
    height: 30.46,
    borderRadius: 30.46,
    boxShadow: '4.02px 5.75px 8.05px 0px #F4ABB047',
    marginHorizontal: 5
  },


  // broadcast
  broadcastContainer: {
    paddingHorizontal: 15,
    minHeight: 210,
    flexDirection: 'row'
  },
  broadcastLeftBox: {
    width: '80%'
  },
  broadcastRightBox: {
    width: '20%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  broadcastRightBoxGroup: {
    alignItems: 'flex-end'
  },  
  broadcastFirstBox: {
    minWidth: 300,
    width: '100%',
    minHeight: 120,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF7A',
    padding: 15,
    backgroundColor: '#0a0d16',
    marginBottom: 10
  },
  broadcastContent: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
    color: '#ffffff',
    marginBottom: 15
  },
  broadcastTitle: {
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 16,
    color: '#ffffff'
  },
  broadcastSecondBox: {
    minWidth: 288,
    width: '95%',
    minHeight: 81,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF7A',
    padding: 15,
    backgroundColor: '#0a0d16'
  },
  broadcastNote: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 20,
    color: '#ffffff'
  },
  broadcastsquare: {
    width: 70,
    height: 70,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    marginTop: 15
  },


  // seat setting
  seatSettingContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  seatSettingBox: {
    minWidth: 167,
    minHeight: 58,
    borderRadius: 15,
    backgroundColor: '#0000009A',
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  seatSettingGroup: {
    alignItems: 'center'
  },
  seatSettingImage: {
    width: 17,
    height: 17,
    marginBottom: 5
  },
  seatSettingText: {
    fontSize: 12,
    lineHeight: 10.37,
    fontWeight: 400,
    color: '#ffffff'
  }
});

export default Screen3;