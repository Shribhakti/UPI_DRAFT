import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Cards9 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cards}>
      <Text style={[styles.visaCard, styles.cardTypo1]}>VISA CARD:</Text>
      <Pressable
        style={[styles.screenshot202407161223321, styles.image5Position]}
        onPress={() => navigation.navigate("MyCardsBalance")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/screenshot-20240716-122332-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.image3}
        onPress={() => navigation.navigate("Mastercard")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
      </Pressable>
      <Text style={[styles.masterCard, styles.cardTypo1]}>MASTER CARD:</Text>
      <Text style={[styles.amexCard, styles.cardTypo1]}>AMEX CARD:</Text>
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Pressable
        style={[styles.image5, styles.image5Position]}
        onPress={() => navigation.navigate("AmexCard3")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
      </Pressable>
      <View style={[styles.cardsChild, styles.cardsLayout]} />
      <View style={[styles.cardsItem, styles.cardsLayout]} />
      <Text style={[styles.addCard, styles.cardTypo]}>ADD CARD</Text>
      <Text style={[styles.removeCard, styles.cardTypo]}>{`REMOVE CARD
`}</Text>
      <View style={[styles.cardsInner, styles.cardsLayout]} />
      <Text style={[styles.cards1, styles.cardTypo1]}>CARDS</Text>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("MyCardsBalance")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-left.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  image5Position: {
    left: 212,
    position: "absolute",
  },
  cardsLayout: {
    width: 360,
    backgroundColor: Color.colorDarkcyan,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  cardTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  visaCard: {
    top: 137,
    width: 141,
    height: 43,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 23,
  },
  screenshot202407161223321: {
    top: 128,
    width: 70,
    height: 30,
  },
  image3: {
    left: 215,
    top: 196,
    width: 67,
    height: 40,
    position: "absolute",
  },
  masterCard: {
    top: 215,
    left: 22,
    width: 163,
    height: 42,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  amexCard: {
    top: 308,
    width: 152,
    height: 50,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 23,
  },
  image4Icon: {
    top: 766,
    left: 599,
    width: 890,
    height: 521,
    position: "absolute",
  },
  image5: {
    top: 302,
    width: 100,
    height: 63,
  },
  cardsChild: {
    top: 409,
    height: 50,
  },
  cardsItem: {
    top: 474,
    height: 50,
  },
  addCard: {
    top: 428,
    left: 137,
    color: "#fefcfc",
    width: 133,
    height: 21,
  },
  removeCard: {
    top: 489,
    left: 132,
    color: "#fffdfd",
    width: 130,
    height: 20,
  },
  cardsInner: {
    top: 0,
    height: 95,
  },
  cards1: {
    top: 35,
    left: 128,
    color: Color.schemesOnPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  icon3: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  arrowLeft: {
    left: "1.94%",
    top: "1.38%",
    right: "84.17%",
    bottom: "92.38%",
    width: "13.89%",
    height: "6.25%",
    position: "absolute",
  },
  cards: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Cards9;
