import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground, Alert, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';

// Sample navigation options and tab options
const navigationOpt = ['Host', 'Agency', 'Rich', 'Family', 'Event Topper'];
const tabOpt = ['Daily', 'Weekly', 'Monthly'];

const OverallRanking = () => {
  const [navigation, setNavigation] = useState('Host');
  const [tab, setTab] = useState('Daily');


  useEffect(() => {
    console.log('tab', tab)
  }, [tab])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <ImageBackground style={{flexGrow: 1, position: 'relative', backgroundColor: 'gray'}} source={require('./../source/images/overall-ranking-gradient.png')}>
          <Image 
            style={{
              position: 'absolute', 
              width: '100%', 
              top: '10%', 
              left: 0, 
              objectFit: 'cover',
              
            }} 
            source={require('./../source/images/bg-purple-circle.png')} 
          />
          <View 
            style={styles.firstContainer} 
            // imageStyle={{
            //   resizeMode: "cover"
            // }}
            // source={require('./../source/images/bg-purple-circle.png')}
          >
            

            <View style={[styles.navigationContainer]}>
                {navigationOpt.map((nav, index) => (
                  <TouchableOpacity
                      key={index}
                      style={[styles.navigationButton, navigation === nav && styles.activeNavigationButton]}
                      onPress={() => setNavigation(nav)}
                  >
                      <Text style={[styles.navigationButtonText, navigation === nav && styles.activeNavigationButtonText]}>
                          {nav}
                      </Text>
                  </TouchableOpacity>
                ))}
            </View>

            <View style={{paddingHorizontal: 25}}>
              <View style={styles.tabContainer}>
                  {tabOpt.map((t, index) => (
                      (
                        tab === t
                        ?
                          <>
                            <TouchableOpacity
                              key={index}
                              style={[styles.tabButton]}
                              onPress={() => {
                                setTab(t);
                              }}
                            >
                              <LinearGradient
                                colors={['#FF516A', '#FF1C3D']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0, 1]}
                                style={{height: '100%', width: '100%', justifyContent: 'center', borderRadius: 53}}
                              >
                                <Text style={[styles.tabText, tab === t && styles.activeTabText]}>
                                  {t}
                                </Text>
                              </LinearGradient>
                            </TouchableOpacity>
                          </>
                          
                        :
                          <>
                            <TouchableOpacity
                              key={index}
                              style={[styles.tabButton]}
                              onPress={() => {
                                setTab(t);
                              }}
                            >
                              <Text style={[styles.tabText]}>
                                {t}
                              </Text>
                            </TouchableOpacity>
                          </>
                      )
                      
                  ))}
              </View>
            </View>
            
            <View style={[styles.cardContainer]}>
              
                <View style={[styles.cardRow, {position: 'relative', zIndex: 1}]}>
                    <View style={[styles.cardCol, { position: 'relative', top: 170 }]}>
                        <View style={[styles.cardBox]}>
                            <View style={styles.cardImageContainer}>
                                <Image style={styles.cardImageFrame} source={require('./../source/images/frame-1.png')} />
                                <Image style={styles.cardImage} source={require('./../source/images/frame-image-1.jpeg')} />
                            </View>

                            <View style={{marginTop: 35, alignItems: 'center'}}>
                                <ImageBackground style={styles.rankpointContainer} source={require('./../source/images/red-union.png')}>
                                    <Image style={styles.rankpointImage} source={require('./../source/images/coin.png')} />
                                    <Text style={styles.rankpointImageText}>10,124</Text>
                                </ImageBackground>
                                <Text style={styles.rankpointText}>Luffy</Text>
                            </View>

                            <View style={{position: 'relative', width: '100%'}}>
                              <LinearGradient
                                  colors={['#CD4141', '#FDD392', '#D85B50']}
                                  start={{ x: 0, y: 0 }}
                                  end={{ x: 1, y: 0 }}
                                  style={styles.rankcodeContainer}
                              >
                                <View style={{position: 'absolute', height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                  <Text style={{fontWeight: 700, fontSize: 9.47, color: '#fff', }}>SVIP11</Text>
                                </View>
                                <Image style={styles.rankcodeImage} source={require('./../source/images/pink-rose.png')} />
                              </LinearGradient>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.cardCol, { position: 'relative', top: 70 }]}>
                        <View style={[styles.cardImageContainer, {position: 'relative', top: 15}]}>
                            <Image style={styles.cardImageFrame} source={require('./../source/images/frame-2.png')} />
                            <Image style={styles.cardImage} source={require('./../source/images/gojo.png')} />
                        </View>
                        <View style={[styles.cardBox, { borderWidth: 1, borderColor: '#8324ED' }]}>
                          <View style={{position: 'relative', top: 15}}>
                            <View style={{marginTop: 35, alignItems: 'center'}}>
                              <ImageBackground style={styles.rankpointContainer} source={require('./../source/images/pink-union.png')}>
                                  <Image style={styles.rankpointImage} source={require('./../source/images/coin.png')} />
                                  <Text style={styles.rankpointImageText}>254654</Text>
                              </ImageBackground>
                              <Text style={styles.rankpointText}>Son Gokū</Text>
                            </View>

                            <View style={styles.rankRoseContainer}>
                              <Image style={styles.rankRose} source={require('./../source/images/golden-rose.png')} />
                              <Image style={styles.rankRose} source={require('./../source/images/pink-rose.png')} />
                              <Image style={styles.rankRose} source={require('./../source/images/blue-rose.png')} />
                              <Image style={styles.rankRose} source={require('./../source/images/purple-rose.png')} />
                            </View>

                            <View style={{position: 'relative', width: '100%'}}>
                              <LinearGradient
                                  colors={['#B34EBD', '#FFE2FF', '#B955C2']}
                                  start={{ x: 0, y: 0 }}
                                  end={{ x: 1, y: 0 }}
                                  style={styles.rankcodeContainer}
                              >
                                <View style={{position: 'absolute', height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                  <Text style={{fontWeight: 700, fontSize: 9.47, color: '#fff', }}>SVIP11</Text>
                                </View>
                                <Image style={styles.rankcodeImage} source={require('./../source/images/purple-rose.png')} />
                              </LinearGradient>
                            </View>
                          </View>
                        </View>
                    </View>

                    <View style={[styles.cardCol, { position: 'relative', top: 170 }]}>
                      <View style={[styles.cardBox]}>
                          <View style={[styles.cardImageContainer]}>
                            <View style={{borderWidth: 4, borderColor: '#F97316', marginTop: 15, borderRadius: '100%'}}>
                                <Image style={[styles.cardImage, {top: 0, borderWidth: 4, borderColor: '#00000'}]} source={require('./../source/images/frame-image-1.jpeg')} />
                            </View>
                          </View>

                          <View style={{alignItems: 'center'}}>
                            <ImageBackground resizeMode="contain" style={styles.rankpointContainer} source={require('./../source/images/orange-union.png')}>
                                <Image style={styles.rankpointImage} source={require('./../source/images/coin.png')} />
                                <Text style={styles.rankpointImageText}>10,124</Text>
                            </ImageBackground>
                            <Text style={styles.rankpointText}>Mystery Person</Text>
                          </View>

                          <View style={{position: 'relative', width: '100%'}}>
                            <LinearGradient
                                colors={['#EB7E28', '#FFE139', '#E97827']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.rankcodeContainer}
                            >
                              <View style={{position: 'absolute', height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontWeight: 700, fontSize: 9.47, color: '#fff', }}>SVIP11</Text>
                              </View>
                              <Image style={styles.rankcodeImage} source={require('./../source/images/golden-rose.png')} />
                            </LinearGradient>
                          </View>
                      </View>
                    </View>
                </View>
            </View>
          </View>

          
          <ImageBackground 
              style={styles.secondContainer}
              source={require('./../source/images/purple-pink-gradient.png')} 
              resizeMode='stretch'
          >
            <View style={styles.tableContainer}>
              <View style={styles.tableHeader}>
                <View style={[styles.tableRow, {backgroundColor: '#fff', borderRadius: 11}]}>
                  <View style={{width: '15%'}}>
                    <Text style={[styles.tableText, {color: '#000000'}]}>Rank</Text>
                  </View>
                  <View style={{width: '60%'}}>
                    <Text style={[styles.tableText, {color: '#000000'}]}>Name</Text>
                  </View>
                  <View style={{width: '25%'}}>
                    <Text style={[styles.tableText, {color: '#000000'}]}>Exp</Text>
                  </View>
                </View>
              </View>
              <ScrollView style={styles.tableBody}>
                <View style={styles.tableRow}>
                  <View style={{width: '15%'}}>
                    <Text style={[styles.tableText, {color: '#ffffff'}]}>#1</Text>
                  </View>
                  <View style={{width: '60%'}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <View style={[styles.tableImageContainer]}>
                        <Image style={styles.tableImageFrame} source={require('./../source/images/tier-frame.png')} />
                        <Image style={styles.tableImage} source={require('./../source/images/gojo.png')} />
                      </View>
                      <View>
                        <Text style={[styles.tableText, {marginBottom: 10, color: '#ffffff'}]}>
                          Gojo Satoru
                        </Text>
                        <View style={{position: 'relative', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 5, paddingLeft: 10}}>
                          <LinearGradient
                              colors={['#EB7E28', '#FFE139', '#E97827']}
                              start={{ x: 0, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              style={[styles.rankcodeContainer, {marginLeft: 0, marginRight: 0}]}
                          >
                            <View style={{position: 'absolute', height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                              <Text style={{fontWeight: 700, fontSize: 9.47, color: '#fff', }}>SVIP11</Text>
                            </View>
                            <Image style={[styles.rankcodeImage, {top: 0}]} source={require('./../source/images/golden-rose.png')} />
                          </LinearGradient>

                          <View style={[styles.tableImageGroup]}>
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/blue-rose.png')} />
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{width: '25%'}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <Image source={require('./../source/images/coin.png')} />
                      <Text style={[styles.tableText, {color: '#ffffff'}]}>254654</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={{width: '15%'}}>
                    <Text style={[styles.tableText, {color: '#ffffff'}]}>#1</Text>
                  </View>
                  <View style={{width: '60%'}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <View style={[styles.tableImageContainer]}>
                        <Image style={styles.tableImageFrame} source={require('./../source/images/tier-frame.png')} />
                        <Image style={styles.tableImage} source={require('./../source/images/gojo.png')} />
                      </View>
                      <View>
                        <Text style={[styles.tableText, {marginBottom: 10, color: '#ffffff'}]}>
                          Gojo Satoru
                        </Text>
                        <View style={{position: 'relative', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 5, paddingLeft: 10}}>
                          <LinearGradient
                              colors={['#EB7E28', '#FFE139', '#E97827']}
                              start={{ x: 0, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              style={[styles.rankcodeContainer, {marginLeft: 0, marginRight: 0}]}
                          >
                            <View style={{position: 'absolute', height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                              <Text style={{fontWeight: 700, fontSize: 9.47, color: '#fff', }}>SVIP11</Text>
                            </View>
                            <Image style={[styles.rankcodeImage, {top: 0}]} source={require('./../source/images/golden-rose.png')} />
                          </LinearGradient>

                          <View style={[styles.tableImageGroup]}>
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/blue-rose.png')} />
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{width: '25%'}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <Image source={require('./../source/images/coin.png')} />
                      <Text style={[styles.tableText, {color: '#ffffff'}]}>254654</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={{width: '15%'}}>
                    <Text style={[styles.tableText, {color: '#ffffff'}]}>#1</Text>
                  </View>
                  <View style={{width: '60%'}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <View style={[styles.tableImageContainer]}>
                        <Image style={styles.tableImageFrame} source={require('./../source/images/tier-frame.png')} />
                        <Image style={styles.tableImage} source={require('./../source/images/gojo.png')} />
                      </View>
                      <View>
                        <Text style={[styles.tableText, {marginBottom: 10, color: '#ffffff'}]}>
                          Gojo Satoru
                        </Text>
                        <View style={{position: 'relative', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 5, paddingLeft: 10}}>
                          <LinearGradient
                              colors={['#EB7E28', '#FFE139', '#E97827']}
                              start={{ x: 0, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              style={[styles.rankcodeContainer, {marginLeft: 0, marginRight: 0}]}
                          >
                            <View style={{position: 'absolute', height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                              <Text style={{fontWeight: 700, fontSize: 9.47, color: '#fff', }}>SVIP11</Text>
                            </View>
                            <Image style={[styles.rankcodeImage, {top: 0}]} source={require('./../source/images/golden-rose.png')} />
                          </LinearGradient>

                          <View style={[styles.tableImageGroup]}>
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/blue-rose.png')} />
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{width: '25%'}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <Image source={require('./../source/images/coin.png')} />
                      <Text style={[styles.tableText, {color: '#ffffff'}]}>254654</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={{width: '15%'}}>
                    <Text style={[styles.tableText, {color: '#ffffff'}]}>#1</Text>
                  </View>
                  <View style={{width: '60%'}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <View style={[styles.tableImageContainer]}>
                        <Image style={styles.tableImageFrame} source={require('./../source/images/tier-frame.png')} />
                        <Image style={styles.tableImage} source={require('./../source/images/gojo.png')} />
                      </View>
                      <View>
                        <Text style={[styles.tableText, {marginBottom: 10, color: '#ffffff'}]}>
                          Gojo Satoru
                        </Text>
                        <View style={{position: 'relative', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 5, paddingLeft: 10}}>
                          <LinearGradient
                              colors={['#EB7E28', '#FFE139', '#E97827']}
                              start={{ x: 0, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              style={[styles.rankcodeContainer, {marginLeft: 0, marginRight: 0}]}
                          >
                            <View style={{position: 'absolute', height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                              <Text style={{fontWeight: 700, fontSize: 9.47, color: '#fff', }}>SVIP11</Text>
                            </View>
                            <Image style={[styles.rankcodeImage, {top: 0}]} source={require('./../source/images/golden-rose.png')} />
                          </LinearGradient>

                          <View style={[styles.tableImageGroup]}>
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/blue-rose.png')} />
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{width: '25%'}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <Image source={require('./../source/images/coin.png')} />
                      <Text style={[styles.tableText, {color: '#ffffff'}]}>254654</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={{width: '15%'}}>
                    <Text style={[styles.tableText, {color: '#ffffff'}]}>#1</Text>
                  </View>
                  <View style={{width: '60%'}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <View style={[styles.tableImageContainer]}>
                        <Image style={styles.tableImageFrame} source={require('./../source/images/tier-frame.png')} />
                        <Image style={styles.tableImage} source={require('./../source/images/gojo.png')} />
                      </View>
                      <View>
                        <Text style={[styles.tableText, {marginBottom: 10, color: '#ffffff'}]}>
                          Gojo Satoru
                        </Text>
                        <View style={{position: 'relative', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 5, paddingLeft: 10}}>
                          <LinearGradient
                              colors={['#EB7E28', '#FFE139', '#E97827']}
                              start={{ x: 0, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              style={[styles.rankcodeContainer, {marginLeft: 0, marginRight: 0}]}
                          >
                            <View style={{position: 'absolute', height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                              <Text style={{fontWeight: 700, fontSize: 9.47, color: '#fff', }}>SVIP11</Text>
                            </View>
                            <Image style={[styles.rankcodeImage, {top: 0}]} source={require('./../source/images/golden-rose.png')} />
                          </LinearGradient>

                          <View style={[styles.tableImageGroup]}>
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/blue-rose.png')} />
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{width: '25%'}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <Image source={require('./../source/images/coin.png')} />
                      <Text style={[styles.tableText, {color: '#ffffff'}]}>254654</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={{width: '15%'}}>
                    <Text style={[styles.tableText, {color: '#ffffff'}]}>#1</Text>
                  </View>
                  <View style={{width: '60%'}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <View style={[styles.tableImageContainer]}>
                        <Image style={styles.tableImageFrame} source={require('./../source/images/tier-frame.png')} />
                        <Image style={styles.tableImage} source={require('./../source/images/gojo.png')} />
                      </View>
                      <View>
                        <Text style={[styles.tableText, {marginBottom: 10, color: '#ffffff'}]}>
                          Gojo Satoru
                        </Text>
                        <View style={{position: 'relative', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 5, paddingLeft: 10}}>
                          <LinearGradient
                              colors={['#EB7E28', '#FFE139', '#E97827']}
                              start={{ x: 0, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              style={[styles.rankcodeContainer, {marginLeft: 0, marginRight: 0}]}
                          >
                            <View style={{position: 'absolute', height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                              <Text style={{fontWeight: 700, fontSize: 9.47, color: '#fff', }}>SVIP11</Text>
                            </View>
                            <Image style={[styles.rankcodeImage, {top: 0}]} source={require('./../source/images/golden-rose.png')} />
                          </LinearGradient>

                          <View style={[styles.tableImageGroup]}>
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/blue-rose.png')} />
                            <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={{width: '25%'}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <Image source={require('./../source/images/coin.png')} />
                      <Text style={[styles.tableText, {color: '#ffffff'}]}>254654</Text>
                    </View>
                  </View>
                </View>
                
                <ImageBackground source={require('./../source/images/purple-pink-dark-gradient.png')}>
                  <View style={styles.tableRow}>
                    <View style={{width: '15%'}}>
                      <Text style={[styles.tableText, {color: '#ffffff'}]}>#1</Text>
                    </View>
                    <View style={{width: '60%'}}>
                      <View style={{flexDirection: 'row', gap: 10}}>
                        <View style={[styles.tableImageContainer]}>
                          <Image style={styles.tableImageFrame} source={require('./../source/images/tier-frame.png')} />
                          <Image style={styles.tableImage} source={require('./../source/images/gojo.png')} />
                        </View>
                        <View>
                          <Text style={[styles.tableText, {marginBottom: 10, color: '#ffffff'}]}>
                            Gojo Satoru
                          </Text>
                          <View style={{position: 'relative', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 5, paddingLeft: 10}}>
                            <LinearGradient
                                colors={['#EB7E28', '#FFE139', '#E97827']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={[styles.rankcodeContainer, {marginLeft: 0, marginRight: 0}]}
                            >
                              <View style={{position: 'absolute', height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontWeight: 700, fontSize: 9.47, color: '#fff', }}>SVIP11</Text>
                              </View>
                              <Image style={[styles.rankcodeImage, {top: 0}]} source={require('./../source/images/golden-rose.png')} />
                            </LinearGradient>

                            <View style={[styles.tableImageGroup]}>
                              <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                              <Image style={styles.tableImageGroupImage} source={require('./../source/images/blue-rose.png')} />
                              <Image style={styles.tableImageGroupImage} source={require('./../source/images/pink-rose.png')} />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{width: '25%'}}>
                      <View style={{flexDirection: 'row', gap: 10}}>
                        <Image source={require('./../source/images/coin.png')} />
                        <Text style={[styles.tableText, {color: '#ffffff'}]}>254654</Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </ScrollView>
            </View>
          </ImageBackground>
      </ImageBackground>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },

  firstContainer: {
    paddingHorizontal: 10,
    paddingTop: 25,
    position: 'relative'
  },

  secondContainer: {
    // minHeight: 680
  },

  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 23.95,
    
  },
  navigationButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    color: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    
  },
  activeNavigationButton: {
    borderBottomColor: '#FD2E4A',
    borderBottomWidth: 1.61,
    borderStyle: 'solid'
  },
  navigationButtonText: {
    color: '#333',
    fontSize: 15,
    lineHeight: 18.9,
    fontWeight: 500,
  },
  activeNavigationButtonText: {
    
  },


  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 44,
    width: '100%',
    borderRadius: 53,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 999,
    backgroundColor: '#fff'
  },
  tabButton: {
    color: '#000000',
    flex: 1,
    justifyContent: 'center'
  },
  activeTab: {
    borderRadius: 53
  },
  tabText: {
    color: '#000',
    fontSize: 14,
    lineHeight: 17.64,
    fontWeight: 400,
    textAlign: 'center',
    
    
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 700,
  },
  contentContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  contentText: {
    fontSize: 18,
    color: '#333',
  },
  
  
  cardContainer: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'flex-end',
    // backgroundColor: 'red'
  },
  cardRow: {
    width: '100%',
    flexDirection: 'row',
    gap: '10'
  },
  cardCol: {
    flex: 1
  },
  cardImageContainer: {
    position: 'relative',
    zIndex: 99,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardImageFrame: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 999,
    resizeMode: 'stretch'
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    top: 18
  },
  cardBox: {
    minHeight: 192.69,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 18.94,
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  rankpointContainer: {
    width: 82.4,
    height: 32.2,
    position: 'relative',
    
  },
  rankpointImage: {
    position: 'relative',
    height: 18,
    width: 18,
    top: 11,
    left: 5.5
  },
  rankpointImageText: {
    width: '100%',
    position: 'absolute',
    textAlign: 'right',
    bottom: 5,
    right: 10,
    color: '#fff',
    fontWeight: 700,
    fontSize: 11.37,
    lineHeight: 14.32
  },
  rankpointText: {
    marginVertical: 10,
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 19.09
  },
  rankcodeContainer: {
    ...StyleSheet.absoluteFillObject,
    width: 58.72,
    height: 17.99,
    borderRadius: 15.15,
    borderWidth: 0.47,
    borderColor: '#FDD392',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rankcodeImage: {
    width: 20.86,
    height: 20.86,
    left: -10,
    top: -5,
    resizeMode: 'cover'
  },
  rankRoseContainer: {
    gap: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15
  },
  rankRose: {
    width: 18.3,
    height: 18.3,
    resizeMode: 'contain'
  },


  tableContainer: {
    paddingTop: 140
  },
  tableHeader: {
    paddingHorizontal: 10
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10
  },
  tableBody: {
    // maxHeight: 500,
    minHeight: 500
  },
  tableText: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 17.64,
  },
  tableImageContainer: {
    position: 'relative',
    zIndex: 99,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 53.41,
    height: 50,
  },
  tableImageFrame: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 999,
    resizeMode: 'stretch'
  },
  tableImage: {
    width: 35,
    height: 35,
    borderRadius: 35,
    top: 0
  },

  tableImageGroup: {
    flexDirection: 'row',
  },
  tableImageGroupImage: {
    width: 18,
    height: 18,
    resizeMode: 'contain'
  }
});

export default OverallRanking;
