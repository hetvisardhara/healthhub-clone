import React, { useState } from "react";
import "./Products.css";

import physiotherapy from "../assets/physiotherapy.jpg";
import adultincontinence from "../assets/adultincontinence.png";
import womenswellness from "../assets/womenswellness.png";

import walkingaids from "../assets/walkingaids.jpeg";
import sportgear from "../assets/sportgear.png";
import last from "../assets/last.png";
import hygiene from "../assets/hygiene.jpg";
import baby from "../assets/baby.jpg";
import fractureaids from "../assets/fractureaids.JPG";
import orthopedic from "../assets/orthopedic.jpg";
import surgical from "../assets/surgical.jpg";
import surgicaldressing from "../assets/surgicaldressing.JPG";
import woundcare from "../assets/woundcare&cotton.jpeg";

import sub1 from "../assets/1.1.jpg";
import sub2 from "../assets/1.2.jpg";
import sub3 from "../assets/1.3.jpeg";
import sub4 from "../assets/1.4.jpg";
import sub5 from "../assets/1.5.jpg";
import sub6 from "../assets/1.6.jpg";
import sub7 from "../assets/1.7.jpeg";

import sub41 from "../assets/4.1.jpg";
import sub42 from "../assets/4.2.jpg";
import sub43 from "../assets/4.3.jpg";
import sub44 from "../assets/4.4.jpeg";
import sub21 from "../assets/2.1.jpg";
import sub22 from "../assets/2.2.jpeg";
import sub23 from "../assets/2.3.jpg";
import sub31 from "../assets/3.1.png";
import sub32 from "../assets/3.2.png";
import sub33 from "../assets/3.3.jpeg";
import sub34 from "../assets/3.4.jpg";
import sub35 from "../assets/3.5.jpg";

import sub51 from "../assets/5.1.jpeg";
import sub52 from "../assets/5.2.jpg";
import sub53 from "../assets/5.3.jpeg";
import sub54 from "../assets/5.4.jpg";
import sub55 from "../assets/5.5.jpg";
import sub56 from "../assets/5.6.jpg";
import sub57 from "../assets/5.7.jpeg";
import sub58 from "../assets/5.8.jpeg";
import sub59 from "../assets/5.9.jpg";
import sub510 from "../assets/5.10.png";
import sub511 from "../assets/5.11.jpeg";
import sub512 from "../assets/5.12.png";
import sub513 from "../assets/5.13.jpeg";

import sub61 from "../assets/6.1.png";
import sub62 from "../assets/6.2.png";
import sub63 from "../assets/6.3.jpg";
import sub64 from "../assets/6.4.png";
import sub65 from "../assets/6.5.png";
import sub66 from "../assets/6.6.png";
import sub67 from "../assets/6.7.jpg";
import sub68 from "../assets/6.8.jpeg";
import sub69 from "../assets/6.9.jpg";
import sub610 from "../assets/6.10.jpeg";
import sub611 from "../assets/6.11.png";
import sub612 from "../assets/6.12.png";

// Category 7
import sub71 from "../assets/7.1.png";
import sub72 from "../assets/7.2.png";
import sub73 from "../assets/7.3.png";
import sub74 from "../assets/7.4.png";
import sub75 from "../assets/7.5.png";
import sub76 from "../assets/7.6.png";
import sub77 from "../assets/7.7.png";
import sub78 from "../assets/7.8.png";
import sub79 from "../assets/7.9.png";
import sub710 from "../assets/7.10.png";
import sub711 from "../assets/7.11.png";
import sub712 from "../assets/7.12.png";
import sub713 from "../assets/7.13.png";
import sub714 from "../assets/7.14.png";
import sub715 from "../assets/7.15.png";
import sub716 from "../assets/7.16.png";
import sub717 from "../assets/7.17.png";
import sub718 from "../assets/7.18.png";
import sub719 from "../assets/7.19.png";
import sub720 from "../assets/7.20.png";
import sub721 from "../assets/7.21.png";
import sub722 from "../assets/7.22.png";
import sub723 from "../assets/7.23.png";
import sub724 from "../assets/7.24.png";
import sub725 from "../assets/7.25.png";
import sub726 from "../assets/7.26.png";
import sub727 from "../assets/7.27.png";
import sub728 from "../assets/7.28.png";
import sub729 from "../assets/7.29.png";
import sub730 from "../assets/7.30.png";

import sub81 from "../assets/8.1.png";
import sub82 from "../assets/8.2.png";
import sub83 from "../assets/8.3.png";
import sub84 from "../assets/8.4.png";
import sub85 from "../assets/8.5.png";
import sub86 from "../assets/8.6.png";
import sub87 from "../assets/8.7.png";
import sub88 from "../assets/8.8.png";
import sub89 from "../assets/8.9.png";
import sub810 from "../assets/8.10.png";
import sub811 from "../assets/8.11.png";
import sub812 from "../assets/8.12.png";
import sub813 from "../assets/8.13.png";
import sub814 from "../assets/8.14.png";
import sub815 from "../assets/8.15.png";

import sub91 from "../assets/9.1.png";
import sub92 from "../assets/9.2.png";
import sub93 from "../assets/9.3.png";
import sub94 from "../assets/9.4.png";
import sub95 from "../assets/9.5.png";
import sub96 from "../assets/9.6.png";
import sub97 from "../assets/9.7.png";
import sub98 from "../assets/9.8.png";
import sub99 from "../assets/9.9.png";
import sub910 from "../assets/9.10.png";
import sub911 from "../assets/9.11.png";
import sub912 from "../assets/9.12.png";
import sub913 from "../assets/9.13.png";
import sub914 from "../assets/9.14.png";
import sub915 from "../assets/9.15.png";
import sub916 from "../assets/9.16.png";
import sub917 from "../assets/9.17.png";

import sub101 from "../assets/10.1.png";
import sub102 from "../assets/10.2.png";
import sub103 from "../assets/10.3.png";
import sub104 from "../assets/10.4.png";
import sub105 from "../assets/10.5.png";
import sub106 from "../assets/10.6.png";
import sub107 from "../assets/10.7.png";
import sub108 from "../assets/10.8.png";
import sub109 from "../assets/10.9.png";
import sub1010 from "../assets/10.10.png";
import sub1011 from "../assets/10.11.png";
import sub1012 from "../assets/10.12.png";
import sub1013 from "../assets/10.13.png";
import sub1014 from "../assets/10.14.png";
import sub1015 from "../assets/10.15.png";

import sub111 from "../assets/11.1.png";
import sub112 from "../assets/11.2.png";
import sub113 from "../assets/11.3.png";
import sub114 from "../assets/11.4.png";
import sub115 from "../assets/11.5.png";
import sub116 from "../assets/11.6.png";
import sub117 from "../assets/11.7.png";
import sub118 from "../assets/11.8.png";
import sub119 from "../assets/11.9.png";
import sub1110 from "../assets/11.10.png";
import sub1111 from "../assets/11.11.png";
import sub1112 from "../assets/11.12.png";
import sub1113 from "../assets/11.13.png";
import sub1114 from "../assets/11.14.png";

import sub121 from "../assets/12.1.png";
import sub122 from "../assets/12.2.png";
import sub123 from "../assets/12.3.png";
import sub124 from "../assets/12.4.png";
import sub125 from "../assets/12.5.png";
import sub126 from "../assets/12.6.png";
import sub127 from "../assets/12.7.png";
import sub128 from "../assets/12.8.png";

import sub131 from "../assets/13.1.png";
import sub132 from "../assets/13.2.png";
import sub133 from "../assets/13.3.png";
import sub134 from "../assets/13.4.png";
import sub135 from "../assets/13.5.png";
import sub136 from "../assets/13.6.png";
import sub137 from "../assets/13.7.png";
import sub138 from "../assets/13.8.png";
import sub139 from "../assets/13.9.png";
import sub1310 from "../assets/13.10.png";
import sub1311 from "../assets/13.11.png";
import sub1312 from "../assets/13.12.png";
import sub1313 from "../assets/13.13.png";
import sub1314 from "../assets/13.14.png";
import sub1315 from "../assets/13.15.png";
import sub1316 from "../assets/13.16.png";
import sub1317 from "../assets/13.17.png";
import sub1318 from "../assets/13.18.png";
import sub1319 from "../assets/13.19.png";
import sub1320 from "../assets/13.20.png";

import sub141 from "../assets/14.1.png";
import sub142 from "../assets/14.2.png";
import sub143 from "../assets/14.3.png";
import sub144 from "../assets/14.4.png";
import sub145 from "../assets/14.5.png";
import sub146 from "../assets/14.6.png";
import sub147 from "../assets/14.7.png";
import sub148 from "../assets/14.8.png";
import sub149 from "../assets/14.9.png";
import sub1410 from "../assets/14.10.png";
import sub1411 from "../assets/14.11.png";
import sub1412 from "../assets/14.12.png";
import sub1413 from "../assets/14.13.png";
import sub1414 from "../assets/14.14.png";
import sub1415 from "../assets/14.15.png";
import sub1416 from "../assets/14.16.png";

import sub151 from "../assets/15.1.png";
import sub152 from "../assets/15.2.png";
import sub153 from "../assets/15.3.png";
import sub154 from "../assets/15.4.png";
import sub155 from "../assets/15.5.png";
import sub156 from "../assets/15.6.png";
import sub157 from "../assets/15.7.png";
import sub158 from "../assets/15.8.png";
import sub159 from "../assets/15.9.png";
import sub1510 from "../assets/15.10.png";
import sub1511 from "../assets/15.11.png";
import sub1512 from "../assets/15.12.png";
import sub1513 from "../assets/15.13.png";
import sub1514 from "../assets/15.14.png";
import sub1515 from "../assets/15.15.png";
import sub1516 from "../assets/15.16.png";

import sub161 from "../assets/16.1.png";
import sub162 from "../assets/16.2.png";
import sub163 from "../assets/16.3.png";
import sub164 from "../assets/16.4.png";
import sub165 from "../assets/16.5.png";
import sub166 from "../assets/16.6.png";
import sub167 from "../assets/16.7.png";
import sub168 from "../assets/16.8.png";
import sub169 from "../assets/16.9.png";
import sub1610 from "../assets/16.10.png";

import sub171 from "../assets/17.1.png";
import sub172 from "../assets/17.2.png";
import sub173 from "../assets/17.3.png";

import sub181 from "../assets/18.1.png";
import sub182 from "../assets/18.2.png";
import sub183 from "../assets/18.3.png";
import sub184 from "../assets/18.4.png";
import sub185 from "../assets/18.5.png";
import sub186 from "../assets/18.6.png";
import sub187 from "../assets/18.7.png";
import sub188 from "../assets/18.8.png";
import sub189 from "../assets/18.9.png";
import sub1810 from "../assets/18.10.png";
import sub1811 from "../assets/18.11.png";
import sub1812 from "../assets/18.12.png";
import sub1813 from "../assets/18.13.png";
import sub1814 from "../assets/18.14.png";
import sub1815 from "../assets/18.15.png";
import sub1816 from "../assets/18.16.png";

// Category 19
import sub191 from "../assets/19.1.png";
import sub192 from "../assets/19.2.png";
import sub193 from "../assets/19.3.png";
import sub194 from "../assets/19.4.png";
import sub195 from "../assets/19.5.png";
import sub196 from "../assets/19.6.png";
import sub197 from "../assets/19.7.png";
import sub198 from "../assets/19.8.png";
import sub199 from "../assets/19.9.png";
import sub1910 from "../assets/19.10.png";
import sub1911 from "../assets/19.11.png";
import sub1912 from "../assets/19.12.png";
import sub1913 from "../assets/19.13.png";
import sub1914 from "../assets/19.14.png";
import sub1915 from "../assets/19.15.png";
import sub1916 from "../assets/19.16.png";
import sub1917 from "../assets/19.17.png";
import sub1918 from "../assets/19.18.png";
import sub1919 from "../assets/19.19.png";
// Category 20
import sub201 from "../assets/20.1.png";
import sub202 from "../assets/20.2.png";
import sub203 from "../assets/20.3.png";
import sub204 from "../assets/20.4.png";
import sub205 from "../assets/20.5.png";
import sub206 from "../assets/20.6.png";
import sub207 from "../assets/20.7.png";
import sub208 from "../assets/20.8.png";
import sub209 from "../assets/20.9.png";
import sub2010 from "../assets/20.10.png";
import sub2011 from "../assets/20.11.png";
import sub2012 from "../assets/20.12.png";
import sub2013 from "../assets/20.13.png";
import sub2014 from "../assets/20.14.png";
import sub2015 from "../assets/20.15.png";
import sub2016 from "../assets/20.16.png";
import sub2017 from "../assets/20.17.png";
import sub2018 from "../assets/20.18.png";
import sub2019 from "../assets/20.19.png";
import sub2020 from "../assets/20.20.png";
import sub2021 from "../assets/20.21.png";
import sub2022 from "../assets/20.22.png";
import sub2023 from "../assets/20.23.png";
import sub2024 from "../assets/20.24.png";
import sub2025 from "../assets/20.25.png";
import sub2026 from "../assets/20.26.png";
import sub2027 from "../assets/20.27.png";
import sub2028 from "../assets/20.28.png";
import sub2029 from "../assets/20.29.png";
import sub2030 from "../assets/20.30.png";
import sub2031 from "../assets/20.31.png";
import sub2032 from "../assets/20.32.png";
// Category 21
import sub211 from "../assets/21.1.png";
import sub212 from "../assets/21.2.png";
import sub213 from "../assets/21.3.png";
import sub214 from "../assets/21.4.png";
import sub215 from "../assets/21.5.png";
import sub216 from "../assets/21.6.png";
import sub217 from "../assets/21.7.png";
import sub218 from "../assets/21.8.png";
import sub219 from "../assets/21.9.png";
import sub2110 from "../assets/21.10.png";
import sub2111 from "../assets/21.11.png";
import sub2112 from "../assets/21.12.png";
import sub2113 from "../assets/21.13.png";
import sub2114 from "../assets/21.14.png";
import sub2115 from "../assets/21.15.png";
import sub2116 from "../assets/21.16.png";
import sub2117 from "../assets/21.17.png";
import sub2118 from "../assets/21.18.png";

const products = [
 
  {
  id: 1,
  brand: "Dreamease",
  category: "Feminine Hygiene Care",
  image: hygiene,
  desc: "Premium feminine hygiene and wellness essentials.",
 subproducts: [
  { name: "Disposable Period Panty", image: sub1, desc: "Comfortable & leak-proof" },
  { name: "Sanitary Pads Ultra Soft XL with Wings", image: sub2, desc: "Ultra soft, XL with wings" },
  { name: "Panty Liners (155mm & 185mm)", image: sub3, desc: "Available in 155mm & 185mm" },
  { name: "Menstrual Cup (Small, Medium & Large)", image: sub4, desc: "Small, Medium & Large sizes" },
  { name: "Intimate Wash Natural Sulfate Free", image: sub5, desc: "Natural, sulfate free formula" },
  { name: "Period Relax & Relief Cream", image: sub6, desc: "Soothing relief cream" },
  { name: "Pregnancy Test Kit", image: sub7, desc: "Fast & accurate results" },
],
},


  {
    id: 2,
    brand: "Dreamease",
    category: "Baby Care",
    image: baby,
    desc: "Dermatologically safe baby hygiene products.",
    subproducts: [
  { name: "Baby Diapers Pant Style (NB, S, M, L & XL)", image: sub21, desc: "Soft & gentle on baby skin",contain: true },
  { name: "Baby Wipes Regular 99% Water Based", image: sub22, desc: "99% water based, hypoallergenic" },
  { name: "Baby Wipes Honey", image: sub23, desc: "Gentle honey formula" },
],
  },
  {
    id: 3,
    brand: "Dreamease",
    category: "Adult Incontinence",
    image: adultincontinence,
    desc: "Comfort-focused adult care and protection solutions.",
    subproducts: [
  { name: "Adult Pant Diaper Standard (M, L & XL)", image: sub31, desc: "Comfortable standard fit" ,contain: true},
  { name: "Adult Pant Diaper Premium (M, L & XL)", image: sub32, desc: "Premium protection & comfort" ,contain: true},
  { name: "Adult Tape Diaper Premium (M, L & XL)", image: sub33, desc: "Secure tape closure" },
  { name: "Underpad Sheet Regular", image: sub34, desc: "Absorbent regular underpad" },
  { name: "Underpad Sheet with Sticking Release Tape", image: sub35, desc: "With sticking release tape" },
],
  },

  {
  id: 4,
  brand: "Dreamease",
  category: "Women's Wellness",
  image: womenswellness,
  desc: "Daily wellness gummies and nutrition support.",
  subproducts: [
    { name: "UTI Defence Gummies", image: sub41, desc: "Urinary tract defence support" },
    { name: "Iron Gummies", image: sub42, desc: "Daily iron supplement" },
    { name: "Calcium & Vitamin-D Gummies", image: sub43, desc: "Bone strength support" },
    { name: "Multivitamin & Minerals Gummies", image: sub44, desc: "Complete daily nutrition" },
  ],
},


  {
    id: 5,
    brand: "Aurum Care",
    category: "Medical Disposables / Surgical",
    image: surgical,
    desc: "Hospital-grade disposable and surgical products.",
    subproducts: [
  { name: "Au-Fix Infusion Set (Classic & Ultra)", image: sub51, desc: "Classic & Ultra variants" },
  { name: "Au-Safe Disposable Syringes", image: sub52, desc: "Safe single-use syringes" },
  { name: "Au-Flon IV Cannula", image: sub53, desc: "Smooth IV cannula insertion" },
  { name: "Scalp Vein Set", image: sub54, desc: "Precision scalp vein set" },
  { name: "Urine Bag (Classic, Premium, Superior & with Urometer)", image: sub55, desc: "Multiple variants available" },
  { name: "2-Way Foley Balloon Catheter", image: sub56, desc: "2-way balloon catheter" },
  { name: "Oxygen Mask", image: sub57, desc: "Standard oxygen delivery mask" },
  { name: "Nebulizer Mask", image: sub58, desc: "For nebulization therapy" },
  { name: "Nasal Cannula", image: sub59, desc: "Comfortable nasal oxygen delivery" },
  { name: "High Oxygen Concentration Mask", image: sub510, desc: "High concentration oxygen mask" ,contain: true },
  { name: "Au-Care Surgical Gloves", image: sub511, desc: "Sterile surgical gloves" },
  { name: "Au-Pore Microporous Paper Tape", image: sub512, desc: "Gentle microporous tape" , contain: true },
  { name: "Au-Plast Elastic Adhesive Bandage", image: sub513, desc: "Elastic adhesive bandage" },
],

  },
  {
    id: 6,
    brand: "Wellness Surgical / Kramson",
    category: "Wound Care & Cotton",
    image: woundcare,
    desc: "Cotton, gauze, bandages and wound care essentials.",
    subproducts: [
  { name: "Absorbent Cotton Wellness Surgical", image: sub61, desc: "Premium absorbent cotton" },
  { name: "Absorbent Cotton Kramson", image: sub62, desc: "Premium absorbent cotton" },
  { name: "Zigzag Cotton", image: sub63, desc: "Zigzag cut cotton rolls",contain: true },
  { name: "Roller Bandage / Rolled Gauze", image: sub64, desc: "Standard roller bandage" },
  { name: "Gauze Cloth / Bandage Than Roll", image: sub65, desc: "Gauze cloth bandage roll" },
  { name: "Crepe Bandage (Standard & Premium)", image: sub66, desc: "Standard & Premium variants",contain: true },
  { name: "POP Bandage Kramson", image: sub67, desc: "Plaster of paris bandage" },
  { name: "Gauze Swabs Sterile Kramson", image: sub68, desc: "Sterile gauze swabs" },
  { name: "Elastic Adhesive Bandage Kramson", image: sub69, desc: "Elastic adhesive bandage",contain: true },
  { name: "Cannula Fixer Kramson", image: sub610, desc: "Secure cannula fixation",contain: true },
  { name: "Microporous Paper Tape Wellness Surgical", image: sub611, desc: "Gentle microporous tape" ,contain: true},
  { name: "Roller Bandage Kramson", image: sub612, desc: "Kramson roller bandage" },
],
  },
  {
  id: 7,
  brand: "Samson",
  category: "Orthopaedic Supports & Braces",
  image: orthopedic,
  desc: "Orthopaedic rehabilitation and support products.",
  subproducts: [
    { name: "Cervical Orthosis (Philadelphia)", image: sub71, desc: "Rigid cervical orthosis" },
    { name: "Cervical Collar Soft with Support", image: sub72, desc: "Soft collar with support" },
    { name: "Cervical Collar Soft (Firm Density)", image: sub73, desc: "Firm density soft collar" },
    { name: "Cervical Collar (Hard Adjustable)", image: sub74, desc: "Hard adjustable collar" },
    { name: "Abdominal Support 9\"/22.5cm", image: sub75, desc: "Abdominal support belt" },
    { name: "Tummy Trimmer/Abdominal Support 8\"/20cm", image: sub76, desc: "Tummy trimmer support" },
    { name: "Abdominal Belt", image: sub77, desc: "Post-surgery abdominal belt" },
    { name: "Ash-Brace (Hyper Extension Brace)", image: sub78, desc: "Hyper extension brace" },
    { name: "Hernia Belt", image: sub79, desc: "Hernia support belt" },
    { name: "Scrotal Support", image: sub710, desc: "Scrotal support" },
    { name: "Pelvic Binder", image: sub711, desc: "Pelvic stabilization binder" },
    { name: "Rib Belt", image: sub712, desc: "Rib fracture support belt" },
    { name: "Chest Binder", image: sub713, desc: "Chest compression binder" },
    { name: "Abdominal Corset (AB-Core)", image: sub714, desc: "Core abdominal corset" },
    { name: "Hip Corset (Mini Shaper)", image: sub715, desc: "Hip mini shaper corset" },
    { name: "Thigh Corset (Smart Shaper)", image: sub716, desc: "Thigh smart shaper" },
    { name: "Contoured Lumbo Sacral Support", image: sub717, desc: "Contoured lumbo sacral support" },
    { name: "Contoured Lumbo Sacral Support Eco", image: sub718, desc: "Eco lumbo sacral support" },
    { name: "Lumbo Sacral Belt (Lumbomed)(Neoprene)", image: sub719, desc: "Neoprene lumbo sacral belt" },
    { name: "Lumbo Sacral Belt", image: sub720, desc: "Standard lumbo sacral belt" },
    { name: "Lumbo Sacral Belt (Double Support)", image: sub721, desc: "Double support belt" },
    { name: "Lumbo Sacral Belt (Double Support) variant", image: sub722, desc: "Double support variant" },
    { name: "Lumbo Corset", image: sub723, desc: "Lumbar corset support" },
    { name: "Taylor's Brace", image: sub724, desc: "Taylor's spinal brace" },
    { name: "Lumbo Sacral Belt (Double Support)(Black)", image: sub725, desc: "Black double support belt" },
    { name: "Contoured Lumbo Sacral Support (Black)", image: sub726, desc: "Black contoured support" },
    { name: "Lumbo Lacepull Brace", image: sub727, desc: "Lacepull lumbo brace" },
    { name: "Posture Support (Sleek)", image: sub728, desc: "Sleek posture support" },
    { name: "Posture Corrector", image: sub729, desc: "Posture correction brace" },
    { name: "Lacepull LS Belt", image: sub730, desc: "Lacepull LS belt" },

  ],
},{
  id: 8,
  brand: "Samson",
  category: "Fracture Aids",
  image: fractureaids,
  desc: "Immobilization and fracture management products.",
  subproducts: [
    { name: "Universal Shoulder Immobilizer", image: sub81, desc: "CH, UNI, SPL sizes" },
    { name: "Elastic Shoulder Immobilizer", image: sub82, desc: "S, M, L, XL, XXL sizes" },
    { name: "Shoulder Support", image: sub83, desc: "Universal, SPL sizes" },
    { name: "Clavicle Brace", image: sub84, desc: "CH, S, M, L, XL, XXL sizes" },
    { name: "Arm Sling Pouch (Baggy)", image: sub85, desc: "CH, S, M, L, XL, XXL sizes" },
    { name: "Pouch Arm Sling (Tropical)", image: sub86, desc: "CH, S, M, L, XL, XXL sizes" },
    { name: "Arm Immobilizer Adjustable", image: sub87, desc: "Universal size" },
    { name: "Cast Shoes", image: sub88, desc: "CH, S, M, L, XL sizes" },
    { name: "Cast Cover Arm", image: sub89, desc: "Universal size" },
    { name: "Cast Cover Leg", image: sub810, desc: "Universal size" },
    { name: "Shoulder Abduction Pillow", image: sub811, desc: "Universal size" },
    { name: "Arm Sling Strap", image: sub812, desc: "Universal size" },
    { name: "Humerus Brace", image: sub813, desc: "Universal size" },
    { name: "Heel Off-loading Shoes", image: sub814, desc: "S, M, L, XL sizes" },
    { name: "Forefoot Off-loading Shoes", image: sub815, desc: "S, M, L, XL sizes" },
  ],
},{
  id: 9,
  brand: "Samson",
  category: "Knee Support / Braces",
  image: orthopedic,
  desc: "Comprehensive knee support and bracing solutions.",
  subproducts: [
    { name: "Knee Brace/Immobilizer Long Type 19\"/48cm", image: sub91, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Brace/Immobilizer Short Type 14\"/36cm", image: sub92, desc: "CH, S, M, L, XL, XXL sizes" },
    { name: "Elastic Knee Support", image: sub93, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Brace/Immobilizer Long Type 22\"/56cm", image: sub94, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Cap Soft (Pair)", image: sub95, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Cap Open Patella", image: sub96, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Cap Rigid Hinged (Nylon Hinges)", image: sub97, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Cap Hinged (Aluminium Hinges)", image: sub98, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Cap Hinged with Patella Gel Pad", image: sub99, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Cap with Patella Ring (Single)", image: sub910, desc: "S, M, L, XL, XXL sizes" },
    { name: "Knee Support Hinged Dry-Tex", image: sub911, desc: "S, M, L, XL, XXL sizes" },
    { name: "R.O.M Knee Brace 18\"/46cm", image: sub912, desc: "Universal size" },
    { name: "Knee Support Dry-Tex", image: sub913, desc: "Universal, SPL sizes" },
    { name: "Knee Cap Furo (Pair)", image: sub914, desc: "S, M, L, XL, XXL sizes" },
    { name: "R.O.M Knee Brace Height Adjustable", image: sub915, desc: "Universal size" },
    { name: "Gel Knee Cushion For Prayers (Pair)", image: sub916, desc: "S, M, L, XL, XXL sizes" },
    { name: "Functional Knee Support", image: sub917, desc: "S, M, L, XL, XXL sizes" },
  ],
},{
  id: 10,
  brand: "Samson",
  category: "Ankle Support / Braces",
  image: walkingaids,
  desc: "Ankle support, braces and splints for all needs.",
  subproducts: [
    { name: "Ankle Binder", image: sub101, desc: "S, M, L, XL sizes" },
    { name: "Anklet (Pair)", image: sub102, desc: "S, M, L, XL, XXL sizes" },
    { name: "Foot Drop Splint Right/Left with Liner", image: sub103, desc: "CH, S, M, L, XL sizes" },
    { name: "Ankle Splint", image: sub104, desc: "Universal size" },
    { name: "Ankle Brace", image: sub105, desc: "CH, S, M, L, XL sizes" },
    { name: "PF Night Splint", image: sub106, desc: "S, M, L sizes" },
    { name: "Dorsal Night Splint", image: sub107, desc: "S/M, L/XL sizes" },
    { name: "Ankle Support with Binder", image: sub108, desc: "S, M, L, XL, XXL sizes" },
    { name: "Air Ankle Splint", image: sub109, desc: "Universal size" },
    { name: "Gel Ankle Splint", image: sub1010, desc: "Universal size" },
    { name: "Foot Walker Boot with Airway", image: sub1011, desc: "S, M, L sizes" },
    { name: "R.O.M Foot Walker Boot", image: sub1012, desc: "S, M, L sizes" },
    { name: "Foot Walker Boot Short (With Airway)", image: sub1013, desc: "S, M, L sizes" },
    { name: "R.O.M Foot Walker Boot", image: sub1014, desc: "S, M, L sizes" },
    { name: "R.O.M Foot Walker Boot", image: sub1015, desc: "S, M, L sizes" },
  ],
},{
  id: 11,
  brand: "Samson",
  category: "Thigh & Calf Support / Varicose Vein Compression Stockings",
  image: orthopedic,
  desc: "Compression supports and medical stockings for circulation care.",
  subproducts: [
    { name: "Thigh Support (Pair)", image: sub111, desc: "TC-1101 S,M,L,XL,XXL sizes" },
    { name: "Calf Support (Pair)", image: sub112, desc: "TC-1102 S,M,L,XL,XXXL sizes" },
    { name: "Medical Compression Stockings Thigh High Class-I AG (Pair)", image: sub113, desc: "GS-1201 S,M,L,XL,XXL" },
    { name: "Medical Compression Stockings Knee High Class-II AD (Pair)", image: sub114, desc: "GS-1202 S,M,L,XL,XXL" },
    { name: "Anti-Embolism Stockings/DVT Thigh High AG (Pair)", image: sub115, desc: "GS-1203 S,M,L,XL,XXL" },
    { name: "Arthritis Compression Gloves", image: sub116, desc: "GS-1204 S,M,L,XL" },
    { name: "Lymphedema Arm Sleeve (Pair)", image: sub117, desc: "GS-1205 S,M,L,XL,XXL" },
    { name: "Graduated Compression Socks (Pair)", image: sub118, desc: "GS-1206 S,M,L,XL" },
    { name: "Graduated Compression Socks (Ankle Size) (Pair)", image: sub119, desc: "GS-1207 UNIVERSAL" },
    { name: "Medical Compression Stockings Thigh High Class-I AG (Pair)", image: sub1110, desc: "GS-1208 S,M,L,XL,XXL" },
    { name: "Medical Compression Stockings Knee High Class-I AD (Pair)", image: sub1111, desc: "GS-1209 S,M,L,XL,XXL" },
    { name: "Varicose Vein Stockings Classic (Pair)", image: sub1112, desc: "GS-1210 S,M,L,XL,XXL" },
    { name: "Varicose Vein Stockings Below Knee Classic (Pair)", image: sub1113, desc: "GS-1211 S,M,L,XL,XXL" },
    { name: "Compression Garment Face Open Hood", image: sub1114, desc: "GS-1212 UNIVERSAL,SPL" },
  ],
},
{
    id: 12,
    brand: "Samson",
    category: "Surgical Dressing",
      image: surgicaldressing,
    desc: "Professional surgical dressing products.",
    subproducts: [
  { name: "SAM POP Plaster of Paris Bandage", image: sub121, desc: "Plaster of paris bandage" },
  { name: "SAM PORE Microporous Paper Tape (5m & 9m)", image: sub122, desc: "5m & 9m variants" },
  { name: "Kinesiology Therapeutic Tape", image: sub123, desc: "Therapeutic kinesiology tape" },
  { name: "SAM CREPE Cotton Crepe Bandage", image: sub124, desc: "Cotton crepe bandage" },
  { name: "SAM NETT Stockinette", image: sub125, desc: "Tubular stockinette" },
  { name: "SAM PLAST Elastic Adhesive Bandage", image: sub126, desc: "Elastic adhesive bandage" },
  { name: "SAM FIX Cannula Fixator", image: sub127, desc: "Secure cannula fixation" },
  { name: "CAST PAD Soft Roll", image: sub128, desc: "Soft cast padding roll" },
],
  },
  {
    id: 13,
    brand: "Samson Sport",
    category: "Sport Gear",
     image: sportgear,
    desc: "Sports supports and gym protection products.",
    subproducts: [
  { name: "Abdominal Support", image: sub131, desc: "Core abdominal support" },
  { name: "Lumbo Sacral Support", image: sub132, desc: "Lower back support" },
  { name: "Weight Lifting Belt", image: sub133, desc: "Gym weight lifting belt" },
  { name: "Knee Support (Pair)", image: sub134, desc: "Active knee support pair" },
  { name: "Knee Support (Neoprene)", image: sub135, desc: "Neoprene knee support" },
  { name: "Knee Support with Strap", image: sub136, desc: "Knee support with strap" },
  { name: "Weight Lifting Knee Strap (Pair)", image: sub137, desc: "Knee strap for lifting" },
  { name: "Wrist Wrap with Thumb Loop (Pair)", image: sub138, desc: "Wrist wrap & thumb loop" },
  { name: "Wrist Support with Thumb Loop Neoprene (Pair)", image: sub139, desc: "Neoprene wrist support" },
  { name: "Tennis Elbow / Golf Support", image: sub1310, desc: "Elbow pain relief support" },
  { name: "Elbow Support With Strap", image: sub1311, desc: "Elbow support with strap" },
  { name: "Ankle Support With Strap", image: sub1312, desc: "Ankle support with strap" },
  { name: "Ankle Support (Neoprene)", image: sub1313, desc: "Neoprene ankle support" },
  { name: "Shoulder Support", image: sub1314, desc: "Shoulder compression support" },
  { name: "Finger Support", image: sub1315, desc: "Protective finger support" },
  { name: "Samgrip Gym Gloves", image: sub1316, desc: "Grip gym gloves" },
  { name: "Yoga Mat TPE", image: sub1317, desc: "Eco-friendly TPE yoga mat" },
  { name: "Dual Patella Support", image: sub1318, desc: "Dual patella knee support" },
  { name: "Knee Pad", image: sub1319, desc: "Protective knee pad" },
  { name: "Knee Support Copper Fit (Pair)", image: sub1320, desc: "Copper fit knee support" },
],
  },
  {
    id: 14,
    brand: "Samson Junior",
    category: "Junior / Paediatric Range",
     image: last,
    desc: "Healthcare and orthopaedic products for children.",
    subproducts: [
  { name: "Cervical Orthosis Philadelphia (Child)", image: sub141, desc: "Paediatric cervical support" },
  { name: "Cervical Collar Soft Firm Density (Child)", image: sub142, desc: "Soft firm density collar" },
  { name: "Universal Shoulder Immobilizer (Child)", image: sub143, desc: "Universal shoulder support" },
  { name: "Clavicle Brace (Child)", image: sub144, desc: "Paediatric clavicle brace" },
  { name: "Arm Sling Pouch (Child)", image: sub145, desc: "Comfortable arm sling" },
  { name: "Foot Drop Splint (Child)", image: sub146, desc: "Foot drop correction splint" },
  { name: "Ankle Brace (Child)", image: sub147, desc: "Paediatric ankle support" },
  { name: "Foot Walker Boot Short (Child)", image: sub148, desc: "Short foot walker boot" },
  { name: "Wrist Splint (Child)", image: sub149, desc: "Paediatric wrist splint" },
  { name: "Thumb Spica Splint (Child)", image: sub1410, desc: "Thumb spica support" },

  { name: "Knee Brace Immobilizer (Child)", image: sub1411, desc: "Knee immobilizer brace" },
  { name: "Knee Wrap Hinged (Child)", image: sub1412, desc: "Hinged knee wrap" },
  { name: "Skin Traction Set (Child)", image: sub1413, desc: "Paediatric skin traction" },
  { name: "Arch Support PU Gel (Child)", image: sub1414, desc: "PU gel arch support" },
  { name: "Flat Foot Insole Paediatric (Child)", image: sub1415, desc: "Flat foot correction insole" },
  { name: "Pavlik Harness", image: sub1416, desc: "Hip dysplasia harness" },
],
  },
  {
  id: 15,
  brand: "Samson",
  category: "Wrist & Forearm Support / Splints",
  image: orthopedic,
  desc: "Supportive wrist, forearm, elbow and thumb braces.",
  subproducts: [
    { name: "Wrist Splint (Ambidextrous)", image: sub151, desc: "WR-0801 CH,S,M,L,XL" },
    { name: "Cock-Up ForeArm Splint (Ambidextrous)", image: sub152, desc: "WR-0802 S,M,L" },
    { name: "Forearm Splint", image: sub153, desc: "WR-0803 UNIVERSAL" },
    { name: "Wrist Brace with Double Lock", image: sub154, desc: "WR-0804 UNIVERSAL" },
    { name: "Wrist Brace with Thumb Support", image: sub155, desc: "WR-0805 UNIVERSAL" },
    { name: "Tennis Elbow Support", image: sub156, desc: "WR-0806 UNIVERSAL" },
    { name: "Thumb Spica Splint", image: sub157, desc: "WR-0808 UNIVERSAL" },
    { name: "Hand Resting Splint (Left / Right)", image: sub158, desc: "WR-0809 UNIVERSAL" },
    { name: "Wrist Thumb Brace with Silicone Pad (Pair)", image: sub159, desc: "WR-0810 S,L" },
    { name: "Palm Brace", image: sub1510, desc: "WR-0811 S,M,L,XL" },
    { name: "Wrist Splint with Thumb", image: sub1511, desc: "WR-0812 S,M,L,XL" },
    { name: "Elbow Support with Strap", image: sub1512, desc: "WR-0813 S,M,L,XL" },
    { name: "R.O.M Elbow Brace (Right/Left)", image: sub1513, desc: "WR-0814 UNIVERSAL" },
    { name: "Tourniquet", image: sub1514, desc: "WR-0815 S,M,L" },
    { name: "Tennis Elbow Support (Furo) (Pair)", image: sub1515, desc: "WR-0816 S,M,L" },
    { name: "Tennis Elbow Brace with Silicone Pad", image: sub1516, desc: "WR-0817 S,M,L" },
  ],

},
{
  id: 16,
  brand: "Samson",
  category: "Traction Kits",
  image: orthopedic,
  desc: "Traction therapy and rehabilitation support products.",
  subproducts: [
    { name: "Cervical Traction (Head Halter)", image: sub161, desc: "TR-0901 UNIVERSAL" },
    { name: "Cervical Traction Kit Sitting with Weight Bag", image: sub162, desc: "TR-0903 UNIVERSAL" },
    { name: "Cervical Traction Kit Sleeping with Weight Bag", image: sub163, desc: "TR-0905 UNIVERSAL" },
    { name: "Pelvic Traction Belt", image: sub164, desc: "TR-0908 S,M,L,XL,XXL" },
    { name: "Pelvic Traction Kit with Weight Bag", image: sub165, desc: "TR-0910 S,M,L,XL,XXL" },
    { name: "Traction Pulley Bracket", image: sub166, desc: "TR-0912 UNIVERSAL" },
    { name: "Traction Weight Bag", image: sub167, desc: "TR-0913 UNIVERSAL" },
    { name: "Skin Traction Set (PUF Liner)", image: sub168, desc: "TR-0915 CH,S,UNIVERSAL" },
    { name: "Leg Traction Brace", image: sub169, desc: "TR-0917 S,M,L,XL,XXL" },
    { name: "Ankle Traction Belt", image: sub1610, desc: "TR-0918 UNIVERSAL" },
  ],
},

{
  id: 17,
  brand: "Samson",
  category: "Finger Splints",
  image: orthopedic,
  desc: "Finger protection and rehabilitation splints.",
  subproducts: [
    { name: "Finger Cot", image: sub171, desc: "FN-1003 S,M,L" },
    { name: "Finger Extension Splint", image: sub172, desc: "FN-1004 S,M,L" },
    { name: "Mallet Finger Splint", image: sub173, desc: "FN-1008 UNIVERSAL" },
  ],
},
{
  id: 18,
  brand: "Samson",
  category: "Neoprene Support / Braces",
  image: orthopedic,
  desc: "Advanced neoprene orthopedic braces and supports.",
  subproducts: [
    {
      name: "Abdominal Binder",
      image: sub181,
      desc: "NP-3001 UNIVERSAL,SPL",
      mrp: "1090",
    },
    {
      name: "Wrist Wrap",
      image: sub182,
      desc: "NP-3002 UNIVERSAL",
      mrp: "250",
    },
    {
      name: "Elbow Wrap",
      image: sub183,
      desc: "NP-3003 S,M,L,XL",
      mrp: "440",
    },
    {
      name: "Knee Support Hinged",
      image: sub184,
      desc: "NP-3004 S,M,L,XL,XXL",
      mrp: "1590",
    },
    {
      name: "Thumb Spica Brace",
      image: sub185,
      desc: "NP-3005 S,M,L,XL",
      mrp: "450",
    },
    {
      name: "Knee Wrap Hinged",
      image: sub186,
      desc: "NP-3006 CH,S,M,L,XL,XXL",
      mrp: "1590",
    },
    {
      name: "Knee Wrap",
      image: sub187,
      desc: "NP-3007 UNIVERSAL,SPL",
      mrp: "1250",
    },
    {
      name: "Wrist/Palm Brace with Thumb Support",
      image: sub188,
      desc: "NP-3010 S,M,L,XL",
      mrp: "450",
    },
    {
      name: "Shoulder Support",
      image: sub189,
      desc: "NP-3012 UNIVERSAL,SPL",
      mrp: "1250",
    },
    {
      name: "Ankle Support",
      image: sub1810,
      desc: "NP-3013 UNIVERSAL",
      mrp: "990",
    },
    {
      name: "Ankle Wrap",
      image: sub1811,
      desc: "NP-3014 UNIVERSAL",
      mrp: "690",
    },
    {
      name: "Wrist Brace with Thumb",
      image: sub1812,
      desc: "NP-3015 UNIVERSAL",
      mrp: "440",
    },
    {
      name: "Knee Support (Sportif)",
      image: sub1813,
      desc: "NP-3016 S,M,L,XL,XXL",
      mrp: "890",
    },
    {
      name: "OA Knee Support Right Varus / Left Valgus",
      image: sub1814,
      desc: "NP-3017 S,M,L,XL,XXL",
      mrp: "1790",
    },
    {
      name: "OA Knee Support Left Varus / Right Valgus",
      image: sub1815,
      desc: "NP-3017 S,M,L,XL,XXL",
      mrp: "1790",
    },
    {
      name: "Hip Brace",
      image: sub1816,
      desc: "NP-3018 UNIVERSAL",
      mrp: "1990",
    }
  ],
},
{
  id: 19,
  brand: "Samson",
  category: "Foot Care & Support",
  image: orthopedic,
  desc: "Foot care, insoles and support products.",
  subproducts: [
    { name: "Silicone Insole Pair", image: sub191, desc: "FC-4001 S,M,L,XL" },
    { name: "Orthotic Insole Pair", image: sub192, desc: "FC-4002 S,M,L,XL" },
    { name: "Silicone Medical Arch Support Pair", image: sub193, desc: "FC-4003 S,M,L" },
    { name: "Gel Heel Cushion", image: sub194, desc: "FC-4004 S,L" },
    { name: "Heel Cushion/Cup Pair", image: sub195, desc: "FC-4005 S,M,L,XL" },
    { name: "Toe Separator Pair", image: sub196, desc: "FC-4006 S,M,L" },
    { name: "Metatarsal Pad Pair", image: sub197, desc: "FC-4007 UNIVERSAL" },
    { name: "Hallux Valgus Splint", image: sub198, desc: "FC-4008 UNIVERSAL" },
    { name: "Bunion Splint", image: sub199, desc: "FC-4010 UNIVERSAL" },
    { name: "Arch Support PU Gel Pair", image: sub1910, desc: "FC-4011 CH,AD" },
    { name: "Silicone Heel Pad Pair", image: sub1911, desc: "FC-4012 UNIVERSAL" },
    { name: "Silicone Socks Pair", image: sub1912, desc: "FC-4013 UNIVERSAL" },
    { name: "Arch Support with Silicone Pad Pair", image: sub1913, desc: "FC-4014 UNIVERSAL" },
    { name: "Bunion Support with Silicone Pad Pair", image: sub1914, desc: "FC-4015 UNIVERSAL" },
    { name: "Hallux Valgus Night Splint Pair", image: sub1915, desc: "FC-4016 UNIVERSAL" },
    { name: "Flat Foot Insole Paediatric Pair", image: sub1916, desc: "FC-4017 CH1,CH2,CH3,CH4" },
    { name: "3/4 Orthotic Insole with Arch Support Pair", image: sub1917, desc: "FC-4018 XS,S,M,L,XL" },
    { name: "Metatarsal Support", image: sub1918, desc: "FC-4019 UNIVERSAL" },
    { name: "Toe Spacer", image: sub1919, desc: "FC-4020 UNIVERSAL" },
  ],
},
{
  id: 20,
  brand: "Samson",
  category: "Physiotherapy & Rehabilitation",
  image: physiotherapy,
  desc: "Recovery, rehabilitation and physiotherapy aids.",
  subproducts: [
    { name: "Cervical Pillow Round", image: sub201, desc: "OP-1401 UNIVERSAL" },
    { name: "Cervical Pillow Regular", image: sub202, desc: "OP-1402 UNIVERSAL" },
    { name: "Cervical Pillow Contoured", image: sub203, desc: "OP-1403 UNIVERSAL" },
    { name: "Cervical Pillow Memory Foam", image: sub204, desc: "OP-1404 UNIVERSAL" },
    { name: "Cervical Pillow Travel", image: sub205, desc: "OP-1405 UNIVERSAL" },
    { name: "Tailbone Support Coccyx Cushion", image: sub206, desc: "OP-1406 UNIVERSAL" },
    { name: "Lumbo Back Rest Moulded Foam", image: sub207, desc: "OP-1408 UNIVERSAL" },
    { name: "Ring Seat Pillow", image: sub208, desc: "OP-1409 UNIVERSAL" },
    { name: "Coccyx Cushion Seat", image: sub209, desc: "OP-1410 UNIVERSAL" },
    { name: "Hospital Back Rest", image: sub2010, desc: "OP-1411 UNIVERSAL" },
    { name: "Anatomic Pillow", image: sub2011, desc: "OP-1412 UNIVERSAL" },
    { name: "Lumbo Back Rest Short", image: sub2012, desc: "OP-1413 UNIVERSAL" },
    { name: "Knee Rest Pillow", image: sub2013, desc: "OP-1414 UNIVERSAL" },
    { name: "Foot Rest Pillow", image: sub2014, desc: "OP-1415 UNIVERSAL" },
    { name: "Neck Corrector & Relaxer", image: sub2015, desc: "OP-1419 UNIVERSAL"},
    { name: "Weight Cuff", image: sub2016, desc: "PA-2001" },
    { name: "Exercising Gel Ball TPR Egg Shape", image: sub2017, desc: "PA-2002 LIGHT,HEAVY" },
    { name: "Exercising Ball PU", image: sub2018, desc: "PA-2003 UNIVERSAL" },
    { name: "Hot & Cold Pack", image: sub2019, desc: "PA-2005 M/L" },
    { name: "Sam Band Resistance Band", image: sub2020, desc: "PA-2007 O/G/B" },
    { name: "Hip Resistance Band", image: sub2021, desc: "PA-2008 UNIVERSAL" },
    { name: "Ice Bag", image: sub2022, desc: "PA-2012 UNIVERSAL" },
    { name: "Cool Pack", image: sub2023, desc: "PA-2017 S/L" },
    { name: "Hot & Cold Eye Mask", image: sub2024, desc: "PA-2019 UNIVERSAL" },
    { name: "Cool Eyes", image: sub2025, desc: "PA-2020 UNIVERSAL" },
    { name: "Hand Gripper", image: sub2026, desc: "PA-2021 UNIVERSAL" },
    { name: "Adjustable Hand Gripper", image: sub2027, desc: "PA-2022 UNIVERSAL" },
    { name: "Wrist & Arm Exerciser", image: sub2028, desc: "PA-2023 UNIVERSAL" },
    { name: "Piano Finger Exerciser", image: sub2029, desc: "PA-2024 UNIVERSAL" },
    { name: "Silicone Finger Exerciser", image: sub2030, desc: "PA-2025 UNIVERSAL" },
    { name: "Gel Exercise Ball Round Shape", image: sub2031, desc: "PA-2026 UNIVERSAL" },
    { name: "Anti Burst Gym Ball", image: sub2032, desc: "PA-2028 UNIVERSAL" },
  ],
},
{
  id: 21,
  brand: "Samson",
  category: "Walking Aids & Mobility",
  image: walkingaids,
  desc: "Mobility assistance and rehabilitation equipment.",
  subproducts: [
    { name: "Commode Stool", image: sub211, desc: "WA-1001 UNIVERSAL" },
    { name: "Commode Chair", image: sub212, desc: "WA-1002 UNIVERSAL" },
    { name: "Walking Stick Soft Top Handle", image: sub213, desc: "WA-1003 UNIVERSAL" },
    { name: "Foldable Stick", image: sub214, desc: "WA-1004 UNIVERSAL" },
    { name: "Quadra Stick", image: sub215, desc: "WA-1005 UNIVERSAL" },
    { name: "Elbow Crutch Adjustable", image: sub216, desc: "WA-1006 UNIVERSAL" },
    { name: "Walker Invalid's HD", image: sub217, desc: "WA-1007 UNIVERSAL" },
    { name: "Walker Invalid's Front Wheel HD", image: sub218, desc: "WA-1008 UNIVERSAL" },
    { name: "Axillary Crutch Pair", image: sub219, desc: "WA-1009 UNIVERSAL" },
    { name: "Walking Stick Quadripod", image: sub2110, desc: "WA-1010 UNIVERSAL" },
    { name: "Wheelchair Standard", image: sub2111, desc: "WA-0809 UNIVERSAL" },
    { name: "Wheelchair with Commode", image: sub2112, desc: "WA-0609 UNIVERSAL" },
    { name: "Electric Wheelchair", image: sub2113, desc: "WA-0808 UNIVERSAL" },
    { name: "Spirometer", image: sub2114, desc: "MT-06 UNIVERSAL" },
    { name: "Nebuliser", image: sub2115, desc: "MT-09 UNIVERSAL" },
    { name: "Heating Pad Ortho", image: sub2116, desc: "MT-10 REGULAR/XL" },
    { name: "Ortho Heating Gel Bag Electric", image: sub2117, desc: "MT-12 UNIVERSAL" },
    { name: "Air Mattress", image: sub2118, desc: "MT-13 UNIVERSAL" },
  ],
},
];

const categories = ["All", ...new Set(products.map((p) => p.category))];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [modalProduct, setModalProduct] = useState(null);

  const filtered = products.filter((p) => {
    const matchCat =
      activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
  searchQuery.trim() === "" ||
  p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
  p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
  p.subproducts.some((item) =>
    (typeof item === "object" ? item.name : item)
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );
return matchCat && matchSearch;
  });

  return (
    <div className="products-page">
      <section className="products-hero">
        <p className="products-eyebrow">CATALOG</p>
        <h1 className="products-title">
          Our complete{" "}
          <span className="products-title-accent">
            healthcare product range
          </span>
        </h1>
        <p className="products-subtitle">
          Browse our extensive range of medical, surgical, orthopedic,
          rehabilitation and wellness products.
        </p>
      </section>

      <section className="products-controls">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search categories or products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="view-toggles">
            <button
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              ⬜
            </button>
            <button
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
            >
              ☰
            </button>
          </div>
        </div>

        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${activeCategory === cat ? "pill-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="products-grid-section">
        <div
          className={`products-grid ${
            viewMode === "list" ? "products-list" : ""
          }`}
        >
          {filtered.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-card-img placeholder-card">
  {product.image ? (
    <img
      src={product.image}
      alt={product.category}
      className="product-image"
    />
  ) : (
    <div className="placeholder-icon">🏥</div>
  )}
</div>

              <div className="product-card-body">
                <p className="product-category-name">{product.category}</p>
                <p className="product-card-desc">{product.desc}</p>

                <div className="product-card-footer">
                  <button
                    className="btn-view-details"
                    onClick={() => setModalProduct(product)}
                  >
                    View Details →
                  </button>
                  <button className="btn-quote-icon" title="Request Quote">
                    💬
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-results">No products found.</div>
        )}
      </section>

      {/* MODAL */}
      {modalProduct && (
        <div
          className="modal-overlay"
          onClick={() => setModalProduct(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <p className="modal-eyebrow">{modalProduct.brand}</p>
                <h2>{modalProduct.category}</h2>
                <p className="modal-desc">{modalProduct.desc}</p>
              </div>
              <button
                className="modal-close"
                onClick={() => setModalProduct(null)}
              >
                ✕
              </button>
            </div>
            <div className="modal-products">
              <h4 className="modal-products-heading">Products Included</h4>
            <ul className="modal-subproducts-list">
  {modalProduct.subproducts.map((item, index) => (
   <li key={index} className="modal-subproduct-item">
  <div className="modal-subproduct-img-wrap">
    {typeof item === "object" && item.image ? (
      <img
        src={item.image}
        alt={item.name}
        className={`modal-subproduct-img ${item.contain ? "modal-subproduct-img-contain" : ""}`}
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />
    ) : null}
    <div
      className="modal-subproduct-emoji"
      style={{ display: typeof item === "object" && item.image ? "none" : "flex" }}
    >
      🏥
    </div>
  </div>
      <p className="modal-subproduct-name">
        {typeof item === "object" ? item.name : item}
      </p>
      {typeof item === "object" && item.desc && (
        <p className="modal-subproduct-desc">{item.desc}</p>
      )}
    </li>
  ))}
</ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
