import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Personaldetails = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.personaldetails}>
      <View
        style={[styles.personaldetailsChild, styles.personaldetailsPosition]}
      />
      <Text style={[styles.applyingForPersonal, styles.personalTypo]}>
        APPLYING FOR PERSONAL LOAN
      </Text>
      <Image
        style={[styles.image20Icon, styles.image20IconLayout]}
        contentFit="cover"
        source={require("../assets/image-20.png")}
      />
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("MyCardsBalance")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-left1.png")}
        />
      </Pressable>
      <Image
        style={[styles.bankLogosSmall, styles.image20IconLayout]}
        contentFit="cover"
        source={require("../assets/bank-logos-small.png")}
      />
      <Text style={[styles.sbiLoan, styles.sbiLoanTypo]}>SBI LOAN</Text>
      <Text style={[styles.text, styles.textLayout]}>1/5</Text>
      <Text style={[styles.personalDetails, styles.textTypo]}>
        Personal Details
      </Text>
      <View
        style={[styles.personaldetailsItem, styles.personaldetailsPosition]}
      />
      <Text style={[styles.fullName, styles.personalTypo]}>Full Name</Text>
      <Text style={[styles.mobileNumber, styles.rentedTypo]}>
        Mobile Number
      </Text>
      <Text style={[styles.emailId, styles.personalTypo]}>Email-ID</Text>
      <Text style={[styles.dob, styles.personalTypo]}>{`DOB   `}</Text>
      <Image
        style={[styles.icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <Text style={[styles.marriageStatus, styles.changeTypo]}>
        Marriage Status
      </Text>
      <Image
        style={[styles.personaldetailsInner, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-71.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-71.png")}
      />
      <Text style={[styles.address, styles.sbiLoanTypo]}>Address</Text>
      <Text style={[styles.rented, styles.rentedTypo]}>Rented</Text>
      <Text style={[styles.owned, styles.textLayout]}>Owned</Text>
      <View style={[styles.lineView, styles.personaldetailsChildPosition]} />
      <View
        style={[
          styles.personaldetailsChild1,
          styles.personaldetailsChildPosition,
        ]}
      />
      <View
        style={[
          styles.personaldetailsChild2,
          styles.personaldetailsChildBorder,
        ]}
      />
      <View
        style={[
          styles.personaldetailsChild3,
          styles.personaldetailsChildBorder,
        ]}
      />
      <View
        style={[
          styles.personaldetailsChild4,
          styles.personaldetailsChildPosition,
        ]}
      />
      <Text style={[styles.selectPlace, styles.changeTypo]}>Select Place</Text>
      <View
        style={[
          styles.personaldetailsChild5,
          styles.personaldetailsChildPosition,
        ]}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("VerifyAcc")}
      />
      <Text style={[styles.next, styles.personalTypo]}> Next</Text>
      <Text style={[styles.change, styles.changeTypo]}>Change</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  personaldetailsPosition: {
    backgroundColor: Color.colorDarkcyan,
    left: "50%",
    position: "absolute",
  },
  personalTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  image20IconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  sbiLoanTypo: {
    height: 15,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  textLayout: {
    width: 78,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_lg,
    top: 141,
  },
  rentedTypo: {
    height: 14,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  changeTypo: {
    width: 139,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 30,
    width: 30,
    top: 559,
    position: "absolute",
  },
  personaldetailsChildPosition: {
    height: 1,
    width: 331,
    borderTopWidth: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    marginLeft: -165.5,
    left: "50%",
    position: "absolute",
  },
  personaldetailsChildBorder: {
    borderColor: Color.miscellaneousFloatingTabTextUnselected,
    top: 410,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  personaldetailsChild: {
    marginLeft: -180,
    top: 0,
    width: 360,
    height: 60,
  },
  applyingForPersonal: {
    left: 51,
    color: Color.schemesOnPrimary,
    width: 315,
    height: 28,
    fontSize: FontSize.size_base,
    top: 25,
  },
  image20Icon: {
    left: 330,
    top: 25,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeft: {
    left: "-2.78%",
    top: "-1.37%",
    right: "88.89%",
    bottom: "95.13%",
    width: "13.89%",
    height: "6.25%",
    position: "absolute",
  },
  bankLogosSmall: {
    marginLeft: -163,
    top: 82,
    left: "50%",
    overflow: "hidden",
  },
  sbiLoan: {
    top: 87,
    left: 48,
    fontSize: FontSize.size_smi,
    width: 66,
    color: Color.miscellaneousFloatingTabTextUnselected,
  },
  text: {
    left: 16,
    fontFamily: FontFamily.poppinsRegular,
    color: "#3ab054",
    height: 31,
    fontSize: FontSize.size_lg,
    top: 141,
  },
  personalDetails: {
    left: 63,
    width: 157,
    height: 23,
    color: Color.miscellaneousFloatingTabTextUnselected,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  personaldetailsItem: {
    marginLeft: -176,
    top: 194,
    borderRadius: Border.br_3xs,
    width: 352,
    height: 433,
  },
  fullName: {
    top: 227,
    left: 18,
    color: "#ede4e4",
    width: 154,
    height: 18,
    fontSize: FontSize.size_base,
  },
  mobileNumber: {
    top: 274,
    color: Color.colorWhitesmoke_300,
    width: 187,
    left: 15,
  },
  emailId: {
    top: 323,
    color: "#f8efef",
    width: 133,
    height: 12,
    left: 15,
    fontSize: FontSize.size_base,
  },
  dob: {
    top: 381,
    color: "#f8e7e7",
    width: 72,
    left: 15,
    fontSize: FontSize.size_base,
  },
  icon1: {
    height: "0.86%",
    width: "3.31%",
    top: "48.5%",
    right: "78.92%",
    bottom: "50.64%",
    left: "17.78%",
    position: "absolute",
  },
  marriageStatus: {
    top: 437,
    color: "#f5f0f0",
    height: 21,
    left: 15,
  },
  personaldetailsInner: {
    left: 25,
  },
  ellipseIcon: {
    left: 190,
  },
  address: {
    top: 501,
    left: 12,
    color: "#fff5f5",
    width: 142,
    fontSize: FontSize.size_base,
  },
  rented: {
    top: 567,
    left: 64,
    color: Color.colorSnow_400,
    width: 84,
  },
  owned: {
    bottom: 222,
    left: 223,
    color: "#f7e9e9",
    height: 11,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    width: 78,
    fontSize: FontSize.size_base,
  },
  lineView: {
    top: 301,
  },
  personaldetailsChild1: {
    top: 351,
  },
  personaldetailsChild2: {
    marginLeft: -162.5,
    width: 86,
    left: "50%",
  },
  personaldetailsChild3: {
    left: 160,
    width: 181,
  },
  personaldetailsChild4: {
    top: 470,
  },
  selectPlace: {
    top: 379,
    left: 180,
    color: "#f5ecec",
    height: 16,
  },
  personaldetailsChild5: {
    top: 532,
  },
  rectanglePressable: {
    marginLeft: -80,
    top: 611,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPaleturquoise_100,
    width: 161,
    height: 50,
    left: "50%",
    position: "absolute",
  },
  next: {
    marginLeft: -50,
    top: 624,
    width: 120,
    height: 22,
    color: Color.miscellaneousFloatingTabTextUnselected,
    fontSize: FontSize.size_base,
    left: "50%",
  },
  change: {
    top: 683,
    left: 148,
    color: Color.colorPaleturquoise_100,
    height: 31,
  },
  personaldetails: {
    backgroundColor: Color.schemesOnPrimary,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Personaldetails;
