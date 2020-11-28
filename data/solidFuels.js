var solidFuels = [
/*
                  
                  {
                        'Vulnerability to drought (%)': "85",
                        "CountryCode": "004",
                        "Country": "Afghanistan"
                  },
                  {
                        'Vulnerability to drought (%)': "39",
                        "CountryCode": "008",
                        "Country": "Albania"
                  },
                  
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "020",
                        "Country": "Andorra"
                  },
                  {
                        'Vulnerability to drought (%)': "55",
                        "CountryCode": "024",
                        "Country": "Angola"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "028",
                        "Country": "Antigua and Barbuda"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "032",
                        "Country": "Argentina"
                  },
                  {
                        'Vulnerability to drought (%)': "19",
                        "CountryCode": "051",
                        "Country": "Armenia"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "036",
                        "Country": "Australia"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "040",
                        "Country": "Austria"
                  },
                  {
                        'Vulnerability to drought (%)': "7",
                        "CountryCode": "031",
                        "Country": "Azerbaijan"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "044",
                        "Country": "Bahamas"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "048",
                        "Country": "Bahrain"
                  },
                  {
                        'Vulnerability to drought (%)': "91",
                        "CountryCode": "050",
                        "Country": "Bangladesh"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "052",
                        "Country": "Barbados"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "112",
                        "Country": "Belarus"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "056",
                        "Country": "Belgium"
                  },
                  {
                        'Vulnerability to drought (%)': "12",
                        "CountryCode": "084",
                        "Country": "Belize"
                  },
                  {
                        'Vulnerability to drought (%)': "91",
                        "CountryCode": "204",
                        "Country": "Benin"
                  },
                  {
                        'Vulnerability to drought (%)': "",
                        "CountryCode": "060",
                        "Country": "Bermuda"
                  },
                  {
                        'Vulnerability to drought (%)': "40",
                        "CountryCode": "064",
                        "Country": "Bhutan"
                  },
                  {
                        'Vulnerability to drought (%)': "29",
                        "CountryCode": "068",
                        "Country": "Bolivia"
                  },
                  {
                        'Vulnerability to drought (%)': "45",
                        "CountryCode": "070",
                        "Country": "Bosnia and Herzegovina"
                  },
                  {
                        'Vulnerability to drought (%)': "37",
                        "CountryCode": "072",
                        "Country": "Botswana"
                  },
                  {
                        'Vulnerability to drought (%)': "6",
                        "CountryCode": "076",
                        "Country": "Brazil"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "096",
                        "Country": "Brunei Darussalam"
                  },
                  {
                        'Vulnerability to drought (%)': "14",
                        "CountryCode": "100",
                        "Country": "Bulgaria"
                  },
                  {
                        'Vulnerability to drought (%)': "92",
                        "CountryCode": "854",
                        "Country": "Burkina Faso"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "108",
                        "Country": "Burundi"
                  },
                  {
                        'Vulnerability to drought (%)': "89",
                        "CountryCode": "116",
                        "Country": "Cambodia"
                  },
                  {
                        'Vulnerability to drought (%)': "75",
                        "CountryCode": "120",
                        "Country": "Cameroon"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "124",
                        "Country": "Canada"
                  },
                  {
                        'Vulnerability to drought (%)': "32",
                        "CountryCode": "132",
                        "Country": "Cape Verde"
                  },
                  {
                        'Vulnerability to drought (%)': "",
                        "CountryCode": "136",
                        "Country": "Cayman Islands"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "140",
                        "Country": "Central African Republic"
                  },
                  {
                        'Vulnerability to drought (%)': "88",
                        "CountryCode": "148",
                        "Country": "Chad"
                  },
                  {
                        'Vulnerability to drought (%)': "",
                        "CountryCode": "830",
                        "Country": "Channel Islands"
                  },
                  {
                        'Vulnerability to drought (%)': "6",
                        "CountryCode": "152",
                        "Country": "Chile"
                  },
                  {
                        'Vulnerability to drought (%)': "46",
                        "CountryCode": "156",
                        "Country": "China"
                  },
                  {
                        'Vulnerability to drought (%)': "14",
                        "CountryCode": "170",
                        "Country": "Colombia"
                  },
                  {
                        'Vulnerability to drought (%)': "71",
                        "CountryCode": "174",
                        "Country": "Comoros"
                  },
                  {
                        'Vulnerability to drought (%)': "77",
                        "CountryCode": "178",
                        "Country": "Congo"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "184",
                        "Country": "Cook Islands"
                  },
                  {
                        'Vulnerability to drought (%)': "6",
                        "CountryCode": "188",
                        "Country": "Costa Rica"
                  },
                  {
                        'Vulnerability to drought (%)': "78",
                        "CountryCode": "384",
                        "Country": "Cote d'Ivoire"
                  },
                  {
                        'Vulnerability to drought (%)': "8",
                        "CountryCode": "191",
                        "Country": "Croatia"
                  },
                  {
                        'Vulnerability to drought (%)': "9",
                        "CountryCode": "192",
                        "Country": "Cuba"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "196",
                        "Country": "Cyprus"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "203",
                        "Country": "Czech Republic"
                  },
                  {
                        'Vulnerability to drought (%)': "93",
                        "CountryCode": "180",
                        "Country": "Democratic Republic of the Congo"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "208",
                        "Country": "Denmark"
                  },
                  {
                        'Vulnerability to drought (%)': "13",
                        "CountryCode": "262",
                        "Country": "Djibouti"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "212",
                        "Country": "Dominica"
                  },
                  {
                        'Vulnerability to drought (%)': "7",
                        "CountryCode": "214",
                        "Country": "Dominican Republic"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "218",
                        "Country": "Ecuador"
                  },
                  
                  {
                        'Vulnerability to drought (%)': "22",
                        "CountryCode": "222",
                        "Country": "El Salvador"
                  },
                  {
                        'Vulnerability to drought (%)': "51",
                        "CountryCode": "226",
                        "Country": "Equatorial Guinea"
                  },
                  {
                        'Vulnerability to drought (%)': "60",
                        "CountryCode": "232",
                        "Country": "Eritrea"
                  },
                  {
                        'Vulnerability to drought (%)': "11",
                        "CountryCode": "233",
                        "Country": "Estonia"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "231",
                        "Country": "Ethiopia"
                  },
                  {
                        'Vulnerability to drought (%)': "37",
                        "CountryCode": "242",
                        "Country": "Fiji"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "246",
                        "Country": "Finland"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "250",
                        "Country": "France"
                  },
                  {
                        'Vulnerability to drought (%)': "26",
                        "CountryCode": "266",
                        "Country": "Gabon"
                  },
                  {
                        'Vulnerability to drought (%)': "91",
                        "CountryCode": "270",
                        "Country": "Gambia"
                  },
                  {
                        'Vulnerability to drought (%)': "46",
                        "CountryCode": "268",
                        "Country": "Georgia"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "276",
                        "Country": "Germany"
                  },
                  {
                        'Vulnerability to drought (%)': "84",
                        "CountryCode": "288",
                        "Country": "Ghana"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "300",
                        "Country": "Greece"
                  },
                  {
                        'Vulnerability to drought (%)': "",
                        "CountryCode": "304",
                        "Country": "Greenland"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "308",
                        "Country": "Grenada"
                  },
                  {
                        'Vulnerability to drought (%)': "57",
                        "CountryCode": "320",
                        "Country": "Guatemala"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "324",
                        "Country": "Guinea"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "624",
                        "Country": "Guinea-Bissau"
                  },
                  {
                        'Vulnerability to drought (%)': "7",
                        "CountryCode": "328",
                        "Country": "Guyana"
                  },
                  {
                        'Vulnerability to drought (%)': "91",
                        "CountryCode": "332",
                        "Country": "Haiti"
                  },
                  {
                        'Vulnerability to drought (%)': "51",
                        "CountryCode": "340",
                        "Country": "Honduras"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "348",
                        "Country": "Hungary"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "352",
                        "Country": "Iceland"
                  },
                  {
                        'Vulnerability to drought (%)': "58",
                        "CountryCode": "356",
                        "Country": "India"
                  },
                  {
                        'Vulnerability to drought (%)': "55",
                        "CountryCode": "360",
                        "Country": "Indonesia"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "364",
                        "Country": "Iran (Islamic Republic of)"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "368",
                        "Country": "Iraq"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "372",
                        "Country": "Ireland"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "376",
                        "Country": "Israel"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "380",
                        "Country": "Italy"
                  },
                  {
                        'Vulnerability to drought (%)': "11",
                        "CountryCode": "388",
                        "Country": "Jamaica"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "392",
                        "Country": "Japan"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "400",
                        "Country": "Jordan"
                  },
                  {
                        'Vulnerability to drought (%)': "9",
                        "CountryCode": "398",
                        "Country": "Kazakhstan"
                  },
                  {
                        'Vulnerability to drought (%)': "80",
                        "CountryCode": "404",
                        "Country": "Kenya"
                  },
                  {
                        'Vulnerability to drought (%)': "80",
                        "CountryCode": "296",
                        "Country": "Kiribati"
                  },
                  {
                        'Vulnerability to drought (%)': "91",
                        "CountryCode": "408",
                        "Country": "Korea, Democratic People's Republic of"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "410",
                        "Country": "Korea, Republic of"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "414",
                        "Country": "Kuwait"
                  },
                  {
                        'Vulnerability to drought (%)': "34",
                        "CountryCode": "417",
                        "Country": "Kyrgyzstan"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "418",
                        "Country": "Lao People's Democratic Republic"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "428",
                        "Country": "Latvia"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "422",
                        "Country": "Lebanon"
                  },
                  {
                        'Vulnerability to drought (%)': "61",
                        "CountryCode": "426",
                        "Country": "Lesotho"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "430",
                        "Country": "Liberia"
                  },
                  
                  {
                        'Vulnerability to drought (%)': "",
                        "CountryCode": "438",
                        "Country": "Liechtenstein"
                  },
                  {
                        'Vulnerability to drought (%)': "21",
                        "CountryCode": "440",
                        "Country": "Lithuania"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "442",
                        "Country": "Luxembourg"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "450",
                        "Country": "Madagascar"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "454",
                        "Country": "Malawi"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "458",
                        "Country": "Malaysia"
                  },
                  {
                        'Vulnerability to drought (%)': "8",
                        "CountryCode": "462",
                        "Country": "Maldives"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "466",
                        "Country": "Mali"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "470",
                        "Country": "Malta"
                  },
                  {
                        'Vulnerability to drought (%)': "32",
                        "CountryCode": "584",
                        "Country": "Marshall Islands"
                  },
                  {
                        'Vulnerability to drought (%)': "58",
                        "CountryCode": "478",
                        "Country": "Mauritania"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "480",
                        "Country": "Mauritius"
                  },
                  {
                        'Vulnerability to drought (%)': "14",
                        "CountryCode": "484",
                        "Country": "Mexico"
                  },
                  {
                        'Vulnerability to drought (%)': "41",
                        "CountryCode": "583",
                        "Country": "Micronesia, Federated States of"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "492",
                        "Country": "Monaco"
                  },
                  {
                        'Vulnerability to drought (%)': "72",
                        "CountryCode": "496",
                        "Country": "Mongolia"
                  },
                  {
                        'Vulnerability to drought (%)': "28",
                        "CountryCode": "499",
                        "Country": "Montenegro"
                  },
                  
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "508",
                        "Country": "Mozambique"
                  },
                  {
                        'Vulnerability to drought (%)': "92",
                        "CountryCode": "104",
                        "Country": "Myanmar"
                  },
                  {
                        'Vulnerability to drought (%)': "55",
                        "CountryCode": "516",
                        "Country": "Namibia"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "520",
                        "Country": "Nauru"
                  },
                  {
                        'Vulnerability to drought (%)': "82",
                        "CountryCode": "524",
                        "Country": "Nepal"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "528",
                        "Country": "Netherlands"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "554",
                        "Country": "New Zealand"
                  },
                  {
                        'Vulnerability to drought (%)': "54",
                        "CountryCode": "558",
                        "Country": "Nicaragua"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "562",
                        "Country": "Niger"
                  },
                  {
                        'Vulnerability to drought (%)': "74",
                        "CountryCode": "566",
                        "Country": "Nigeria"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "570",
                        "Country": "Niue"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "578",
                        "Country": "Norway"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "512",
                        "Country": "Oman"
                  },
                  {
                        'Vulnerability to drought (%)': "64",
                        "CountryCode": "586",
                        "Country": "Pakistan"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "585",
                        "Country": "Palau"
                  },
                  {
                        'Vulnerability to drought (%)': "18",
                        "CountryCode": "591",
                        "Country": "Panama"
                  },
                  {
                        'Vulnerability to drought (%)': "73",
                        "CountryCode": "598",
                        "Country": "Papua New Guinea"
                  },
                  {
                        'Vulnerability to drought (%)': "49",
                        "CountryCode": "600",
                        "Country": "Paraguay"
                  },
                  {
                        'Vulnerability to drought (%)': "36",
                        "CountryCode": "604",
                        "Country": "Peru"
                  },
                  {
                        'Vulnerability to drought (%)': "50",
                        "CountryCode": "608",
                        "Country": "Philippines"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "616",
                        "Country": "Poland"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "620",
                        "Country": "Portugal"
                  },
                  {
                        'Vulnerability to drought (%)': "",
                        "CountryCode": "630",
                        "Country": "Puerto Rico"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "634",
                        "Country": "Qatar"
                  },
                  {
                        'Vulnerability to drought (%)': "11",
                        "CountryCode": "498",
                        "Country": "Republic of Moldova"
                  },
                  {
                        'Vulnerability to drought (%)': "17",
                        "CountryCode": "642",
                        "Country": "Romania"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "643",
                        "Country": "Russian Federation"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "646",
                        "Country": "Rwanda"
                  },
                  {
                        'Vulnerability to drought (%)': "56",
                        "CountryCode": "659",
                        "Country": "Saint Kitts and Nevis"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "662",
                        "Country": "Saint Lucia"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "670",
                        "Country": "Saint Vincent and the Grenadines"
                  },
                  {
                        'Vulnerability to drought (%)': "53",
                        "CountryCode": "882",
                        "Country": "Samoa"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "674",
                        "Country": "San Marino"
                  },
                  {
                        'Vulnerability to drought (%)': "71",
                        "CountryCode": "678",
                        "Country": "Sao Tome and Principe"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "682",
                        "Country": "Saudi Arabia"
                  },
                  {
                        'Vulnerability to drought (%)': "51",
                        "CountryCode": "686",
                        "Country": "Senegal"
                  },
                  {
                        'Vulnerability to drought (%)': "32",
                        "CountryCode": "688",
                        "Country": "Serbia"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "690",
                        "Country": "Seychelles"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "694",
                        "Country": "Sierra Leone"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "702",
                        "Country": "Singapore"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "703",
                        "Country": "Slovakia"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "705",
                        "Country": "Slovenia"
                  },
                  {
                        'Vulnerability to drought (%)': "90",
                        "CountryCode": "090",
                        "Country": "Solomon Islands"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "706",
                        "Country": "Somalia"
                  },
                  {
                        'Vulnerability to drought (%)': "15",
                        "CountryCode": "710",
                        "Country": "South Africa"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "724",
                        "Country": "Spain"
                  },
                  {
                        'Vulnerability to drought (%)': "75",
                        "CountryCode": "144",
                        "Country": "Sri Lanka"
                  },
                  {
                        'Vulnerability to drought (%)': "79",
                        "CountryCode": "736",
                        "Country": "Sudan"
                  },
                  {
                        'Vulnerability to drought (%)': "12",
                        "CountryCode": "740",
                        "Country": "Suriname"
                  },
                  {
                        'Vulnerability to drought (%)': "55",
                        "CountryCode": "748",
                        "Country": "Swaziland"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "752",
                        "Country": "Sweden"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "756",
                        "Country": "Switzerland"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "760",
                        "Country": "Syrian Arab Republic"
                  },
                  {
                        'Vulnerability to drought (%)': "34",
                        "CountryCode": "762",
                        "Country": "Tajikistan"
                  },
                  {
                        'Vulnerability to drought (%)': "26",
                        "CountryCode": "764",
                        "Country": "Thailand"
                  },
                  {
                        'Vulnerability to drought (%)': "33",
                        "CountryCode": "807",
                        "Country": "The former Yugoslav Republic of Macedonia"
                  },
                  {
                        'Vulnerability to drought (%)': "92",
                        "CountryCode": "626",
                        "Country": "Timor-Leste"
                  },
                  {
                        'Vulnerability to drought (%)': "94",
                        "CountryCode": "768",
                        "Country": "Togo"
                  },
                  {
                        'Vulnerability to drought (%)': "",
                        "CountryCode": "772",
                        "Country": "Tokelau"
                  },
                  {
                        'Vulnerability to drought (%)': "43",
                        "CountryCode": "776",
                        "Country": "Tonga"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "780",
                        "Country": "Trinidad and Tobago"
                  },
                  
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "792",
                        "Country": "Turkey"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "795",
                        "Country": "Turkmenistan"
                  },
                  {
                        'Vulnerability to drought (%)': "19",
                        "CountryCode": "798",
                        "Country": "Tuvalu"
                  },
                  {
                        'Vulnerability to drought (%)': "95",
                        "CountryCode": "800",
                        "Country": "Uganda"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "804",
                        "Country": "Ukraine"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "784",
                        "Country": "United Arab Emirates"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "826",
                        "Country": "United Kingdom"
                  },
                  {
                        'Vulnerability to drought (%)': "94",
                        "CountryCode": "834",
                        "Country": "United Republic of Tanzania"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "840",
                        "Country": "United States"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "858",
                        "Country": "Uruguay"
                  },
                  {
                        'Vulnerability to drought (%)': "11",
                        "CountryCode": "860",
                        "Country": "Uzbekistan"
                  },
                  {
                        'Vulnerability to drought (%)': "84",
                        "CountryCode": "548",
                        "Country": "Vanuatu"
                  },
                  {
                        'Vulnerability to drought (%)': "5",
                        "CountryCode": "862",
                        "Country": "Venezuela"
                  },
                  {
                        'Vulnerability to drought (%)': "56",
                        "CountryCode": "704",
                        "Country": "Viet Nam"
                  },
                  {
                        'Vulnerability to drought (%)': "33",
                        "CountryCode": "887",
                        "Country": "Yemen"
                  },
                  {
                        'Vulnerability to drought (%)': "83",
                        "CountryCode": "894",
                        "Country": "Zambia"
                  },
                  /*{
                        'Vulnerability to drought (%)': "66",
                        "CountryCode": "716",
                        "Country": "Zimbabwe"
                  },*/
                  {
                        'Vulnerability to drought (%)': "7.79",
                        "CountryCode": "504",
                        "Country": "Morocco"
                  },
                  {
                        'Vulnerability to drought (%)': "4.53",
                        "CountryCode": "012",
                        "Country": "Algeria"
                  },
                  {
                        'Vulnerability to drought (%)': "0.43",
                        "CountryCode": "818",
                        "Country": "Egypt"
                  },
                  {
                        'Vulnerability to drought (%)': "0.55",
                        "CountryCode": "434",
                        "Country": "Libyan Arab Jamahiriya"
                  },
                  {
                        'Vulnerability to drought (%)': "9.82",
                        "CountryCode": "788",
                        "Country": "Tunisia"
                  },
                  
            ];